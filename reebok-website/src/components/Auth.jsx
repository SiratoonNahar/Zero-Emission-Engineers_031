import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; 
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleAuth = async (e) => {
        e.preventDefault();
        if (isLogin) {
            // Handle Login
            try {
                await signInWithEmailAndPassword(auth, email, password);
                alert('Successfully logged in!'); 
                navigate('/'); 
            } catch (error) {
                setError('Failed to login. Please check your credentials.');
            }
        } else {
            // Handle Register
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                alert('Successfully registered!'); 
                navigate('/'); 
            } catch (error) {
                setError('Failed to register. Please try again.');
            }
        }
    };

    return (
        <div className="auth-background"> 
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className="auth-container">
                <div className="auth-box">
                    <h2>{isLogin ? 'Login' : 'Register'}</h2>
                    <form onSubmit={handleAuth}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
                    </form>
                    {error && <p className="error">{error}</p>}
                    <p>
                        {isLogin ? 'New user? ' : 'Already have an account? '}
                        <span className="register-link" onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? 'Register here' : 'Login here'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Auth;


