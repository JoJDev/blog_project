import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../pages/UserPage";

import axios from "axios";

import './UserInfo.scss';

export default function UserInfo({ infoURL }) {

    useEffect(() => {
        axios.get(infoURL, {
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("access"),
                "Content-Type": "application/json"
            }
        })
            .then()
            .catch(error => console.log(error))
    }, [])

    const handelLoad = () => {

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
                console.log(res.data);
                //!sessionStorage.getItem("access") ? saveKeys(res.data) : "";
            })
            .catch(error => setMessage("Error: no se pudo conectar con la base de datos, intentelo más tarde"));
    }

    return (
        <form className="user_info" onSubmit={ () => { } }>
            <label htmlFor="name">Nombre: </label>
            <input type="text" id='name' value={ "dato" } disabled />
            <label htmlFor="lastname">Apellidos: </label>
            <input type="text" id='lastname' value={ "dato" } disabled />
            <label htmlFor="username">Nombre de usuario: </label>
            <input type="text" id='username' value={ "dato" } disabled />
            <label htmlFor="email">Correo electrónico: </label>
            <input type="email" id='email' value={ "dato" } disabled />
            <label htmlFor="facebook">Facebook: </label>
            <input type="url" id='facebook' value={ "dato" } disabled />
            <label htmlFor="twitter">Twitter </label>
            <input type="url" id='twitter' value={ "dato" } disabled />
            <label htmlFor="twitch">Twitch: </label>
            <input type="url" id='twitch' value={ "dato" } disabled />

            <input type="reset" value="Resetear" style={{}}/>
            <input type="submit" value="Cambiar" />

        </form>
    );
}