import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {store} from '../../redux/store'

const {dispatch} = store;

const ProductsPage = ({categories, products, category}) => {
  useEffect(() => {
    dispatch.category.getProducts();
  },[]);

  const handleClick = (category) => {
    dispatch.category.getCategoryProducts(category);
  };

  const getAllProducts = () => {
    dispatch.category.getProducts();
  };


  const sortByName = () => {
    dispatch.category.sortProducts('price');
  };

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
        <div key={product.id}>
          <p>{product.name}</p>
        </div>
      )}
      <button onClick={sortByName}> Sort </button>
    </>
  );
};

const mapState = state => {
  console.log(state.category.products)

  return {
    categories: state.category.categories,
    category: state.category.category,
    products: state.category.products,
  };
};

export default connect(mapState)(ProductsPage);
