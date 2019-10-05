import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { store } from '../../redux/store';
import './productPage.styles.css';
import RightSideProductBody from './rightSideProductBody/rightSideProductBody';
import LeftSideProductBody from "./leftSideProductBody/leftSideProductBody";

const { dispatch } = store;

const ProductPage = ({ categories, products, category }) => {
  useEffect(() => {
    dispatch.category.getProducts();
  }, []);

  const handleClick = (category) => {
    dispatch.category.getCategoryProducts(category);
  };

  const getAllProducts = () => {
    dispatch.category.getProducts();
  };

  return (
    <>
      {/* <h2>Categories</h2> */}
      {/*  {categories.map(({id, name}) => */}
      {/*    <div key={id}> */}
      {/*      <button onClick={() => handleClick(id)}>{name}</button> */}
      {/*    </div> */}
      {/*  )} */}
      {/*  <br/> */}
      {/* <h2>Products</h2> */}
      {/* <button onClick={getAllProducts}>All</button> */}
      {/* {category.name && <h4>Category: {category.name}</h4>} */}
      {/* {products.map(product => */}
      {/*    <div> */}
      {/*      <p>{product.name}</p> */}
      {/*    </div> */}
      {/*  )} */}
      <div className='productContainer'>
        <div className='productHeader'>
          <div className='product'>Product</div>
          <div className='productHeaderLinks'>
            <Link to='/' className='homeSpan'><span>Home</span></Link> / <Link to='/' className='homeSpan'><span>All Products</span></Link> / <span>Product</span>
          <div className='home-create'>
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
          <div className='leftSideImage'>
            <div className='image' />
          </div>
          <div className='rightSide'>
            <div className='name-star'>
              <p className='name-star-name'>KYLE KUZMA</p>
              <p className='name-star-amount'>$25000000</p>
              <p className='name-star-rating'>star rating</p>
            </div>
            <div className='description' />
            <div className='type' />
            <div className='amount' />
          </div>
        </div>
        <div className='productFooter' />
      </div>
    </>
  );
};

const mapState = (state) => ({
  categories: state.category.categories,
  category: state.category.category,
  products: state.category.products,
});

export default connect(mapState)(ProductPage);
