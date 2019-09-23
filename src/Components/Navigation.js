import React from 'react'
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li><NavLink to={'/LogIn'}>Log In</NavLink></li>
        <li><NavLink to={'/SignUp'}>SignUp</NavLink></li>
        <li><NavLink to={'/ViewProfile'}>View Profile</NavLink></li>
        <li><NavLink to={'/SingleProducts'}>Single Products</NavLink></li>
        <li><NavLink to={'/EditProfile'}>Edit Profile</NavLink></li>
        <li><NavLink to={'/Cart'}>Cart</NavLink></li>
        <li><NavLink to={'/Checkout'}>Checkout</NavLink></li>
        <li><NavLink to={'/AllProducts'}>All Products</NavLink></li>
      </ul>
    </div>
  )
};

export default Navigation;