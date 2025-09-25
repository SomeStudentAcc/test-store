import { IProduct } from "@/types/products.interface";
import Image from "next/image";
import React from "react";

interface Props {
  products: IProduct[];
}

export default function Products({ products }: Props) {
  return (
    <div className="container mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl shadow-md p-4 flex flex-col hover:shadow-lg transition"
          >
            <div className="relative h-auto w-full aspect-square overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src={product.image}
                alt="Product Image"
                width={500}
                height={500}
                className="w-full h-auto max-h-[370px] object-cover absolute top-0 left-0"
              />
            </div>
            <h2 className="text-lg font-semibold line-clamp-2 mb-2">
              {product.title}
            </h2>
            <p className="text-gray-600 text-sm line-clamp-3 mb-3">
              {product.description}
            </p>
            <p className="font-bold text-lg">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
