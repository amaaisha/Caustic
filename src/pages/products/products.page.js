import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { store } from '../../redux/store';

const { dispatch } = store;

const ProductsPage = ({ categories, products, category }) => {
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
    <p>Products</p>
  );
};

const mapState = (state) => ({
  categories: state.category.categories,
  category: state.category.category,
  products: state.category.products,
});

export default connect(mapState)(ProductsPage);
