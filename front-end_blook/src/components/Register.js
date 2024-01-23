import React, { useState } from 'react';
import "./Register.css";


function Register() {
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
            <div className="display_register">
                <form className='form_register' onSubmit={handleSubmit}>
                <h1>Register</h1>  
                    <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
                    <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
                    <button className='btn_submit_register' type="submit">Register</button>
                    <p className='redirection_login'>Vous n'avez pas encore de compte :
                        <a className='link_redirection_login' href="/login"> Connectez-vous</a>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Register;