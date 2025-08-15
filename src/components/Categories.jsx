import React from "react";
import { useNavigate } from "react-router";

const categories = [
  { name: "Fruits", img: "/assets/grapes-01.png" },
  { name: "Vegetables", img: "/assets/vegetables.jpg" },
  { name: "Dairy", img: "/assets/dairy.jpg" },
  { name: "Bakery", img: "/assets/bakery.jpg" },
  { name: "Meat", img: "/assets/meat.jpg" },
  { name: "Beverages", img: "/assets/bevarages.jpg" },
  { name: "Snacks", img: "/assets/snacks.jpg" },
];

export default function Categories() {
  const navigate = useNavigate();

  const handleClick = (categoryName) => {
    navigate(`/category/${categoryName.toLowerCase()}`);
  };

  return (
    <div className="mt-8">
      {/* Title */}
      <p className="text-2xl md:text-3xl font-semibold text-gray-800">
        Categories
      </p>

      {/* Category Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 mt-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(cat.name)}
            className="group cursor-pointer flex flex-col items-center p-2 rounded-lg transition-all duration-300 hover:bg-green-50 hover:shadow-md"
          >
            {/* Circle Image */}
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow-lg transform group-hover:scale-105 group-hover:animate-bounce transition-all duration-300">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-12 h-12 object-cover rounded-full"
              />
            </div>
            {/* Label */}
            <p className="mt-1 text-xs sm:text-sm font-medium text-gray-700 group-hover:text-green-600">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}



