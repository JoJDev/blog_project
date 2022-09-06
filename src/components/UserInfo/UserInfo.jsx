//import { useState, useEffect, useContext } from "react";
//import { UserContext } from "../../pages/UserPage";

//import axios from "axios";

import './UserInfo.scss';

export default function UserInfo({ user, editForm, saveUser }) {


    let nameText = editForm ?
        <input type="text" id='name' placeholder={ user.first_name || "" } required/>
        :
        <label id='name'>{ user.first_name || "" } </label>;
    let lNameText = editForm ?
        <input type="text" id='lastname' placeholder={ user.last_name || "" } required/>
        :
        <label id='last_name'>{ user.last_name || "" } </label>;
    let usernameText = editForm ?
        <input type="text" id='username' placeholder={ user.username || "" } required/>
        :
        <label id='username'>{ user.username || "" } </label>;
    let emailText = editForm ?
        <input type="email" id='email' placeholder={ user.email || "" } required/>
        :
        <label id='email'>{ user.email || "" } </label>;
    let facebookText = editForm ?
        <input type="url" id='facebook' placeholder={ user.facebook || "" } required/>
        :
        <label id='facebook'>{ user.facebook || "" } </label>;
    let twitterText = editForm ?
        <input type="url" id='twitter' placeholder={ user.twitter || "" } required/>
        :
        <label id='twitter'>{ user.twitter || "" } </label>;
    let twitchText = editForm ?
        <input type="url" id='twitch' placeholder={ user.twitch || "" } required/>
        :
        <label id='twitch'>{ user.twitch || "" } </label>;


    return (
        <form className="user_info" onSubmit={ (e) => {
            e.preventDefault();
            saveUser(e.target);
        } }>

            <label htmlFor="name">Nombre: </label>
            { nameText }

            <label htmlFor="lastname">Apellidos: </label>
            {lNameText}

            <label htmlFor="username">Nombre de usuario: </label>
            {usernameText}

            <label htmlFor="email">Correo electrónico: </label>
            {emailText}

            <label htmlFor="facebook">Facebook: </label>
            {facebookText}

            <label htmlFor="twitter">Twitter </label>
            {twitterText}

            <label htmlFor="twitch">Twitch: </label>
            {twitchText}

            <input type="reset" value="Resetear" style={ editForm ? { display: "block" } : { display: "none" } } />
            <input type="submit" value="Cambiar" style={ editForm ? { display: "block" } : { display: "none" } } />

        </form>
    );
}