import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';  // Импортируем `toast` правильно
import 'react-toastify/dist/ReactToastify.css';

const products = [
  {
    id: 1,
    title: 'REDUX 666',
    description: 'A premium redux pack for your mods.',
    imageUrl: 'https://i.imgur.com/mkqBDXp.jpeg',
    price: '€9.99',
    purchaseLink: '#',
  },
  {
    id: 2,
    title: 'GUN PACK PINK',
    description: 'A comprehensive gun pack with realistic details.',
    imageUrl: 'https://i.imgur.com/VXlNp4j.png',
    price: '€6.99',
    purchaseLink: '#',
  },
  {
    id: 3,
    title: 'GUN PACK RED',
    description: 'An advanced gun pack with enhanced features.',
    imageUrl: 'https://i.imgur.com/7Xmgxwd.png',
    price: '€6.99',
    purchaseLink: '#',
  },
  {
    id: 4,
    title: 'Flower Luminous',
    description: 'Stylish Flower Luminous guns.',
    imageUrl: 'https://i.imgur.com/ercmBYq.png',
    price: '€9.99',
    purchaseLink: '#',
  },
];

export default function ShopPage() {
  const [cartProducts, setCartProducts] = useState([]);

  const handleAddToCart = (product) => {
    if (!cartProducts.find((item) => item.id === product.id)) {
      const updatedCart = [...cartProducts, product];
      setCartProducts(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      toast.success(`${product.title} added to cart!`);
    } else {
      toast.info(`${product.title} is already in your cart.`);
    }
  };
  

  return (
    <div className="p-6 mx-auto max-w-7xl bg-opacity-10 text-center text-gray-900 rounded-3xl dark:border-gray-600 xl:p-8 dark:text-white transform transition duration-500">
      <h3 className="mb-8 text-4xl font-extrabold text-white animate-pulse">PANIKA MODS SHOP</h3>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-white p-5 rounded-xl overflow-hidden shadow-md transform transition duration-500">
            <p className="mt-2 text-xl font-extrabold text-black text-center">{product.title}</p>
            <div className="w-full h-48 mt-4 mb-4 flex justify-center items-center">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover rounded-xl transition-transform duration-300" />
            </div>

            <div className="w-full mt-auto">
              <p className="text-xl font-extrabold text-black text-center mt-2">Price: {product.price}</p>

              <div className="flex flex-col items-center space-y-4 mt-4">
                <button
                  onClick={() => handleAddToCart(product)}
                  className='font-extrabold mt-4 bg-purple-600 w-full hover:bg-emerald-500 hover:text-white py-2 px-6 rounded-3xl text-white transform transition duration-500 hover:scale-95 hover:shadow-lg'>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}
