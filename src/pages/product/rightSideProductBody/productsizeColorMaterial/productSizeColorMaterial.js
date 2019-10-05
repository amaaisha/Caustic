import React from 'react';
import './productSizeColorMaterial.styles.css';

const ProductSizeColorMaterial = () => {
	return (
		<div className='productSizeColorMaterial'>
			<div className='productSizeColorMaterialTexts'>
				<span>SIZE</span>
				<span>COLOR</span>
				<span>MATERIAL</span>
			</div>
			<div className='productSizeColorMaterialButtons'>
				<div className='topButtons'>
					<button>22CM</button>
					<button>23CM</button>
					<button>25CM</button>
				</div>
				<div className='colorButton'>
					<button />
				</div>
				<div className='materialButton'>
					<button />
				</div>
			</div>
		</div>
	);
};

export default ProductSizeColorMaterial;
