import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ imageSrc, imageAlt, title, linkText, product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img src={imageSrc} alt={imageAlt} className="product-card__image" />
      </div>
      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>
        <div className="product-card__link">
          <Link to="/product" className="product-card__link-text">
            {linkText}
          </Link>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/32151825f3e8751f5f97e23ee3b7df74143f3d901df25d2eb7c19aca98f39aa0?apiKey=c261b1132bd3471985b2b833c77deb73&"
            alt="Arrow icon"
            className="product-card__link-icon"
          />
        </div>
        <button onClick={handleAddToCart} className="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
