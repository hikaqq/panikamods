import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  const [orderForm, setOrderForm] = useState({
    discordNick: '',
    discordID: '',
    email: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartProducts(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  }, [cartProducts]);

  const handleDeleteCartProduct = (id) => {
    const updatedCart = cartProducts.filter((product) => product.id !== id);
    setCartProducts(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setOrderForm({ ...orderForm, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    if (!orderForm.discordNick || !orderForm.discordID || !orderForm.email) {
      return;
    }
  
    try {
      const webhookUrl = 'https://discord.com/api/webhooks/1329103596108648478/3-A4EFWBEVr9dvR_V8v81uXiTYgHXl_9FdxTynVjJwFSCA1KRP_7fKQfM-KerzGSdSEo';
      const productsList = cartProducts.map((product) => `- ${product.title}: ${product.price}`).join('\n');
  
      await axios.post(webhookUrl, {
        content: `New order received: <@&1230565349003366441>\n\nDiscord Nick: ${orderForm.discordNick}\nDiscord ID: <@${orderForm.discordID}> ${orderForm.discordID}\nEmail: ${orderForm.email}\n\nOrdered Products:\n${productsList}\nTotal price: ${totalCost}`
      });
  
      setIsModalOpen(true);
      setCartProducts([]);
      localStorage.removeItem('cart');
      setOrderForm({
        discordNick: '',
        discordID: '',
        email: ''
      });
    } catch (error) {
      console.error('Error sending order notification:', error);
    }
  };
  

  const totalCost = cartProducts.reduce((acc, product) => {
    const price = parseFloat(product.price?.replace('€', '').trim());
    return acc + (isNaN(price) ? 0 : price);
  }, 0).toFixed(2);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto w-full flex flex-col gap-6 px-4 pt-6 max-w-[900px] xl:pt-12 min-h-[60vh] mb-10 text-white rounded-3xl p-5">
      {cartProducts.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[90vh] text-center gap-4">
          <h1 className="text-5xl font-extrabold mt-2 text-purple-500 transition duration-500 animate-pulse">Cart is empty</h1>
          <a href="/shop" className="bg-gradient-to-r from-purple-700 to-purple-900 text-white px-8 py-4 mt-2 text-lg rounded-full font-bold shadow-2xl transition duration-500 transform hover:scale-90">
            Go to Shop
          </a>
        </div>
      ) : (
        <>
          {cartProducts.map((cartProduct) => (
            <div key={cartProduct.id} className="flex flex-col md:flex-row justify-between items-center bg-white rounded-3xl shadow-lg p-6 mb-3 transition duration-500 hover:shadow-xl space-x-4">
              <img
                src={cartProduct.imageUrl}
                alt={cartProduct.title}
                className="w-16 h-16 object-cover rounded-3xl md:w-24 md:h-24" />
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="text-lg font-semibold text-black mb-2 font-mono md:mb-0">{cartProduct.title}</div>
                <div className="text-black font-bold mb-2 font-mono md:mb-0 text-xl md:text-xl">{cartProduct.price}</div>
              </div>
              <button
                className="font-extrabold bg-purple-600 hover:bg-red-600 hover:text-white py-2 px-6 rounded-3xl text-white transform transition duration-500 hover:shadow-lg"
                onClick={() => handleDeleteCartProduct(cartProduct.id)}>
                Remove
              </button>
            </div>
          ))}
          <div className="mt-3 text-center">
            <p className="font-bold text-white font-mono text-lg">Total cost: <span className="text-emerald-400 font-mono">€{totalCost}</span></p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl text-white text-center font-extrabold mb-4 animate-pulse font-mono">Place your order</h2>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-3xl shadow-lg">
              <input
                type="text"
                name="discordNick"
                placeholder="Enter Your Discord Nick"
                value={orderForm.discordNick}
                onChange={handleFormChange}
                className="p-4 rounded-3xl bg-black text-white focus:outline-none font-mono transition duration-300 focus:ring-2 focus:ring-white"
                required
              />
              <input
                type="text"
                name="discordID"
                placeholder="Enter Your Discord ID"
                value={orderForm.discordID}
                onChange={handleFormChange}
                className="p-4 rounded-3xl bg-black text-white focus:outline-none font-mono transition duration-300 focus:ring-2 focus:ring-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={orderForm.email}
                onChange={handleFormChange}
                className="p-4 rounded-3xl bg-black text-white focus:outline-none font-mono transition duration-300 focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="font-extrabold mt-4 bg-gray-300 hover:bg-green-500 hover:text-white py-2 px-6 rounded-3xl text-black transform transition duration-500 hover:shadow-lg">
                Place Order
              </button>
            </form>
          </div>
        </>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="p-6 rounded-3xl w-96 mx-auto mt-40 bg-black bg-opacity-70"
        appElement={document.getElementById('root')}>
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Order Placed Successfully!</h2>
          <p className="mb-6">Thank you for your order. We will process it shortly.</p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-r from-purple-700 to-purple-900 text-white px-6 py-3 rounded-full shadow-2xl font-semibold transition duration-500 transform hover:scale-95">
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
