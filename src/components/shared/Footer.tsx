import React from "react";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5">
        <h2 className="text-lg font-bold mb-4 md:mb-0">AWSOME Shop</h2>

        <ul className="flex flex-col items-center gap-5 text-white font-medium">
          <li className="hover:text-blue-600 transition-colors cursor-pointer">
            Products
          </li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer">
            About Us
          </li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer">
            Product Table
          </li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer">
            Sales
          </li>
        </ul>

        <div className="flex gap-4">
          <Instagram
            className="hover:text-blue-500 transition-colors"
            size={24}
          />

          <Facebook
            className="hover:text-blue-500 transition-colors"
            size={24}
          />
        </div>
      </div>

    
    </footer>
  );
}
