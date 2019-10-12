import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './productPage.styles.css';
import RightSideProductBody from './rightSideProductBody/rightSideProductBody';
import LeftSideProductBody from './leftSideProductBody/leftSideProductBody';

const ProductPage = ({ product }) => (
  <>
    <div className='productContainer'>
      <div className='productHeader'>
        <div className='product'>Product</div>
        <div className='productHeaderLinks'>
          <Link to='/' className='homeSpan'><span>Home</span></Link>
          /
          <Link to='/products' className='homeSpan'><span>All Products</span></Link>
          /
          <span>Product</span>
        </div>
      </div>
      <div className='productBody'>
        <LeftSideProductBody image={product.picture} />
        <RightSideProductBody product={product} />
      </div>
      <div className='productFooter' />
    </div>
  </>
);

const mapState = (state) => ({
  product: state.category.product,
});

export default connect(mapState)(ProductPage);
