import React from 'react';
import './profile.navLink.styles.css';
import inactiveProfile from '../../../assets/inactiveProfile.png';
import activeProfile from '../../../assets/activeProfile.png';
import Icon from '../../../components/icon/icon';
import ProfileNavLinkDropdown from './profileNavLinkDropdown/profile.navLink.dropdown';

const ProfileNavLink = () => {
  const [active, setActive] = React.useState(false);
  const mouseEnter = () => setActive(true);
  const mouseLeave = () => setActive(false);
  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className='profileNavLinkContainer'
    >
      <Icon size={27} icon={active ? activeProfile : inactiveProfile} />
      <ProfileNavLinkDropdown />
    </div>
  );
};

export default ProfileNavLink;
