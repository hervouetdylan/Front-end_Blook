import React, { useState } from 'react';
import "./Login.css";


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <>
            <div className="display_login">
                <form className='form_login' onSubmit={handleSubmit}>
                <h1>Login</h1>  
                    <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
                    <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
                    <button className='btn_submit_login' type="submit">Login</button>
                    <p className='redirection_register'>Vous n'avez pas encore de compte :
                        <a className='link_redirection_register' href="/register"> Inscrivez-vous</a>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Login;