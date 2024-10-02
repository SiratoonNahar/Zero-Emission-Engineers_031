
import React, { useState } from 'react';
import { auth } from '../firebase';

import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            onLogin();
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="auth-container">
            <h2 style={{color:"white"}}>Login</h2>
            {error && <p style={{ color: 'red',fontWeight:"800" }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <label  style={{color:"white",display:"flex",justifyContent:"flex-start"}} htmlFor="">Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /> <br />
                 <label  style={{color:"white",display:"flex",justifyContent:"flex-start"}} htmlFor="">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /> <br /><br />
                <button style={{background:"#1a56db",color:'white',width:'250px'}} type="submit">Login</button>
                <br />
            </form>
        </div>
    );
};

export default Login;
