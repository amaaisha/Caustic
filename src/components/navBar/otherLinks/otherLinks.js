import React from 'react';
import './otherLinks.styles.css';
import inactiveSearch from '../../../assets/inactiveSearch.png';
import activeCart from '../../../assets/activeCart.png';
import inactiveCart from '../../../assets/inactiveCart.png';
import activeSearch from '../../../assets/activeSearch.png';
import OtherLink from './otherLink/otherLink';
import ProfileNavLink from '../../../pages/profile/profileNavLink/profile.navLink';

const OtherLinks = () => (
  <div className='otherLinksContainer'>
    <OtherLink route='cart' dropDown activeIcon={activeCart} inactiveIcon={inactiveCart} />
    <OtherLink route='search' activeIcon={activeSearch} inactiveIcon={inactiveSearch} />
    <ProfileNavLink />
  </div>
);

export default OtherLinks;
