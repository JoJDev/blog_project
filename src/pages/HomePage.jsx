import Header from './../components/Header/Header';
import Main from './../components/Main/Main';
import Footer from './../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Posts from '../components/Posts/Posts';

export default function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <Posts />
            <h3>Posts segun categorias</h3>
            <h3>Ultimos comentarios</h3>


            <Main />
            <Footer />
        </>
    );
}