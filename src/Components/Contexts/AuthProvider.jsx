import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
import { toast } from 'react-toastify';





const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    // console.log(user)

    const googleProvider = new GoogleAuthProvider();

    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    const logoutUser = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {
                toast.success('signOut Success')

            }).catch((err) => {
                toast.error(err.message)
            });

        return
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser)
            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            unSubscribe();
        }
    }, [])
    const AuthInfo = {
        createUser,
        setUser,
        user,
        updateUserProfile,
        loginUser,
        logoutUser,
        loading,
        setLoading,
        googleSignin,
    }

    return (
        <AuthContext value={AuthInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;