// About.js
import React from 'react';
import aboutImage from '../Pages/Assets/laptop-5820171_1280.png'; // Replace with the path to your about image
import Footer from '../../footer/footer';

const About = () => {
  return (
    <>
    <div className="bg-gray-100 py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 lg:pr-12">
            <img src={aboutImage} alt="About E Gadget" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">About E Gadget</h1>
            <p className="text-lg text-gray-600 mb-4">
              E Gadget is a leading electronics and gadget store based in Casablanca, Morocco. Since our establishment in 2020, we have been dedicated to providing our customers with the latest and most innovative gadgets on the market. Our mission is to offer high-quality products at competitive prices while ensuring excellent customer service.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our product range includes the newest smartphones, laptops, smartwatches, and various electronic accessories. We carefully select our products to ensure they meet the highest standards of quality and functionality. Whether you are a tech enthusiast or just looking for a gift, E Gadget has something for everyone.
            </p>
            <p className="text-lg text-gray-600">
              At E Gadget, we believe in creating a seamless shopping experience for our customers. Our user-friendly website, fast shipping, and dedicated customer support team are here to make your shopping experience enjoyable and hassle-free.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
