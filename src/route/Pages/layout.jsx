import { Outlet, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../Pages/Assets/logo.jpg';
import '../Pages/layout.css';
import React, { useState } from 'react';

const Layout = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isAuthPage = location.pathname === '/signup' || location.pathname === '/login';

  // Fake login function
  const fakeLogin = () => {
    setIsLoggedIn(true);
  };

  // Fake logout function
  const fakeLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {!isAuthPage && (
        <div className="container">
          <nav className="nav-links">
            <ul>
              <div className="logo">
                <img src={logo} className="img" alt="logo" />
              </div>
              <li>
                <Link to="/" style={{ color: 'rgb(255, 111, 0)' }}>
                  <h5>Home</h5>
                </Link>
              </li>
              <li>
                <Link to="/shop" style={{ color: 'rgb(255, 111, 0)' }}>
                  <h5>Shop</h5>
                </Link>
              </li>
              <li>
                <Link to="/product" style={{ color: 'rgb(255, 111, 0)' }}>
                  <h5>Product</h5>
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'rgb(255, 111, 0)' }}>
                  <h5>Contact</h5>
                </Link>
              </li>
              <li className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <Link to="/" style={{ color: 'rgb(255, 111, 0)' }} onClick={fakeLogout}>
                      <h5>Logout</h5>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" style={{ color: 'rgb(255, 111, 0)' }}>
                      <h5>Login</h5>
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" style={{ color: 'rgb(255, 111, 0)' }}>
                      <h5>SignUp</h5>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      )}
      <div><Outlet /></div>
    </>
  );
};

export default Layout;
