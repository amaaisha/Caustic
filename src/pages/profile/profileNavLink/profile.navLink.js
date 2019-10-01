import React from 'react';
import './profile.navLink.styles.css';
import { Link } from 'react-router-dom';
import inactiveProfile from '../../../assets/inactiveProfile.png';
import activeProfile from '../../../assets/activeProfile.png';
import Icon from '../../../components/icon/icon';
import ProfileNavLinkDropdown from './profileNavLinkDropdown/profile.navLink.dropdown';

const ProfileNavLink = ({ route }) => {
  const [active, setActive] = React.useState(false);
  const mouseEnter = () => setActive(true);
  const mouseLeave = () => setActive(false);
  return (
    <Link
      to={`/${route}`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className='profileNavLinkContainer'
    >
      <Icon size={27} icon={active ? activeProfile : inactiveProfile} />
      <ProfileNavLinkDropdown />
    </Link>
  );
};

export default ProfileNavLink;
