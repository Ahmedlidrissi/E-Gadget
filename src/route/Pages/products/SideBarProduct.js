import React, { useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { HiShoppingBag, HiPhone, HiOutlineDeviceMobile } from 'react-icons/hi';
import { FaLaptop, FaClock } from 'react-icons/fa'; // Replaced FaWatch with FaClock

export function SidebarProduct({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <Sidebar aria-label="Product category filter">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="#"
            icon={HiShoppingBag}
            onClick={() => handleCategoryChange('')}
            active={selectedCategory === ''}
          >
            All Products
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiPhone}
            onClick={() => handleCategoryChange('Phones')}
            active={selectedCategory === 'Phones'}
          >
            Phones
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={FaLaptop} // Ensure FaLaptop is imported correctly and used here
            onClick={() => handleCategoryChange('Laptops')}
            active={selectedCategory === 'Laptops'}
          >
            Laptops
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiOutlineDeviceMobile}
            onClick={() => handleCategoryChange('Accessories')}
            active={selectedCategory === 'Accessories'}
          >
            Accessories
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={FaClock} // Use FaClock instead of FaWatch
            onClick={() => handleCategoryChange('Wearables')}
            active={selectedCategory === 'Wearables'}
          >
            Wearables
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}