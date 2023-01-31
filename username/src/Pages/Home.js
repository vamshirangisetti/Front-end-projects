import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';

const Home = () => {
  const {username}=useContext(AppContext);
  return (
    <div>
      <h1>Hi {username}!</h1>
    </div>
  )
}

export default Home;
