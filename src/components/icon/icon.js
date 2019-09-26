import React from 'react';
import './icon.styles.css';

const Icon = ({ icon, size }) => (
  <img alt={`${icon}Icon`} src={icon} className='icon' style={{ height: size, width: size }} />
);

Icon.defaultProps = {
  size: 20,
};

export default Icon;
