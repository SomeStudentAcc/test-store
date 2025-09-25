"use client";

import React from "react";
import Link from "next/link";

export default function OurMission() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
      <p className="text-gray-600 text-2xl max-w-5xl mx-auto mb-8 leading-relaxed">
        At <span className="font-semibold text-blue-600">AWSOME</span>, our
        mission is to deliver high-quality products that inspire and empower
        people in their everyday lives. We strive to combine innovation, design,
        and functionality to create solutions that make a difference.
      </p>
      <Link
        href="/products"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
      >
        Explore Products
      </Link>
    </section>
  );
}
