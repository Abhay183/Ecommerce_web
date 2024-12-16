import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContextProvider';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrums/Breadcrum'; 
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

function Product() {
  const { productId } = useParams();
  const { allProductData } = useContext(ShopContext); 

  if (!allProductData) {
    return <div>Loading...</div>;
  }

  const product = allProductData.find((e) => e.id === Number(productId));
  
  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts product={product}/>
    </div>
  );
}

export default Product;
