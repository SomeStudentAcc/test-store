"use client";

import React from "react";
import { useRouter } from "next/navigation";

import NavMobile from "./NavMobile";

export default function Header() {
  const router = useRouter();

  const navItems = [
    { label: "Products", path: "/products" },
    { label: "Orders Table", path: "/order-table" },
    { label: "News", path: "/news" },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-5">
        {/* Logo */}
        <h1
          onClick={() => router.push("/")}
          className="text-2xl font-extrabold tracking-wide text-blue-600 cursor-pointer"
        >
          AWSOME
        </h1>

        <nav>
          <NavMobile navItems={navItems} />

          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => router.push(item.path)}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
