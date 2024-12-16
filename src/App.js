import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/LoginSignup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import men_bannner from './Components/Asssets/banner_mens.png';
import women_banner from './Components/Asssets/banner_women.png';
import kids_banner from './Components/Asssets/banner_kids.png';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/Mens' element={<Shopcategory category="men" banner={men_bannner} />} />
        <Route path='/Womens' element={<Shopcategory category="women" banner={women_banner} />} />
        <Route path='/Kids' element={<Shopcategory category="kid" banner={kids_banner} />} />
        <Route path='/Products' element={<Product />} >
          <Route path=':productId' element={<Product />} /> {/* Correct the path */}
        </Route>
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
