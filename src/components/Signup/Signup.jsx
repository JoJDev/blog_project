import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

import './Signup.scss'

export default function Signup() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const singURL = `${import.meta.env.VITE_BLOG_API_BASE_URL}auth/register`;
    const loginURL = `${import.meta.env.VITE_BLOG_API_BASE_URL}auth/login/`;

    function firstLogin(email, pass) {
        axios.post(loginURL, {
            "email": email,
            "password": pass
        })
            .then(res => {
                sessionStorage.setItem("access", res.data.access);
                sessionStorage.setItem("refresh", res.data.refresh);
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

    const handleSubmit = (event) => {
        event.preventDefault();

        //-------------------- confirms section-----------------------------
        if (event.target.password.value !== event.target.cPassword.value) {
            setMessage("Error: La contraseña y su confirmación no coinciden");
            return;
        }

        //-------------------------------------------------------------------
        let pass = event.target.password.value;
        axios.post(singURL, {
            "username": event.target.username.value,
            "email": event.target.email.value,
            "password": event.target.password.value
        })
            .then(res => {
                firstLogin(event.target.email.value, pass)
            })
            .catch(error => setMessage(error.response.data.email ?
                "Correo o usuario ya registrado" :
                "Error: no se pudo conectar con la base de datos, inténtelo más tarde"));
    }

    return (
        <div className="signup__container">
            <h2>Crear nueva cuenta</h2>
            <br />
            <h4 className='signup__mensaje'>{ message }</h4>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="username"> Nombre de usuario</label>
                <input type="text" id="username" required autoFocus />
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" required />
                <label htmlFor="password"> Contraseña</label>
                <input type="password" id="password" required />
                <label htmlFor="cPassword"> Confirma contraseña</label>
                <input type="password" id="cPassword" required />

                <input type="submit" value="Registrarse" />
            </form>
        </div>
    );
}