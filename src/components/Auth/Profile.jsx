import React, { useContext} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Context } from '../../utils/Context';
import './Style.scss'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { setCurrentUser } = useContext(Context);
  if (isLoading) {
    return <div>Loading ...</div>;
  }

return (
  isAuthenticated && (
    <div className='profile-container'>
      <img src={user.picture} alt={user.name} />
      <h3>{user.name}</h3>
      {/* <p>{user.email}</p> */}
    </div>
  )
);
}

export default Profile