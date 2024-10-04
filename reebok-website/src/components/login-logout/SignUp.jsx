
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = ({ onSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            onSignUp(); 
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="auth-container">
            <h2 style={{color:"white"}}>Sign Up</h2>
            {error && <p style={{ color: 'red',fontWeight:"800" }}>{error}</p>}
            <form onSubmit={handleSignUp}>
            <label  style={{color:"white",display:"flex",justifyContent:"flex-start"}} htmlFor="">Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                 <label  style={{color:"white",display:"flex",justifyContent:"flex-start"}} htmlFor="">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /> <br /> <br />
                <button  style={{background:"#1a56db",color:'white',width:'250px'}} type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
