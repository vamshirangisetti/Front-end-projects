import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';

const Profile = () => {
   const {username} = useContext(AppContext);
  return (
    <div>
      <h1>Your username is {username}.</h1>
    </div>
  )
}

export default Profile;
