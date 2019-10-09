import React, {useEffect} from 'react';
import {Button, FlexboxGrid, Input} from "rsuite";
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
    dispatch.category.sortProducts('name');
  };

  const sortByPrice = () => {
    dispatch.category.sortProducts('price');
  };



  const searchProducts = (query) => {
    dispatch.category.searchedProducts(query);
  };

  return(
    <FlexboxGrid>
      <FlexboxGrid.Item colspan={24}>
      <Input size={'lg'} type={'text'}
      placeholder={'Search.....'}
      onChange={searchProducts}/>

      <br/>
      <FlexboxGrid justify={'end'}>
        <Button onClick={sortByName}> Sort by name</Button>
        <Button onClick={sortByPrice}> Sort by price </Button>
      </FlexboxGrid>
      </FlexboxGrid.Item>

      <FlexboxGrid.Item colspan={6}>
      <h2>Categories</h2>
      {categories.map(({id, name}) =>
        <div key={id}>
          <Button onClick={() => handleClick(id)}>{name}</Button>
        </div>
      )}
      </FlexboxGrid.Item>

      <FlexboxGrid.Item colspan={18}>
      <h2>Products</h2>
      <Button onClick={getAllProducts}>All</Button>
      {category.name && <h4>Category: {category.name}</h4>}
      <FlexboxGrid>
      {products.length > 0 && products.map(product =>
        <FlexboxGrid.Item colspan={8} key={product.id}>
          <h4>{product.name} : {`$`}{product.price}</h4>
          <img src ={product.picture} width={300} height={300}/>
        </FlexboxGrid.Item>
      )}
        {products.length === 0 && <h3>No result</h3>}
      </FlexboxGrid>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

const mapState = state => {
  return {
    categories: state.category.categories,
    category: state.category.category,
    products: state.category.query ? state.category.searchedProducts : state.category.products,
  };
};

export default connect(mapState)(ProductsPage);
