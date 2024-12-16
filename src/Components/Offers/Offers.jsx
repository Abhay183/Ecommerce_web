import React from 'react'
import exclusive_img from '../Asssets/exclusive_image.png'
function Offers() {
  return (
    <div className='flex items-center justify-center my-10 mx-32' style={{background: 'linear-gradient(to bottom, #F3E8FF, #FFFFFF)'}}>
    <div className="text-content mx-8">
        <h1 className="text-4xl font-extrabold text-purple-900 mb-6 leading-tight">Exclusive</h1>
        <h1 className="text-4xl font-extrabold text-purple-900 mb-6 leading-tight">Offers For You</h1>
        <p className="text-lg text-gray-700 mb-8">ONLY ON BEST SELLING PRODUCTS</p>
        <button className="bg-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-purple-800 transition-colors duration-300">Check Now</button>
    </div>
    <div className="ml-8">
        <img src={exclusive_img} alt="Exclusive Offer" className='h-50' />
    </div>
</div>

  )
}

export default Offers