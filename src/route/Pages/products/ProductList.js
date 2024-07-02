// ProductList.js
import React from "react";
import { ProductGrid } from "./ProductGrid";
import { Arrivals } from "../Assets/dataProduct";
import { SidebarProduct } from "./SideBarProduct";
import { useOutletContext } from "react-router-dom";

export function ProductList() {
  const { addToCart } = useOutletContext();

  return (
    <div className="grid grid-cols-5 lg:mx-3">
      <div className="col-span-1">
        <SidebarProduct />
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-1 lg:grid-cols-3 col-span-4">
        {Arrivals.map((product, index) => (
          <ProductGrid key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
  