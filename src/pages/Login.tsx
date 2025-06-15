import type React from 'react';
import LoginForm from '../components/LoginForm';
import logoName from '../assets/logo_name.png';
import homePage from '../assets/home-page.jpg';
import './Login.css';

const Login: React.FC = () => {
    return (
        <div className='login-page'>
            <div className='presentation'>
                <img src={logoName} alt='Penduraí' className='logo'/>
                <img className='presentation-image' src={homePage} alt='Imagem de negociação'/>
                <p className='presentation-text'>Imagem de Freepik.com</p>
            </div>
            <div className='login-container'>
                <h2>Login</h2>
                <div className='login-form-container'>
                    <LoginForm />
                    <p className='register-link'>Não tem uma conta? <a href="/register">Registre-se</a></p>
                </div>
            </div>
        </div>
    )
};

export default Login;