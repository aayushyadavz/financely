import React, { useState } from 'react'
import "./styles.css"
import Input from '../Input'

const SignInSignUp = () => {
    const [name, setName] = useState("")

    return (
        <div className='signup-wrapper'>
            <h2 className='title'>Sign up on <span style={{ color: "var(--theme)" }}>financely.</span></h2>
            <form>
                <Input label={"Full Name"} placeholder={"John Doe"} state={name} setState={setName} />
            </form>
        </div>
    )
}

export default SignInSignUp