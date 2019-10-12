import React from 'react';
import ProductSizeColorMaterial from './productsizeColorMaterial/productSizeColorMaterial';
import './rightSideProductBody.tyles.css';
import TotalAmount from './totalAmount/totalAmount';

const RightSideProductBody = ({ product }) => (
  <div className='rightSideContent'>
    <div className='productNamePriceRating'>
      <p className='productName'>{product.name}</p>
      <p className='productPrice'>{product.price}</p>
      <p className='productRating'>star rating</p>
    </div>
    <div className='productDescription'>
      <p>
        Security is mostly a superstition. It does not
        exist in nature, nor do the children of men as a whole experience it.
        Avoiding danger is no safer in the long run than outright exposure.
        Life is either a daring adventure, or nothing
				Read more at https://www.brainyquote.com/topics/long-quotes
      </p>
    </div>
    <ProductSizeColorMaterial />
    <TotalAmount />
  </div>
);

export default RightSideProductBody;
