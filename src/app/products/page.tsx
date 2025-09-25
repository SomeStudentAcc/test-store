import React from "react";
import Products from "./Products";
import axiosInstance from "@/axios";

export const getProducts = async () => {
  try {
    const res = await axiosInstance.get("/products");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default async function ProductsPage() {
  const prods = await getProducts();
  if (!prods) {
    return <div>No products available</div>;
  }
  return <Products products={prods} />;
}
