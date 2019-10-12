import React, { useEffect } from 'react';
import { FlexboxGrid } from 'rsuite';
import { connect } from 'react-redux';
import { store } from '../../redux/store';
import ProductsSearch from './productsSearch';
import Categories from './categories';
import AllProducts from './products';


const { dispatch } = store;

const ProductsPage = ({ categories, products, category }) => {
  useEffect(() => {
    dispatch.category.getProducts();
  }, []);

  return (
    <FlexboxGrid>
      <ProductsSearch />
      <Categories categories={categories} category={category} />
      <AllProducts
        categories={categories}
        products={products}
        category={category}
      />
    </FlexboxGrid>
  );
};

const mapState = (state) => ({
  categories: state.category.categories,
  category: state.category.category,
  products: state.category.query ? state.category.searchedProducts : state.category.products,
  product: state.category.product,
});

export default connect(mapState)(ProductsPage);
