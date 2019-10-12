import React from 'react';
import './leftSideProductBody.styles.css';

const LeftSideProductBody = ({ image }) => (
  <div className='leftSideImage'>
    <div className='productImage'>
      <img src={image} alt={'none'} />
    </div>
  </div>
);

export default LeftSideProductBody;
