import React from 'react';
import BreadcrumIcon from '../Asssets/breadcrum_arrow.png';

function Breadcrum({ product }) {
  return (
    <div className="flex items-center justify-center bg-gray-200 py-4 px-6 rounded-lg shadow-md">
      <div className="flex items-center">
        <span className="text-gray-700 mr-2">Home</span>
        <img src={BreadcrumIcon} alt="" className="w-3 h-3 mx-2" />
      </div>
      <div className="flex items-center">
        <span className="text-gray-700 mr-2">SHOP</span>
        <img src={BreadcrumIcon} alt="" className="w-3 h-3 mx-2" />
      </div>
      <div className="flex items-center">
        <span className="text-gray-700 mr-2">{product.category}</span>
        <img src={BreadcrumIcon} alt="" className="w-3 h-3 mx-2" />
      </div>
      <div className="flex items-center">
        <span className="text-gray-900 font-semibold">{product.name}</span>
      </div>
    </div>
  );
}

export default Breadcrum;
