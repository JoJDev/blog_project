import axios from "axios";
import { useState } from "react";

import './Signup.scss'

export default function Signup() {
    const [message, setMessage] = useState("");

    const singURL = `${import.meta.env.VITE_BLOG_API_BASE_URL}auth/register`;

    function getKeys(data) {
        sessionStorage.setItem("access", data.access);
        sessionStorage.setItem("refresh", data.refresh);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // axios.get("https://api.thecatapi.com/v1/favourites?api_key=5e7015cc-0034-4e5a-9caf-cfab4807e3b7")
        //     .then(res => sessionStorage.setItem("p",res.data[0].id + "4"))//console.log(res.data))
        //     .catch(error => console.error(error));

        //-------------------- confirms section---------------------
        if (event.target.password.value !== event.target.cPassword.value) {
            setMessage("Error: La contraseña y su confirmación no coinciden");
            return;
        }

        // for (let i = 0; i < 5; i++) {
        //     if (event.target[i].value === ""){
        //         setMessage("Error: Debe de rellenar todos los campos de texto");
        //         return;
        //     }
        // }
        //---------------------------------------------------------------

        axios.post(singURL, {
            "username": event.target.username.value,
            "email": event.target.email.value,
            "password": event.target.password.value
        })
            .then(res => {
                //!sessionStorage.getItem("access") ? saveKeys(res.data) : "";
            })
            .catch(error => setMessage("Error: no se pudo conectar con la base de datos, inténtelo más tarde"));
    }

    return (
        <div className="signup__container">
            <h2>Crear nueva cuenta</h2>
            <br />
            <h4 className='signup__mensaje'>{ message }</h4>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="username"> Nombre de usuario</label>
                <input type="text" id="username" required autofocus/>
                <label htmlFor="email">Correo electronico</label>
                <input type="email" id="email" required/>
                <label htmlFor="password"> Contraseña</label>
                <input type="password" id="password" required/>
                <label htmlFor="cPassword"> Confirma contraseña</label>
                <input type="password" id="cPassword" required/>

                <input type="submit" value="Registrarse" />
            </form>
        </div>
    );
}