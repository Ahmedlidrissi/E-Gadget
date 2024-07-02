import React from 'react';
import { ProductListWithPagination } from './ProductGridWithPagiantion';
import Footer from '../../../footer/footer';
function Product() {
  return (
    <div>
      <br></br>
      <ProductListWithPagination />
      <br></br>
      <Footer/>
    </div>
  );
}

export default Product;
