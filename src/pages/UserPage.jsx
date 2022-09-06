import { useState, useEffect } from "react";
import axios from "axios";

import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import UserInfo from '../components/UserInfo/UserInfo';
import UserActions from '../components/UserActions/UserActions';
import { useNavigate,Navigate } from 'react-router-dom';

export default function UserPage() {
    const [editForm, setEditForm] = useState(false);
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const userURL = `${import.meta.env.VITE_BLOG_API_BASE_URL}auth/me`;

    useEffect(() => {
        console.log("effect used");
        axios.get(userURL, {
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("access"),
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                setUser(res.data);
            })
            .catch(error => console.log(error))
    }, [])

    function saveChanges(user) {
        axios.put(userURL, {
            // user = e.target (text inputs from a form)
            "first_name": user[0].value,
            "last_name": user[1].value,
            "username": user[2].value,
            "email": user[3].value,
            "facebook": user[4].value,
            "twitter": user[5].value,
            "twitch": user[6].value,
        }, {
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("access"),
                "Content-Type": "application/json"
            },
        })
            .then(res => {
                console.log(res.data, user);

            })
            .catch(error => console.log(error, user[0].value))
    }

    function deleteUser() {

        axios.delete(userURL, {
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("access"),
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                setUser(res.data);
                sessionStorage.removeItem("access");
                sessionStorage.removeItem("refresh");
                Navigate({ to: "/" })
            })
            .catch(error => {
                console.log(error);
                navigate("/");
            })
    }

    return (
        <>
            <Header />
            <Main>
                {/* <UserActions />
                <UserInfo infoURL={ userURL } /> */}
                {/* <UserContextProvider> */ }
                <UserInfo user={ user } editForm={ editForm } saveUser={ saveChanges } />
                <UserActions editForm={ editForm } setEditForm={ setEditForm } deleteUser={ deleteUser } />
                {/* </UserContextProvider> */ }
                <h3>Contraseña</h3>

                <h3>Tus posts</h3>
                <h3>Tus comentarios</h3>


            </Main>
            <Footer />
        </>
    );
}