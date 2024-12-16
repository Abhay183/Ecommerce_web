import React, { useState } from 'react'
import logo from '../Asssets/logo.png'
import cart from '../Asssets/cart_icon.png'
import { Link } from 'react-router-dom'
function Navbar() {
    const [slected, setslected] = useState('shop')
  return (
    <div class="Navbar flex w-full h-24 items-center justify-between px-6 border-b-2 bg-white">
    <div class="nav-logo flex items-center">
        <img src={logo} alt="Logo" class="h-20 m-3 ml-32" />
        <p class="text-3xl font-bold ">SHOOPER</p>
    </div>
    <div class="nav-menu">
    <ul class="flex space-x-6">
        <li onClick={()=>{setslected('shop')}} class="text-base font-medium hover:underline relative" ><Link to='/'>Shop</Link> {slected ==='shop' && <hr class="absolute bottom-0 left-0 w-full border-t-2 border-gray-700"/>}</li>
        <li onClick={()=>{setslected('men')}} class="text-base font-medium hover:underline relative"><Link to='/Mens'>Mens</Link> {slected ==='men' && <hr class="absolute bottom-0 left-0 w-full border-t-2 border-gray-700"/>}</li>
        <li onClick={()=>{setslected('women')}} class="text-base font-medium hover:underline relative"><Link to='/Womens'>Womens</Link> {slected ==='women' && <hr class="absolute bottom-0 left-0 w-full border-t-2 border-gray-700"/>}</li>
        <li onClick={()=>{setslected('kids')}} class="text-base font-medium hover:underline relative"><Link to='/Kids'>Kids </Link> {slected ==='kids' && <hr class="absolute bottom-0 left-0 w-full border-t-2 border-gray-700"/>}</li>
    </ul>
 </div>


    <div class="nav-login flex items-center space-x-4 mr-32">
       <Link to='Login'> <button class="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium">Login</button></Link>
        <Link to='Cart'><img src={cart} alt="Cart" class="h-6" /></Link>
    </div>
</div>


  )
}

export default Navbar