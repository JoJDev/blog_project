import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './Login.scss';

export default function Login() {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const loginURL = `${import.meta.env.VITE_BLOG_API_BASE_URL}auth/login/`;

    function saveKeys(data) {
        sessionStorage.setItem("access", data.access);
        sessionStorage.setItem("refresh", data.refresh);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // axios.get("https://api.thecatapi.com/v1/favourites?api_key=5e7015cc-0034-4e5a-9caf-cfab4807e3b7")
        //     .then(res => sessionStorage.setItem("p",res.data[0].id + "4"))//console.log(res.data))
        //     .catch(error => console.error(error));

        
        axios.post(loginURL, {
            "email": event.target.email.value,
            "password": event.target.pass.value
        })
            .then(res => {
                saveKeys(res.data);
                navigate("/me");
            })
            .catch(error => {
                if (error.response.data) {
                    setMessage("Correo electrónico o contraseña incorrecta")
                }
                else if (error.code === "ERR_NETWORK")
                    setMessage("Problemas con el servidor")
                else
                    setMessage("Problemas con la aplicación")
                console.log(error)
            });
    }


    return (
        <div className="login__container">
            <h2>Inicia sesión</h2>
            <h4 className='login__message'>{ message }</h4>

            <form onSubmit={ handleSubmit }>
                <label htmlFor="email"> Correo electrónico</label>
                <input type="email" id="email" required autoFocus />
                <label htmlFor="pass"> Contraseña</label>
                <input type="password" id="pass" required />
                <input type="submit" value="Inicia sesión" />
            </form>
        </div>
    );
}