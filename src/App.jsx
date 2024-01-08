import { Route, Routes } from 'react-router-dom';
import './App.css'
import CartPage from './components/Pages/CartPage/CartPage';
import HomePage from './components/Pages/HomePage/Home';
import LoginPage from './components/Pages/LoginPage/LoginPage';
import SignUpPage from './components/Pages/SignUpPage/SignUpPage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </div>
  )
}