// ProductDisplay.js
import React, { useContext, useState } from 'react';
import starIcon from '../Asssets/star_icon.png';
import dullStarIcon from '../Asssets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContextProvider';

function ProductDisplay({ product }) {
  const [selectedSize, setSelectedSize] = useState('');
  const { addToCart } = useContext(ShopContext);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className='ProductDisplay py-8'>
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex">
        <div className="p-6 flex flex-col items-center justify-center">
          <div className="product-img-list flex flex-wrap justify-center">
            {[1, 2, 3, 4].map((_, index) => (
              <img key={index} src={product.image} className="w-20 h-20 m-2 rounded-lg border border-gray-200 hover:shadow-md cursor-pointer" alt="" />
            ))}
          </div>
        </div>
        <div className="p-6 flex justify-center items-center">
          <div className="relative">
            <img src={product.image} className='main-img w-96 h-auto object-cover border-2 border-gray-200 rounded-lg shadow-md transform transition-transform hover:scale-105' alt="" />
          </div>
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
          <div className="display-right-rating-star flex items-center mt-2">
            {[...Array(4)].map((_, index) => (
              <img key={index} src={starIcon} className="h-8 mr-1" alt="" />
            ))}
            <img src={dullStarIcon} className="w-6 h-6" alt="" />
            <p className="ml-2 text-gray-600">4.0 (120 reviews)</p>
          </div>
          <div className="flex items-center mt-4">
            <p className="text-green-600 text-3xl font-semibold mr-2">${product.new_price}</p>
            <p className="text-gray-500 text-xl line-through">${product.old_price}</p>
          </div>
          <p className="text-gray-700 mt-4">{product.description}</p>
          <div className="product-size mt-4">
            <h1 className="text-lg font-semibold">Select Size</h1>
            <div className="size-container flex mt-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
                <div key={index} className={`size mr-2 ${selectedSize === size ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-full flex items-center justify-center w-8 h-8 cursor-pointer`} onClick={() => handleSizeSelect(size)}>{size}</div>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(product.id)} className="mt-6 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">ADD TO CART</button>
          <p className='Category mt-4'><span className="font-semibold">Category:</span> {product.category}, T-shirt, Top</p>
          <p className='tags'><span className="font-semibold">Tags:</span> Modern, Latest</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
