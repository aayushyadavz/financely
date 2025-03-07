import React from 'react'
import "./styles.css"

const Header = () => {
    const logoutFnc = () => {
        alert("You have been logged out")
    }

    return (
        <div className='navbar'>
            <p className='logo'>Financely.</p>
            <p className='logo link' onClick={logoutFnc}>Logout</p>
        </div>
    )
}

export default Header