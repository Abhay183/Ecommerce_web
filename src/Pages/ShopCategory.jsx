import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContextProvider';
import Item from '../Components/Item/Item';

function ShopCategory(props) {
  const { allProductData } = useContext(ShopContext);

  if (!allProductData) {
    return <div>Loading...</div>; 
  }

  const filteredItems = allProductData.filter(item => props.category === item.category);

  const rows = [];
  for (let i = 0; i < filteredItems.length; i += 4) {
    rows.push(filteredItems.slice(i, i + 4));
  }

  return (
    <div className='Shop-Category'>
      <div className="banner">
        <img src={props.banner} className='w-full' alt="" />
      </div>
      <div className='NewCollection'>
        <div className='text-center'>
          <h3 className='text-5xl my-7 font-semibold text-zinc-700 uppercase'>New collections in {props.category}</h3>
          <hr className='border-b-2 border-zinc-700 w-20 mx-auto mb-10'/>
        </div>
        
        {/* Render each row */}
        {rows.map((row, rowIndex) => (
          <div className="popular-item flex justify-center my-5" key={rowIndex}>
            {row.map((item, itemIndex) => (
              <Item key={itemIndex} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopCategory;
