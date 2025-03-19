import React, { useState } from 'react'
import "./styles.css"
import Input from '../Input'
import Button from '../Button'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const SignInSignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [loginForm, setLoginForm] = useState(false)
    const navigate = useNavigate()

    function signupWithEmail() {
        setLoading(true)
        if (name != "" && email.length != "" && password.length != "" && confirmPassword.length != "") {
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

    function createDoc() { }

    return (
        <>
            {loginForm ?
                <div className='signup-wrapper'>
                    <h2 className='title'>Log In on <span style={{ color: "var(--theme)" }}>financely.</span></h2>
                    <form>
                        <Input type={"email"} label={"Email"} placeholder={"johndoe@gmail.com"} state={email} setState={setEmail} />
                        <Input type={"password"} label={"Password"} placeholder={"Example@123"} state={password} setState={setPassword} />

                        <Button text={loading ? "Loading..." : "Log In using Email and Password"} onClick={logInWithEmail} disabled={loading} />
                        <p className='p-login'>or</p>
                        <Button text={loading ? "Loading..." : "Log In using Google"} blue={true} />

                        <p className='p-login'>or Don't have an account? <span onClick={() => setLoginForm(!loginForm)}>Click Here</span></p>
                    </form>
                </div>
                :
                <div className='signup-wrapper'>
                    <h2 className='title'>Sign up on <span style={{ color: "var(--theme)" }}>financely.</span></h2>
                    <form>
                        <Input type={"text"} label={"Full Name"} placeholder={"John Doe"} state={name} setState={setName} />
                        <Input type={"email"} label={"Email"} placeholder={"johndoe@gmail.com"} state={email} setState={setEmail} />
                        <Input type={"password"} label={"Password"} placeholder={"Example@123"} state={password} setState={setPassword} />
                        <Input type={"password"} label={"Confirm Password"} placeholder={"Example@123"} state={confirmPassword} setState={setConfirmPassword} />

                        <Button text={loading ? "Loading..." : "Sign Up using Email and Password"} onClick={signupWithEmail} disabled={loading} />
                        <p className='p-login'>or</p>
                        <Button text={loading ? "Loading..." : "Sign Up using Google"} blue={true} />

                        <p className='p-login'>or Already have an account? <span onClick={() => setLoginForm(!loginForm)}>Click Here</span></p>
                    </form>
                </div>
            }
        </>
    )
}

export default SignInSignUp