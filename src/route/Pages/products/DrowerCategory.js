import { useState } from "react";
import { SidebarProduct } from "../products/SideBarProduct";
import { ProductGrid } from "./ProductGrid";
import { Pagination } from "flowbite-react";
import { Arrivals } from "../Assets/dataProduct";

export function ProductListWithPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const itemsPerPage = 6;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredProducts = selectedCategory
    ? Arrivals.filter((product) => product.category === selectedCategory)
    : Arrivals;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="grid grid-cols-5 lg:mx-3">
      <div className="col-span-1">
        <SidebarProduct onCategoryChange={handleCategoryChange} />
      </div>
      <div className="col-span-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((product, index) => (
            <ProductGrid key={index} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Pagination
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
            showIcons={true}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
}
