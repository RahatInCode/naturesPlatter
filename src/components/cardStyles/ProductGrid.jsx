import React from "react";

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

const BestSellerCard = ({ product }) => {
  const [count, setCount] = React.useState(0);
  const [unit, setUnit] = React.useState(
    product.unitOptions ? product.unitOptions[0] : null
  );

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-4 flex flex-col">
      {/* Image */}
      <div className="flex justify-center h-36">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain rounded-lg"
        />
      </div>

      {/* Info */}
      <div className="mt-3 flex-1">
        <p className="text-gray-400 text-xs">{product.category}</p>
        <p className="font-semibold text-base text-gray-800 truncate">
          {product.name}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-0.5 mt-1">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <span
                key={i}
                className={`text-sm ${
                  product.rating > i ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
        </div>

        {/* Price */}
        <p className="text-indigo-600 font-bold text-lg mt-2">
          ${product.offerPrice}{" "}
          <span className="text-gray-400 line-through text-sm">
            ${product.price}
          </span>
        </p>
      </div>

      {/* Quantity & Unit */}
      <div className="mt-3 flex items-center justify-between gap-2">
        {count === 0 ? (
          <button
            className="bg-indigo-100 text-indigo-600 text-sm px-3 py-1 rounded-md hover:bg-indigo-200 transition"
            onClick={() => setCount(1)}
          >
            + Add
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCount((p) => Math.max(p - 1, 0))}
              className="px-3 py-1 bg-gray-200 rounded text-sm"
            >
              -
            </button>
            <span className="text-sm">{count}</span>
            <button
              onClick={() => setCount((p) => p + 1)}
              className="px-3 py-1 bg-gray-200 rounded text-sm"
            >
              +
            </button>
          </div>
        )}

        {product.unitOptions && (
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="border border-gray-300 rounded text-sm px-2 py-1"
          >
            {product.unitOptions.map((u) => (
              <option key={u}>{u}</option>
            ))}
          </select>
        )}
      </div>

      {/* Buy Now */}
      {count > 0 && (
        <button
          onClick={() =>
            alert(
              `Added ${count} ${unit ? unit : "pcs"} of ${product.name} to cart`
            )
          }
          className="mt-3 w-full bg-indigo-500 text-white text-sm py-2 rounded-md hover:bg-indigo-600 transition"
        >
          Buy Now
        </button>
      )}
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Our Best Seller Items
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <BestSellerCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;



