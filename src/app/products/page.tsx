import React from "react";
import Products from "./Products";
import axiosInstance from "@/axios";
import axios from "axios";

export const dynamic = "force-dynamic";

export const getProducts = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
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
