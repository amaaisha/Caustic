import React from 'react';
import './profile.navLink.button.css';
import { Link } from 'react-router-dom';

const ProfileNavLinkButton = ({ name }) => (
  <Link to={name.split(' ').join('-')} className='profileNavLinkButtonContainer'>
    <p className='profileNavLinkButtonText'>{name}</p>
  </Link>
);

export default ProfileNavLinkButton;
