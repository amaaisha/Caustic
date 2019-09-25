import React from 'react'
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/logIn'}>Log In</NavLink>
      <NavLink to={'/sign-up'}>SignUp</NavLink>
      <NavLink to={'/view-profile'}>View Profile</NavLink>
      <NavLink to={'/single-products'}>Single Products</NavLink>
      <NavLink to={'/edit-profile'}>Edit Profile</NavLink>
      <NavLink to={'/cart'}>Cart</NavLink>
      <NavLink to={'/checkout'}>Checkout</NavLink>
      <NavLink to={'/all-products'}>All Products</NavLink>
    </div>
  )
};

export default NavBar;