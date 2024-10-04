// src/App.jsx
import "./login-logout.css"
import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Logout from './Logout';
import Login from './Login';


const All = () => {
const [user, setUser] = useState(null);
const [showSignUp, setShowSignUp] = useState(false);

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    return () => unsubscribe();
}, []);







    return (

        <div>
            
            {user && <h1 style={{ color: "white" }}>Welcome, {user.email}!</h1>}
            {user ? (
                <Logout onLogout={() => setUser(null)} />
            ) : (
                <>
                    {showSignUp ? (
                        <SignUp onSignUp={() => setUser(auth.currentUser)} />
                    ) : (
                        <Login onLogin={() => setUser(auth.currentUser)} />
                    )}
                    <button style={{ marginLeft: "30px", marginTop: "30px", width: "300px" }} onClick={() => setShowSignUp((prev) => !prev)}>
                        {showSignUp ? 'Already have an account? Log In' : 'Need and account? Sign Up'}
                    </button>
                </>
            )}

        </div>

    );
};




export default All
