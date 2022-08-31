import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.scss';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import UserPage from './pages/UserPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signin' element={<SignUpPage />}/>
        <Route path='/me' element={<UserPage />}/>
        <Route path='/*' element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App
