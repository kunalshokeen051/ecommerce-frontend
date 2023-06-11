import React,{useContext} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './LoginButton.scss';
import {BiUserCircle} from 'react-icons/bi';
import {Context} from '../../../utils/Context'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const {setAuth} = useContext(Context);
  let auth = false;

  return <BiUserCircle className="login-button" size={32}  onClick={
    () => {
       return (
        setAuth(true),
        sessionStorage.setItem("auth", true),
        loginWithRedirect()
       )}
    }/>;
};

export default LoginButton;