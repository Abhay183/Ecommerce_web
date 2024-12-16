import React from 'react'
import { Link } from 'react-router-dom'

function Item(props) {
  
  return (
    <div className="border rounded-lg p-8 shadow-md flex flex-col items-center mx-6">
    <Link to={`/products/${props.id}`}><img onClick={window.scrollTo(0,0)} className="w-50 h-auto object-cover rounded-md mb-6" src={props.image} alt={props.name} /></Link>
    <p className="text-1xl font-semibold text-gray-800 mb-3">{props.name}</p>
    <div className="flex justify-center items-center mb-2">
        <p className="text-green-600 text-3xl font-semibold mr-2">${props.new_price}</p>
        <p className="text-gray-500 text-xl line-through">${props.old_price}</p>
    </div>
    <Link to={`/Products/${props.id}`}>
    <button onClick={window.scrollTo(0,0)}  className="px-8 py-3 bg-blue-500 text-white rounded-md font-semibold flex items-center justify-center hover:bg-blue-600 transition duration-300">
        <span>View Item</span>
        <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
    </button>
    </Link>
</div>


  )
}

export default Item