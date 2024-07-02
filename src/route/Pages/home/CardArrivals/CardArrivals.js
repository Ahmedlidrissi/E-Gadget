import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CardArrivals({ imageSrc, imageAlt, title, price, promo, addToCart }) {
  return (
    <div className="inline-block p-2 overflow-x-auto whitespace-nowrap group">
      <div className="inline-block w-64 h-auto border border-gray-300 relative p-4 mr-4 hover:border-orange-500">
        <div className="relative mb-4">
          <div className="absolute top-0 left-0 flex space-x-2 mb-2">
            <div className="text-xl p-1 rounded bg-transparent text-black">
              NEW
            </div>
            <div className="text-xl p-1 rounded bg-orange-500 text-white">
              -50%
            </div>
          </div>
          <div
            className="w-64 h-64 bg-center bg-cover"
            style={{ backgroundImage: `url(${imageSrc})` }}
          ></div>
          <button
            onClick={() => addToCart({ imageSrc, imageAlt, title, price, promo })}
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 w-1/2 text-center bg-orange-500 text-white rounded p-2 group-hover:opacity-100"
          >
            Add to cart
          </button>
        </div>
        <hr />
        <div className="mt-4 text-center">
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-500" />
            ))}
          </div>
          <h3 className="text-xl font-semibold mt-2">{title}</h3>
          <h3 className="text-lg mt-1">
            ${price}{" "}
            <span className="inline-flex font-normal line-through text-gray-400">
              ${promo}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CardArrivals;
