import React from "react";
import { X } from "lucide-react";

const ProductModal = ({ product, isOpen, onClose }) => {
  const [count, setCount] = React.useState(1);
  const [unit, setUnit] = React.useState(
    product?.unitOptions ? product.unitOptions[0] : null
  );

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-lg overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          <X size={22} />
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Left: Image */}
          <div className="flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-80 object-contain rounded-lg"
            />
          </div>

          {/* Right: Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-gray-400 text-sm mt-1">{product.category}</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      product.rating > i ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
            </div>

            {/* Price */}
            <p className="text-indigo-600 font-bold text-2xl mt-3">
              ${product.offerPrice}{" "}
              <span className="text-gray-400 line-through text-base">
                ${product.price}
              </span>
            </p>

            {/* Quantity & Unit */}
            <div className="flex items-center gap-4 mt-5">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCount((p) => Math.max(p - 1, 1))}
                  className="px-3 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg font-medium">{count}</span>
                <button
                  onClick={() => setCount((p) => p + 1)}
                  className="px-3 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>

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

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <button
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
                onClick={() =>
                  alert(
                    `Added ${count} ${unit ? unit : "pcs"} of ${product.name} to cart`
                  )
                }
              >
                Add to Cart
              </button>
              <button className="border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-100 transition">
                Add to Wishlist
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-700">
                Additional Information
              </h3>
              <table className="w-full text-sm mt-2 border-t border-gray-200">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 text-gray-500">Weight</td>
                    <td className="py-2 text-gray-800">N/A</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-gray-500">Dimensions</td>
                    <td className="py-2 text-gray-800">N/A</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-500">Unit Size</td>
                    <td className="py-2 text-gray-800">
                      {product.unitOptions ? product.unitOptions.join(", ") : "N/A"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
