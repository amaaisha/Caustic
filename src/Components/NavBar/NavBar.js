import React from 'react'
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/LogIn'}>Log In</NavLink>
      <NavLink to={'/SignUp'}>SignUp</NavLink>
      <NavLink to={'/ViewProfile'}>View Profile</NavLink>
      <NavLink to={'/SingleProducts'}>Single Products</NavLink>
      <NavLink to={'/EditProfile'}>Edit Profile</NavLink>
      <NavLink to={'/Cart'}>Cart</NavLink>
      <NavLink to={'/Checkout'}>Checkout</NavLink>
      <NavLink to={'/AllProducts'}>All Products</NavLink>
    </div>
  )
};

export default NavBar;