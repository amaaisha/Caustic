import React from 'react';
import './totalAmount.styles.css';

const TotalAmount = () => (
  <div className='totalAmountContainer'>
    <div className='totalAmountTexts'>
      <span>QUANTITY</span>
      <span>TOTAL</span>
      <span>AVAILABILITY</span>
    </div>
    <div className='totalAmountButtons'>
      <div className='quantityButtons'>
        <button>-</button>
        <div className='totalAmountButtonsSpan'>
          <span>1</span>
        </div>
        <button>+</button>
      </div>
      <div className='totalNumber'>
        <p>45990.00Huf</p>
      </div>
      <div className='availability'>
        <p>Many in Stock</p>
      </div>
    </div>
  </div>
);

export default TotalAmount;
