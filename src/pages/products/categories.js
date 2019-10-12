import React from 'react';
import { Button, FlexboxGrid } from 'rsuite';
import { store } from '../../redux/store';

const { dispatch } = store;

const handleClick = (category) => {
  dispatch.category.getCategoryProducts(category);
};

const Categories = ({ categories, category }) => (
  <FlexboxGrid.Item colspan={6}>
    <h2>Categories</h2>
    {categories.map(({ id, name }) => (
      <div key={id}>
        <Button active={name === category.name} onClick={() => handleClick(id)}>{name}</Button>
      </div>
    ))}
  </FlexboxGrid.Item>
);

export default Categories;
