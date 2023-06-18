import React, { useContext } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {Context} from '../../utils/Context'

const LoginButton = () => {
const {setAuth} = useContext(Context);
    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => {
        return (
            loginWithRedirect(),
            setAuth(true)
        )
    }}>
    Log In</button>;
}

export default LoginButton