
import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Logout = ({ onLogout }) => {
    const handleLogout = async () => {
        await signOut(auth);
        onLogout();
    };

    return (
        <div style={{display:"flex",justifyContent:"center"}}>
           
            <button style={{background:"#1a56db",color:'white'}} onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
