// src/components/Logout.js
import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Logout = ({ onLogout }) => {
    const handleLogout = async () => {
        await signOut(auth);
        onLogout();
    };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
