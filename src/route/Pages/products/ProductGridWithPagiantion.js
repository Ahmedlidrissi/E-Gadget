import React, { useState } from "react";
import { SidebarProduct } from "../products/SideBarProduct";
import { ProductGrid } from "./ProductGrid";
import { Pagination } from "flowbite-react";
import { Arrivals } from "../Assets/dataProduct";
import { useOutletContext } from "react-router-dom";

export function ProductListWithPagination() {
  const { addToCart } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 6;
  const filteredProducts =
    selectedCategory === "All"
      ? Arrivals
      : Arrivals.filter((product) => product.category === selectedCategory);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/5">
        <SidebarProduct onCategoryChange={handleCategoryChange} />
      </div>
      <div className="md:w-4/5 p-4">
        <div className="flex flex-wrap -mx-2">
          {paginatedProducts.map((product, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
              <ProductGrid product={product} addToCart={addToCart} />
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            showIcons={true}
            previousLabel="Prev"
            nextLabel="Next"
          />
        </div>
      </div>
    </div>
  );
}
