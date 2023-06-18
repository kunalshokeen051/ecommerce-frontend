import React, { useContext } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Context } from '../../utils/Context'

const LogOut = () => {
  const { logout } = useAuth0();
  const { setAuth } = useContext(Context);

  return (
    <button onClick={() => {
      return (
        setAuth(false),
        logout({ logoutParams: { returnTo: window.location.origin } })
      )
    }}>
      Log Out
    </button>
  );
}

export default LogOut