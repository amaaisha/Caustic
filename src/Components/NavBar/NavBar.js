import React from 'react'
import {NavLink} from "react-router-dom";
import './navBar.styles.css';
import DropDownMenu from "./dropDownMenu/dropDownMenu";


const NavBar = () => {
  return (
    <div className='container'>
      <div className='links'>
      <div className='icon'>
        <NavLink className='navLinks' to={'/'}><img src={require('./icons8-biohazard-40.png')} alt='Home' className='cart'/></NavLink>
      </div>
      <div className='middleLinks'>
        <NavLink className='navLinks' to={'/'}>Home</NavLink>
      {/*  /!*<NavLink className='navLinks' to={'/SingleProducts'}>Single Products</NavLink>*!/*/}
        <NavLink className='navLinks' to={'/AllProducts'}>Shop</NavLink>
      </div>
      <div className='sideLinks'>
        {/*<NavLink className='navLinks' to={'/SignUp'}>SignUp</NavLink>*/}
        {/*<NavLink to={'/EditProfile'}>Edit Profile</NavLink>*/}
        <NavLink to={'/Cart'}><img src={require('./icons8-checkout-64.png')} alt='Cart' className='cart'/></NavLink>
        {/*<NavLink className='navLinks' to={'/Checkout'}>Checkout</NavLink>*/}
        {/*<NavLink className='navLinks' to={'/LogIn'}>Log In</NavLink>*/}
        <DropDownMenu />
      </div>
      </div>
    </div>

  )
};

export default NavBar;
