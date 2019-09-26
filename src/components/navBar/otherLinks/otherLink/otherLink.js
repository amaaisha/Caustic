import React from 'react';
import {Link} from 'react-router-dom';
import Icon from '../../../icon/icon';
import './otherLink.styles.css';
import OtherLinkDropdown from './otherLinkDropdown/otherLink.dropdown';

const OtherLink = ({ activeIcon, inactiveIcon, dropDown, route }) => {
  const [active, setActive] = React.useState(false);
  const mouseEnter = () => setActive(true);
  const mouseLeave = () => setActive(false);
  return (
    <Link
      to={`/${route}`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className='otherLinkContainer'
    >
      <Icon size={27} icon={active ? activeIcon : inactiveIcon} />
      {/*{dropDown && <OtherLinkDropdown />}*/}
    </Link>
  );
};

export default OtherLink;
