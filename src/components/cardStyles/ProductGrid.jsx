import React, { useState } from "react";
import ProductModal from "../ProductModal";

const products = [
  {
    id: 1,
    name: "Casual Shoes",
    category: "Sports",
    price: 100,
    offerPrice: 80,
    rating: 4,
    image:
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png",
    unitOptions: null,
  },
  {
    id: 2,
    name: "Rice",
    category: "Grocery",
    price: 60,
    offerPrice: 50,
    rating: 5,
    image:
      "https://cdn.britannica.com/17/176517-050-6F2B774A/Pile-uncooked-rice-grains-Oryza-sativa.jpg",
    unitOptions: ["kg", "gram"],
  },
  {
    id: 3,
    name: "Milk",
    category: "Dairy",
    price: 40,
    offerPrice: 35,
    rating: 4,
    image:
      "https://images.deliveryhero.io/image/product-information-management/677a5f1149d2ff174880b4cd.jpg?height=480",
    unitOptions: ["litre"],
  },
  {
    id: 4,
    name: "Potatoes",
    category: "Vegetables",
    price: 40,
    offerPrice: 35,
    rating: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTmSwA5WnE3pJ6572IxTOIo0JjYW5fkRHrQ&s",
    unitOptions: ["kg"],
  },
  {
    id: 5,
    name: "Chocolate Cake",
    category: "Snacks",
    price: 40,
    offerPrice: 35,
    rating: 4,
    image:
      "https://thescranline.com/wp-content/uploads/2024/10/CHOCOLATE-FUDGE-CAKE-24-S-11.jpg",
    unitOptions: ["pcs"],
  },
  {
    id: 6,
    name: "Beef",
    category: "Meat",
    price: 40,
    offerPrice: 35,
    rating: 4,
    image: "https://cdn.britannica.com/68/143268-050-917048EA/Beef-loin.jpg",
    unitOptions: ["kg"],
  },
  {
    id: 7,
    name: "Cookies",
    category: "Bakery",
    price: 40,
    offerPrice: 35,
    rating: 4,
    image:
      "https://www.allrecipes.com/thmb/8xwaWAHtl_QLij6D-G0Z4B1HDVA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/10813-best-chocolate-chip-cookies-mfs-146-4x3-b108aceffa6043a1ac81c3c5a9b034c8.jpg",
    unitOptions: ["pcs"],
  },
  {
    id: 8,
    name: "Mangoes",
    category: "Fruits",
    price: 90,
    offerPrice: 75,
    rating: 4,
    image:
      "https://www.thegardener.co.za/wp-content/uploads/2022/02/shutterstock_646447264-scaled.jpg",
    unitOptions: ["kg"],
  },
];

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product)}
      className="group cursor-pointer flex flex-col items-center p-3 rounded-lg transition-all duration-300 hover:bg-green-50 hover:shadow-md"
    >
      {/* Circle Image (like categories) */}
      <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow-lg transform group-hover:scale-105 transition-all duration-300">
        <img
          src={product.image}
          alt={product.name}
          className="w-20 h-20 object-cover rounded-full"
        />
      </div>

      {/* Info */}
      <p className="mt-2 text-sm sm:text-base font-semibold text-gray-800 truncate group-hover:text-green-600">
        {product.name}
      </p>
      <p className="text-xs text-gray-500">{product.category}</p>

      {/* Price */}
      <p className="mt-1 text-green-600 font-bold text-sm">
        ${product.offerPrice}{" "}
        <span className="text-gray-400 line-through text-xs">
          ${product.price}
        </span>
      </p>
    </div>
  );
};

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="mt-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-6">
        Our Best Seller Items
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onClick={handleProductClick} />
        ))}
      </div>

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProductGrid;




