import React from 'react';
import {Link} from 'react-router-dom';
import './navBar.route.styles.css';
import down from '../../../assets/inactiveDown.png';
import activeDown from '../../../assets/activeDown.png';
import Icon from '../../icon/icon';

const NavBarRoute = ({ navLink: { name, dropDown, route } }) => {
  const [active, setActive] = React.useState(false);

  const mouseEnter = () => setActive(true);
  const mouseLeave = () => setActive(false);

  return (
    <Link to={`/${route}`} onMouseLeave={mouseLeave} onMouseEnter={mouseEnter} className='navBarLinkContainer'>
      <div className='navBarInfoContainer'>
        <p className='navLinkName'>{name}</p>
        {dropDown && <Icon size={15} icon={active ? activeDown : down} />}
      </div>
      {dropDown && <div className='navBarLinkDropdown' />}
    </Link>
  );
};

export default NavBarRoute;
