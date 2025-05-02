import type React from 'react';
import './LoginForm.css';

const LoginForm: React.FC = () => {
	return (
		<form className='login-form'>
			<div className='login-inputs'>
				<div>
					<label htmlFor='username'>Email:</label>
					<input type='text' id='username' name='username' placeholder='email@email.com' required />
				</div>
				<div>
					<label htmlFor='password'>Senha:</label>
					<input type='password' id='password' name='password' placeholder='********' required />
				</div>
			</div>
			<button className='login-btn' type='submit'>Entrar</button>
		</form>
	)
};

export default LoginForm;