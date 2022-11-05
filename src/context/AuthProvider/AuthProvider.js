import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut} from 'firebase/auth';

import app from '../../firebase/firebase.config'

export const AuthContext =  createContext();
const auth = getAuth(app)





const AuthProvider = ({children}) => {

const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)    


const createUser = (email, password) => {
    setLoading(true)
 return createUserWithEmailAndPassword(auth, email, password);
}

const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut= () => {
    return signOut(auth);
}

const passwordChange = (email) => {
    return sendPasswordResetEmail(auth, email)
}


useEffect( () => {

    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)
    });
    return () => unsubscribe();
}, [])


const authInfo = {user, loading, createUser, login, logOut, passwordChange}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;