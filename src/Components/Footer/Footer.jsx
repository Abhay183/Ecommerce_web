import React from 'react';
import Footer_logo from '../Asssets/logo_big.png';
import insta_icon from '../Asssets/instagram_icon.png';
import pintresr_icon from '../Asssets/pintester_icon.png';
import whatsapp_icon from '../Asssets/whatsapp_icon.png';

function Footer() {
  return (
    <div className='Footer bg-gray-900 text-white py-8 '>
      <div className="container mx-auto flex justify-evenly items-center">
        <div className="Footer_logo flex items-center">
          <img src={Footer_logo} alt="Shooper" className="h-10 mr-2" />
          <p className="text-xl font-semibold">Shooper</p>
        </div>
        <div className="Footer_link">
          <ul className="flex space-x-6">
            <li className="cursor-pointer hover:text-gray-400 transition duration-300">Company</li>
            <li className="cursor-pointer hover:text-gray-400 transition duration-300">Products</li>
            <li className="cursor-pointer hover:text-gray-400 transition duration-300">Offices</li>
            <li className="cursor-pointer hover:text-gray-400 transition duration-300">About</li>
            <li className="cursor-pointer hover:text-gray-400 transition duration-300">Contact</li>
          </ul>
        </div>
        <div className="Footer-Social-icon flex space-x-4">
          <div className="Footer-Socail-icon-container">
            <img src={insta_icon} alt="Instagram" className="h-6" style={{ filter: 'invert(1)', }} />
          </div>
          <div className="Footer-Socail-icon-container">
            <img src={pintresr_icon} alt="Pinterest" className="h-6" style={{ filter: 'invert(1)', }} />
          </div>
          <div className="Footer-Socail-icon-container">
            <img src={whatsapp_icon} alt="WhatsApp" className="h-6" style={{ filter: 'invert(1)', }} />
          </div>
        </div>
      </div>
      <hr className="mt-8 border-gray-400" />
      <div className="text-center mt-4">
        <p className="text-sm opacity-80">© 2024 Shooper. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
