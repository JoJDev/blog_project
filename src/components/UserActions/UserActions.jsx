//import { useContext } from 'react';
//import { UserContext } from '../../pages/UserPage';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './UserActions.scss';

export default function UserActions({ editForm, setEditForm, deleteUser }) {
    //const {editForm, setEditForm} = useContext(UserContext);

    // function activateInputs() {
    //     const inputs = document.querySelectorAll(".user_info label + input");
    //     inputs.forEach((item) => {
    //         if (item.value === "")
    //             item.removeAttribute("value");
    //     })
    // }

    function modify() {
        setEditForm(!editForm);
        console.log(editForm);

    }

    function changeName() {

    }

    return (
        <ul className="user_actions">
            <li><button onClick={ modify } > Modificar</button></li>
            <li><button >Cambiar Contraseña</button></li>
            <li><button onClick={ deleteUser }>Eliminar cuenta</button></li>
        </ul>
    );
}