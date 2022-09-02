import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import Signup from '../components/Signup/Signup';

export default function SignUpPage() {

    const mainStyle = {
        display: "flex",
    }

    return (
        <>
            <Header />
            <Main>
                <div style={mainStyle}>
                    <Signup />
                </div>
            </Main>
            <Footer />
        </>
    );
}