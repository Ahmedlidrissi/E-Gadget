// ProductGrid.js
import React from "react";
import { Card } from "flowbite-react";

export function ProductGrid({ product, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card className="max-w-sm" imgAlt={product.imageAlt} imgSrc={product.imageSrc}>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        {/* Additional details */}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
        <button
          className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </Card>
  );
}
