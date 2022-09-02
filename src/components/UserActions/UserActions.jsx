import { useContext } from 'react';
import { UserContext } from '../../pages/UserPage';

import './UserActions.scss';

export default function UserActions() {
    const {editForm, setEditForm} = useContext(UserContext);

    function modify(){
        setEditForm(!editForm);

    }

    function changeName(){

    }

    function deleteAccount(){

    }

    return (
        <ul className="user_actions">
            <li><button onClick={modify} >Modificar</button></li>
            <li><button >Cambiar nombre</button></li>
            <li><button >Eliminar cuenta</button></li>
        </ul>
    );
}