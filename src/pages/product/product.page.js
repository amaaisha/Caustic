import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {store} from '../../redux/store'

const {dispatch} = store;

const ProductPage = ({categories, products, category}) => {

  useEffect(() => {
    dispatch.category.getProducts();
  },[]);

  const handleClick = (category) => {
    dispatch.category.getCategoryProducts(category);
  }

  const getAllProducts = () => {
   dispatch.category.getProducts();
  }

  return(
    <>
      <h2>Categories</h2>
        {categories.map(({id, name}) =>
          <div key={id}>
            <button onClick={() => handleClick(id)}>{name}</button>
          </div>
        )}
        <br/>
      <h2>Products</h2>
      <button onClick={getAllProducts}>All</button>
      {category.name && <h4>Category: {category.name}</h4>}
      {products.map(product =>
          <div>
            <p>{product.name}</p>
          </div>
        )}
    </>
  );
}

const mapState = state => {
  return {
    categories: state.category.categories,
    category: state.category.category,
    products: state.category.products,
  };
};

export default connect(mapState)(ProductPage);
