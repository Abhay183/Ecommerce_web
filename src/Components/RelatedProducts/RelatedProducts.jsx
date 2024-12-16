// RelatedProducts.jsx
import React from 'react';
import data_product from '../Asssets/data';
import Item from '../Item/Item';

function RelatedProducts() {
   
    
   

    return (
        <div className='RelatedProductsS my-14'>
            <h1 className='text-center text-3xl font-bold my-4 '>Related Products</h1>
            <div className="RelatedProducts-item flex my-6">
                {data_product.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
}

export default RelatedProducts;
