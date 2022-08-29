import { useState } from 'react'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.scss'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    {/* <Hero /> */}
    <Main />
    <Footer />
    </>
  )
}

export default App
