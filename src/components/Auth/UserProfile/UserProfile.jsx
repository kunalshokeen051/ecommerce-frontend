import {useAuth0 } from "@auth0/auth0-react";
import React,{useContext, useEffect} from "react";
import {Context} from '../../../utils/Context'

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const {setUser} = useContext(Context);
  
  useEffect(() => {
    let auth = sessionStorage.getItem("auth");
    let image = sessionStorage.getItem("image");
    let name = sessionStorage.getItem("name");
    let email = sessionStorage.getItem("email");

    if(auth){
      setUser({
        name:name,
        email:email,
        image:image,
      });
    }
  }, []); 

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
      </div>
    )
  );
};

export default UserProfile;