//import { useState, useEffect, useContext } from "react";
//import { UserContext } from "../../pages/UserPage";

//import axios from "axios";

import './UserInfo.scss';

export default function UserInfo({ user, editForm, saveUser }) {


    return (
        <form className="user_info" onSubmit={ (e) => {
            e.preventDefault();
            saveUser(e.target);
        } }>

            <label htmlFor="name">Nombre: </label>
            <input type="text" id='name' placeholder={ user.first_name || "" }
                disabled={ !editForm ? "disabled" : "" } />

            <label htmlFor="lastname">Apellidos: </label>
            <input type="text" id='lastname' placeholder={ user.last_name || "" }
                disabled={ !editForm ? "disabled" : "" } />

            <label htmlFor="username">Nombre de usuario: </label>
            <input type="text" id='username' placeholder={ user.username || "" }
                disabled={ !editForm ? "disabled" : "" } />

            <label htmlFor="email">Correo electrónico: </label>
            <input type="email" id='email' placeholder={ user.email || "" }
                disabled={ !editForm ? "disabled" : "" } />

            <label htmlFor="facebook">Facebook: </label>
            <input type="url" id='facebook' placeholder={ user.facebook || "" }
                disabled={ !editForm ? "disabled" : "" } />

            <label htmlFor="twitter">Twitter </label>
            <input type="url" id='twitter' placeholder={ user.twitter || "" }
                disabled={ !editForm ? "disabled" : "" } />

            <label htmlFor="twitch">Twitch: </label>
            <input type="url" id='twitch' placeholder={ user.twitch || "" }
                disabled={ !editForm ? "disabled" : "" } />

            <input type="reset" value="Resetear" style={ editForm ? { display: "block" } : { display: "none" } } />
            <input type="submit" value="Cambiar" style={ editForm ? { display: "block" } : { display: "none" } } />

        </form>
    );
}