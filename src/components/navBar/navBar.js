import React from 'react';
import {Link} from 'react-router-dom';
import './navBar.styles.css';
import NavBarRoute from './navBarRoute/navBar.route';
import navLinks from './navBar.links';
import OtherLinks from './otherLinks/otherLinks';

const NavBar = () => (
  <div className='navBarContainer'>
    <Link to='/' className='navBarLogoContainer' />
    <div className='navLinksContainer'>
      {navLinks.map((navLink) => (
        <NavBarRoute navLink={navLink} />
      ))}
    </div>
    <OtherLinks />
  </div>
);

export default NavBar;
