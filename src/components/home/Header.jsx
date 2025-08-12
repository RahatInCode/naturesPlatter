import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 z-50 select-none">
      {/* TOP PROMO BAR - UNCHANGED */}
      <div className="bg-[#EAF7EF] text-[#083925] text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
          <div className="flex items-center gap-4">
            <span className="font-semibold">Free shipping on orders over ৳2000</span>
            <span className="hidden md:inline text-xs text-gray-600">Fresh groceries delivered in 30-45 mins</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-700">
            <a href="#" className="hover:underline">Gift Cards</a>
            <a href="#" className="hover:underline">Track Order</a>
            <a href="#" className="hidden sm:inline hover:underline">Partner with us</a>
          </div>
        </div>
      </div>

      {/* MAIN NAV - TRANSPARENT */}
      <div className="bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          {/* LOGO */}
          <div className="flex items-center gap-1">
            <a href="/" className="flex items-center gap-3 no-underline">
              <div className="w-12 h-12  flex items-center justify-center  transform-gpu transition-transform duration-300 hover:scale-105">
                <img src="/assets/logo.png" alt="" />
              </div>
              <div>
                <div className="text-lg md:text-2xl font-extrabold text-white leading-tight">Natures Platter</div>
                <div className="text-xs text-gray-100 -mt-0.5">Fresh groceries delivered</div>
              </div>
            </a>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="text-white hover:text-green-200 transition">Home</a>
            <a href="#" className="text-white hover:text-green-200 transition">Shop</a>
            <a href="#" className="text-white hover:text-green-200 transition">Categories</a>
            <a href="#" className="text-white hover:text-green-200 transition">About</a>
            <a href="#" className="text-white hover:text-green-200 transition">Blog</a>
          </nav>

          {/* SEARCH + ACTIONS */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <div className="relative hidden sm:block w-64 md:w-96">
              <input
                aria-label="Search"
                className="w-full rounded-full border border-gray-200 px-4 py-2 pr-10 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#AFC675] focus:border-transparent transition shadow-sm"
                placeholder="Search for fruits, vegetables, groceries..."
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-[#AFC675] hover:bg-[#74B04D] text-white px-4 py-2 rounded-full shadow-md transition transform-gpu hover:-translate-y-0.5">
                <FaShoppingCart />
                <span className="hidden sm:inline font-medium">Cart</span>
                <span className="ml-2 inline-block bg-white text-[#083925] px-2 py-0.5 rounded-full text-xs font-bold">3</span>
              </button>

              <button className="p-2 rounded-full border border-gray-200 hover:shadow-sm transition bg-white/20 backdrop-blur-sm">
                <FaUser className="text-white" />
              </button>

              <button className="sm:hidden p-2 rounded-md border border-gray-200 bg-white/20 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#fff">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
