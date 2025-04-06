import React, { useEffect } from 'react'
import "./styles.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../../firebase"
import { useNavigate } from 'react-router-dom';
import useGoogleAuth from '../../hooks/useGoogleAuth';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()
    const { logoutFnc } = useGoogleAuth()

    useEffect(() => {
        if (user) {
            navigate("/dashboard")
        }
    }, [user, loading]);

    return (
        <div className='navbar'>
            <p className='logo'>Financely.</p>
            {user && (
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <img
                        src={user.photoURL ? user.photoURL : "/user.svg"}
                        height="25px"
                        width="25px"
                        style={{
                            borderRadius: "50%"
                        }} />
                    <p className='logo link' onClick={logoutFnc}>Logout</p>
                </div>
            )}
        </div>
    )
}

export default Header