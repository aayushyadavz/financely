import React, { useState } from 'react'
import "./styles.css"
import Input from '../Input'
import Button from '../Button'
import useGoogleAuth from '../../hooks/useGoogleAuth'

const SignInSignUp = () => {

    const [loginForm, setLoginForm] = useState(false)
    const {
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
    } = useGoogleAuth()

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
                        <Button onClick={googleAuth} text={loading ? "Loading..." : "Log In using Google"} blue={true} />

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
                        <Button onClick={googleAuth} text={loading ? "Loading..." : "Sign Up using Google"} blue={true} />

                        <p className='p-login'>or Already have an account? <span onClick={() => setLoginForm(!loginForm)}>Click Here</span></p>
                    </form>
                </div>
            }
        </>
    )
}

export default SignInSignUp