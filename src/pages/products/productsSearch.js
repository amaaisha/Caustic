import React from 'react';
import { Button, FlexboxGrid, Input } from 'rsuite';
import { store } from '../../redux/store';

const { dispatch } = store;

const ProductsSearch = () => {
  const sortByName = () => {
    dispatch.category.sortProducts('name');
  };
  const sortByPrice = () => {
    dispatch.category.sortProducts('price');
  };
  const searchProducts = (query) => {
    dispatch.category.searchedProducts(query);
  };

  return (
    <FlexboxGrid.Item colspan={24}>
      <Input
        size='lg'
        type='text'
        placeholder='Search.....'
        onChange={searchProducts}
      />
      <br />
      <FlexboxGrid justify='end'>
        <Button onClick={sortByName}> Sort by name</Button>
        <Button onClick={sortByPrice}> Sort by price </Button>
      </FlexboxGrid>
    </FlexboxGrid.Item>
  );
};

export default ProductsSearch;
