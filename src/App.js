import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './route/Pages/Auth/signUp/AuthContext'; // Import the AuthProvider
import Homepage from "./route/Pages/home/Home";
import Shop from "./route/Pages/About";
import Contact from "./route/Pages/Contact";
import Product from "./route/Pages/products/Product";
import Landing from "./route/Pages/landing page/landing";
import SignUp from "./route/Pages/Auth/signUp/SignUp";
import Login from "./route/Pages/Auth/signUp/login";
import Layout from "./route/Pages/layout";
import { Card } from 'flowbite-react';
import About from './route/Pages/About';


function App() {
  return (
    <AuthProvider> {/* Wrap your app with AuthProvider */}
      <div className="Container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="about" element={<About />} />
              <Route path="product" element={<Product />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="cart" element={<Card/>} />
              <Route path="*" element={<Landing />} />
            </Route>
          </Routes>
        </BrowserRouter>
        
      </div>
      
    </AuthProvider>
    
  );
}

export default App;
