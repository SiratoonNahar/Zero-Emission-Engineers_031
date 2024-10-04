
import React from 'react';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import "./login-logout.css"
const Logout = ({ onLogout }) => {
    const handleLogout = async () => {
        await signOut(auth);
        onLogout();
    };

    return (
        <div className="auth-container">
            <h2 style={{color:"white"}}>Logout</h2>
            <button style={{background:"#1a56db",color:'white'}} onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
