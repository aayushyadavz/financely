import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, db, provider } from '../../firebase'
import { toast } from 'react-toastify'
import { doc, getDoc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider } from 'firebase/auth/web-extension'
import { useNavigate } from 'react-router-dom'

const useGoogleAuth = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    function signupWithEmail() {
        setLoading(true)
        if (name.length != "" && email.length != "" && password.length != "" && confirmPassword.length != "") {
            if (password == confirmPassword) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        console.log(user);
                        toast.success("Signed up successfully")
                        setLoading(false)
                        setName("")
                        setEmail("")
                        setPassword("")
                        setConfirmPassword("")
                        createDoc(user)
                        navigate("/dashboard")
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        toast.error(errorMessage)
                        setLoading(false)
                        // ..
                    });
            } else {
                toast.error("Passwords & Confirm Password do not match")
                setLoading(false)
            }
        } else {
            toast.error("Please fill all the fields")
            setLoading(false)
        }
    }

    function logInWithEmail() {
        setLoading(true)
        if (email.length != "" && password.length != "") {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    toast.success("Logged in successfully")
                    setLoading(false)
                    setEmail("")
                    setPassword("")
                    navigate("/dashboard")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(errorMessage)
                    setLoading(false)
                });
        } else {
            toast.error("Please fill all the fields")
            setLoading(false)
        }
    }

    async function createDoc(user) {
        setLoading(true)

        if (!user) return;

        const userRef = doc(db, "user", user.uid);
        const userData = await getDoc(userRef);

        if (!userData.exists()) {
            try {
                await setDoc(doc(db, "user", user.uid), {
                    name: user.displayName ? user.displayName : name,
                    email: user.email,
                    photoURL: user.photoURL ? user.photoURL : "",
                    createdAt: new Date()
                });
                setLoading(false)
            } catch (error) {
                toast.error(error.message)
                setLoading(false)
            }
        } else {
            setLoading(false)
        }
    }

    function googleAuth() {
        setLoading(true)
        try {
            signInWithPopup(auth, provider)
                .then((result) => {
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    const user = result.user;
                    createDoc(user)
                    setLoading(false)
                    navigate("/dashboard")
                    toast.success("User Authenticated successfully")
                }).catch((error) => {
                    setLoading(false)
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(errorMessage)
                });
        } catch (error) {
            setLoading(false)
            toast.error(error.message)
        }
    }

    return {
        name,
        email,
        password,
        confirmPassword,
        setName,
        setEmail,
        setPassword,
        setConfirmPassword,
        signupWithEmail,
        logInWithEmail,
        googleAuth,
        loading
    }
}

export default useGoogleAuth