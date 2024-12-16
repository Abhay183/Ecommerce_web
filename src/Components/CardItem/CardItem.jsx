import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContextProvider';
import remove_icon from '../Asssets/cart_cross_icon.png';
import { Link } from 'react-router-dom';

function CardItem() {
    const { cartItem, allProductData, removeFromCart } = useContext(ShopContext);

    // Function to calculate total price for each product
    const calculateTotal = (productId) => {
        const product = allProductData.find(item => item.id === parseInt(productId));
        if (product && cartItem[productId] > 0) {
            return product.new_price * cartItem[productId];
        }
        return 0;
    };

    // Function to calculate total number of products in cart
    const getTotalProducts = () => {
        let totalCount = 0;
        Object.values(cartItem).forEach(quantity => {
            totalCount += quantity;
        });
        return totalCount;
    };

    // Function to calculate total price of all products in cart
    const getTotalPrice = () => {
        let totalPrice = 0;
        Object.keys(cartItem).forEach(productId => {
            totalPrice += calculateTotal(productId);
        });
        return totalPrice;
    };

    if (getTotalProducts() === 0) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100">
            <p className="text-center text-gray-600 text-5xl font-semibold mb-8">No items yet</p>
            <div className="text-center">
                <p className="mb-2">Check out more products:</p>
                <Link to="/" className="text-blue-500 hover:underline">Shop</Link>
            </div>
        </div>
        
        
        );
    }

    return (
        <div className="container mx-auto">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="product-header flex items-center bg-gray-200 py-2 px-4">
                    <p className="w-2/5 font-semibold pl-5">Product</p>
                    <p className="w-1/5 font-semibold text-center">Price</p>
                    <p className="w-1/5 font-semibold text-center">Quantity</p>
                    <p className="w-1/5 font-semibold text-center">Total</p>
                    <p className="w-1/5 font-semibold text-center">Remove</p>
                </div>
                <hr className="mb-4" />
                {Object.keys(cartItem).map((productId) => {
                    const product = allProductData.find(item => item.id === parseInt(productId));
                    if (product && cartItem[productId] > 0) {
                        return (
                            <div key={productId} className="product-item flex items-center py-4 px-6 border-b border-gray-200">
                                <div className="w-2/5 flex items-center">
                                    <img src={product.image} alt={product.name} className=" h-32 mr-4 rounded" />
                                    <div>
                                        <p className="font-semibold">{product.name}</p>
                                    </div>
                                </div>
                                <div className="w-1/5 flex justify-center">${product.new_price}</div>
                                <div className="w-1/5 flex justify-center">{cartItem[productId]}</div>
                                <div className="w-1/5 flex justify-center">${calculateTotal(productId)}</div>
                                <div className="w-1/5 flex justify-center">
                                    <img src={remove_icon} alt="Remove" onClick={() => removeFromCart(productId)} className="cursor-pointer" />
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
                
                <div className="bottom-bar bg-gray-200 py-4 px-6 flex justify-between items-center">
                    <p>Total Products: {getTotalProducts()}</p>
                    <p>Total Price: ${getTotalPrice()}</p>
                    <button className="bg-blue-500 text-white px-4 py-3 mr-16 rounded hover:bg-blue-600 transition duration-300">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default CardItem;
