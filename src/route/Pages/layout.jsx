import { Outlet, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../Pages/Assets/logo.jpg';
import React, { useState, useEffect } from 'react';
import { Modal } from "flowbite-react";

const Layout = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAuthPage = location.pathname === '/signup' || location.pathname === '/login';

  useEffect(() => {
    const savedLoginState = localStorage.getItem('isLoggedIn');
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (savedLoginState) {
      setIsLoggedIn(JSON.parse(savedLoginState));
    }

    setCartItems(savedCartItems);
    setCartCount(savedCartItems.length);
  }, []);

  const fakeLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
  };

  const fakeLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', false);
    setCartItems([]);
    setCartCount(0);
    localStorage.removeItem('cartItems');
  };

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    setCartCount(updatedCartItems.length);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter(cartItem => cartItem !== item);
    setCartItems(updatedCartItems);
    setCartCount(updatedCartItems.length);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += parseFloat(item.price);
    });
    return totalPrice.toFixed(2);
  };

  const handleBuy = () => {
    alert('Buying functionality to be implemented!');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {!isAuthPage && (
        <div className="container mx-auto px-4 font-kalnia">
          <nav className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src={logo} className="h-12" alt="logo" />
              <h2 className="ml-2 text-orange-500 text-xl font-semibold">E GADGET</h2>
            </div>
            <ul className="flex space-x-8 justify-center">
              <li>
                <Link to="/" className="text-orange-500 hover:text-gray-800 transition-colors duration-300">
                  <h5>Home</h5>
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-orange-500 hover:text-gray-800 transition-colors duration-300">
                  <h5>Product</h5>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-orange-500 hover:text-gray-800 transition-colors duration-300">
                  <h5>About</h5>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-orange-500 hover:text-gray-800 transition-colors duration-300">
                  <h5>Contact</h5>
                </Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <span className="text-orange-500 cursor-pointer" onClick={openModal}>
                      <FontAwesomeIcon icon={faShoppingCart} />
                      <span>{cartCount}</span>
                    </span>
                  </li>
                  <li>
                    <Link to="/" className="text-orange-500 hover:text-gray-800 transition-colors duration-300" onClick={fakeLogout}>
                      <h5>Logout</h5>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" className="text-orange-500 hover:text-gray-800 transition-colors duration-300" onClick={fakeLogin}>
                      <h5>Login</h5>
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="text-orange-500 hover:text-gray-800 transition-colors duration-300">
                      <h5>SignUp</h5>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      )}
      <div>
        <Outlet context={{ addToCart }} />
      </div>
      <Modal show={isModalOpen} onClose={closeModal}>
        <Modal.Header>
          Cart Items
        </Modal.Header>
        <Modal.Body>
          {cartItems.length > 0 ? (
            <>
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <li key={index} className="flex justify-between items-center py-2">
                    <div className="flex items-center">
                      <img src={item.imageSrc} alt={item.imageAlt} className="h-12 w-12 object-cover mr-4" />
                      <span>{item.title} - ${item.price}</span>
                    </div>
                    <button onClick={() => removeFromCart(item)} className="text-red-500 hover:text-red-700">
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-800 font-semibold mt-4">Total Price: ${calculateTotalPrice()}</p>
            </>
          ) : (
            <p>No items in the cart.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleBuy} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Layout;
