import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import UserInfo from '../components/UserInfo/UserInfo';
import UserActions from '../components/UserActions/UserActions';
import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserContextProvider(props) {
    const [editForm, setEditForm] = useState(false);
    const [userInfo, setUserInfo] = useState({});


    return (
        <UserContext.Provider value={ {
            editForm: editForm,
            setEditForm: setEditForm,
            userInfo: userInfo,
        } }>
            { props.children }
        </UserContext.Provider>
    );
}

export default function SignUpPage() {

    const userURL = `${import.meta.env.VITE_BLOG_API_BASE_URL}auth/me`;

    const mainStyle = {
        display: "flex",
    }

    return (
        <>
            <Header />
            <Main>
                {/* <UserActions />
                <UserInfo infoURL={ userURL } /> */}
                <UserContextProvider>
                    <UserActions />
                    <UserInfo infoURL={ userURL } />
                </UserContextProvider>

            </Main>
            <Footer />
        </>
    );
}