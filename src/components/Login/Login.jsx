import axios from "axios";
import { useState } from "react";

import './Login.scss';

export default function Login() {
    const [message, setMessage] = useState("");

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
            "email": event.target.email.value,//"dan@gmail.com",
            "password": event.target.pass.value//"pass"
        })
            .then(res => {
                console.log(res.data);
                !sessionStorage.getItem("access") ? saveKeys(res.data) : "";
            })
            .catch(error => setMessage("Error: Correo electronico o contraseña incorrecta"));
    }


    return (
        <div className="login__container">
            <h2>Inicia sesión</h2>
            <h4 className='login__message'>{ message }</h4>

            <form onSubmit={ handleSubmit }>
                <label htmlFor="email"> Correo electronico</label>
                <input type="email" id="email" required autofocus/>
                <label htmlFor="pass"> Contraseña</label>
                <input type="password" id="pass" required/>
                <input type="submit" value="Inicia sesión" />
            </form>
        </div>
    );
}