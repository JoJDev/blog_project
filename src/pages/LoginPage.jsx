import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import Login from '../components/Login/Login';

export default function LoginPage() {

    const mainStyle = {
        display: "flex",
    }

    return (
        <>
            <Header />
            <Main>
                <div style={mainStyle}>
                    <Login />
                </div>
            </Main>
            <Footer />
        </>
    );
}