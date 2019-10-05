import React from 'react';
import { Link } from 'react-router-dom';
import './productPage.styles.css';
import RightSideProductBody from './rightSideProductBody/rightSideProductBody';
import LeftSideProductBody from './leftSideProductBody/leftSideProductBody';

const ProductPage = () => (
  <>
    <div className='productContainer'>
      <div className='productHeader'>
        <div className='product'>Product</div>
        <div className='productHeaderLinks'>
          <Link to='/' className='homeSpan'><span>Home</span></Link>

/
          <Link to='/' className='homeSpan'><span>All Products</span></Link>

/
          <span>Product</span>
        </div>
      </div>
      <div className='productBody'>
        <LeftSideProductBody />
        <RightSideProductBody />
      </div>
      <div className='productFooter' />
    </div>
  </>
);

export default ProductPage;
