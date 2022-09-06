//import { useContext } from 'react';
//import { UserContext } from '../../pages/UserPage';

import './UserActions.scss';

export default function UserActions({editForm, setEditForm, }) {
    //const {editForm, setEditForm} = useContext(UserContext);

    function modify(){
        setEditForm(!editForm);
        console.log(editForm);

    }

    function changeName(){

    }

    function deleteAccount(){
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
    }

    return (
        <ul className="user_actions">
            <li><button onClick={modify} >Modificar</button></li>
            <li><button >Cambiar nombre</button></li>
            <li><button >Eliminar cuenta</button></li>
        </ul>
    );
}