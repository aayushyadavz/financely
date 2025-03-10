import React from 'react'
import Header from '../components/Header'
import SignInSignUp from '../components/SignInSignUp'

const SignUp = () => {
    return (
        <div>
            <Header />
            <div className='wrapper'>
                <SignInSignUp />
            </div>
        </div>
    )
}

export default SignUp