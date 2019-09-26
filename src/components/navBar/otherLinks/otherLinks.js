import React from 'react';
import './otherLinks.styles.css';
import inactiveProfile from '../../../assets/inactiveProfile.png';
import activeProfile from '../../../assets/activeProfile.png';
import inactiveSearch from '../../../assets/inactiveSearch.png';
import activeCart from '../../../assets/activeCart.png';
import inactiveCart from '../../../assets/inactiveCart.png';
import activeSearch from '../../../assets/activeSearch.png';
import OtherLink from './otherLink/otherLink';

const OtherLinks = () => (
  <div className='otherLinksContainer'>
    <OtherLink route='cart' dropDown activeIcon={activeCart} inactiveIcon={inactiveCart} />
    <OtherLink route='search' activeIcon={activeSearch} inactiveIcon={inactiveSearch} />
    <OtherLink route='profile' dropDown activeIcon={activeProfile} inactiveIcon={inactiveProfile} />
  </div>
);

export default OtherLinks;
