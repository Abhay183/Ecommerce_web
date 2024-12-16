import React from 'react';
import handIcon from '../Asssets/hand_icon.png';
import arrowimg from '../Asssets/arrow.png';
import heroimg from '../Asssets/hero_image.png'

function Hero() {
  return (
<div className='flex justify-between items-center px-28 bg-gradient-to-r from-pink-50 to-white'>
  <div className="Left text-left ml-4">
    <p className='capitalize text-4xl font-semibold mb-4 tracking-wide'>New arrivals only</p>
    <div className="flex items-center mb-2">
      <h3 className='text-8xl font-bold mr-6'>New</h3>
      <img className='h-24' src={handIcon} alt="" />
    </div>
    <div className="flex flex-col mb-2">
      <h3 className="text-6xl font-semibold mb-2">Collections</h3>
      <h3 className="text-6xl font-semibold mb-2">For Everyone</h3>
    </div>
    <button className="mt-7  px-20 py-8 bg-red-500 text-white rounded-full font-semibold flex items-center">
      Latest Collection <img src={arrowimg} alt="" className="ml-6 h-4" />
    </button>
  </div>
  <div className="Right">
    <img src={heroimg} alt="" className="h-auto w-120" />
  </div>
</div>

  );
}

export default Hero;
