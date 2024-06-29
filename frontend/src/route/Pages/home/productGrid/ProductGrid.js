import {products} from '../../Assets/dataProduct'
import ProductCard from '../ProductCard/ProductCard'
import './ProductGrid.css'
  export const ProductGrid = () => {
    return (
      <main className="product-grid">
        <div className="product-grid__container">
          <div className="product-grid__row">
            <div className="product-grid__column" id='product-grid__column'>
              <ProductCard {...products[0]} />
            </div>
            <div className="product-grid__column">
              {products.slice(1).map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
    );
  };