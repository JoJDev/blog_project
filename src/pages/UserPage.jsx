import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import UserInfo from '../components/UserInfo/UserInfo';
import UserActions from '../components/UserActions/UserActions';
import { Link } from 'react-router-dom';

export default function SignUpPage() {

    const userURL = `${import.meta.env.VITE_BLOG_API_BASE_URL}auth/me`;

    const mainStyle = {
        display: "flex",
    }

    return (
        <>
            <Header />
            <Main>

                <UserActions infoURL={userURL} />
                <UserInfo />

            </Main>
            <Footer />
        </>
    );
}