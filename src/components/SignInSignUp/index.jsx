import React, { useState } from 'react'
import "./styles.css"
import Input from '../Input'
import Button from '../Button'

const SignInSignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <div className='signup-wrapper'>
            <h2 className='title'>Sign up on <span style={{ color: "var(--theme)" }}>financely.</span></h2>
            <form>
                <Input label={"Full Name"} placeholder={"John Doe"} state={name} setState={setName} />
                <Input label={"Email"} placeholder={"johndoe@gmail.com"} state={email} setState={setEmail} />
                <Input label={"Password"} placeholder={"Example@123"} state={password} setState={setPassword} />
                <Input label={"Confirm Password"} placeholder={"Example@123"} state={confirmPassword} setState={setConfirmPassword} />

                <Button text={"Sign Up using Email and Password"} />
                <p style={{ textAlign: "center", margin: "0.5rem" }}>or</p>
                <Button text={"Sign Up using Google"} blue={true} />
            </form>
        </div>
    )
}

export default SignInSignUp