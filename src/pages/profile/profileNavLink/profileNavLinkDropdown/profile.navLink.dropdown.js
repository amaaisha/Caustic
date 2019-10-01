import React from 'react';
import './profile.navLink.dropdown.css';
import profileNavLinkRoutes from '../profile.navlink.routes';
import ProfileNavLinkButton from '../profileNavLinkButton/profile.navLink.button';

const ProfileNavLinkDropdown = () => (
  <div className='profileNavLinkDropdownContainer'>
    {profileNavLinkRoutes.map(({ name }) => (
      <ProfileNavLinkButton name={name} />
    ))}
  </div>
);

export default ProfileNavLinkDropdown;
