import React from 'react';
import { Button, FlexboxGrid } from 'rsuite';
import { store } from '../../redux/store';

const {dispatch} = store;


const getAllProducts = () => {
  dispatch.category.getProducts();
};

const AllProducts = ({category, products}) => {
  return (
    <FlexboxGrid.Item colspan={18}>
      <h2>Products</h2>
      <Button onClick={getAllProducts}>All</Button>
      {category.name && (
        <h4>
        Category: {category.name}
        </h4>
      )}
      <FlexboxGrid>
        {products.length > 0 && products.map((product) => (
          <FlexboxGrid.Item colspan={8} key={product.id}>
            <h4>
              {product.name}: {'$'}{product.price}
            </h4>
            <img src={product.picture} width={300} height={300} alt='no photo' />
          </FlexboxGrid.Item>
        ))}
        {products.length === 0 && <h3>No result</h3>}
      </FlexboxGrid>
    </FlexboxGrid.Item>
  );
};

export default AllProducts;
