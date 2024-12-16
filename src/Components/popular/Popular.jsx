import React from 'react'
import product_data from '../Asssets/data';
import Item from '../Item/Item';
function Popular() {
  return (
    <div className='popular'>
       <div class='text-center'>
       <h3 class='text-5xl my-7 font-semibold text-zinc-700 uppercase '>Popular in Women</h3>
        <hr class='border-b-2 border-zinc-700 w-20 mx-auto mb-10'/>
       </div>
      <div className="popular-item flex justify-center my-5">
        {product_data.map((item,i)=>{
          return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular