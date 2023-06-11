import React,{useContext} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './LogoutButton.scss';
import { Context } from '../../../utils/Context';

const LogoutButton = () => {
    const { logout } = useAuth0();
    const {setAuth, setUser} = useContext(Context);
    let auth = false;

    return (
      <div className="logout-button" onClick={() =>
      {return(
        setAuth(false),
      sessionStorage.setItem("auth", false),
        setUser(""),  
       logout({ logoutParams: { returnTo: window.location.origin }})
      )}
       }>
        Log Out
      </div>
    );
  };
  
  export default LogoutButton;