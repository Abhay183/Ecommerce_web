import React from 'react';
import Item from '../Item/Item';
import Item_data from '../Asssets/new_collections';

function NewCollection() {
  // Divide items into groups of 4
  const groupedItems = [];
  for (let i = 0; i < Item_data.length; i += 4) {
    groupedItems.push(Item_data.slice(i, i + 4));
  }

  return (
    <div className='NewCollection'>
      <div class='text-center'>
        <h3 class='text-5xl my-7 font-semibold text-zinc-700 uppercase '>New collections</h3>
        <hr class='border-b-2 border-zinc-700 w-20 mx-auto mb-10'/>
      </div>
      {groupedItems.map((group, index) => (
        <div className="popular-item flex justify-center my-5" key={index}>
          {group.map((item, i) => (
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          ))}
        </div>
      ))}
    </div>
  );
}

export default NewCollection;
