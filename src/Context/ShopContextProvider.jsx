import React, { createContext, useState } from "react";
import allProductData from "../Components/Asssets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemId) => {
    setCartItem((prev) => {
      const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
      console.log("Updated Cart Items:", updatedCart); // Log updated cart items
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[itemId];
      console.log("Updated Cart Items:", updatedCart); // Log updated cart items
      return updatedCart;
    });
  };

  console.log("Current Cart Items:", cartItem); // Log current cart items

  return (
    <ShopContext.Provider value={{ allProductData, cartItem, addToCart, removeFromCart }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
