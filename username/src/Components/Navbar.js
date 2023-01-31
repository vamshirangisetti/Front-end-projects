import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="emo">
      <NavLink to="/" className="bar" >Home</NavLink>
      <NavLink to="/profile" className="bar" >Profile</NavLink>
      <NavLink to="/change" className="bar" >Change U-Name</NavLink>
    </div>
  )
}

export default Navbar;
