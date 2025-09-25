import { getProducts } from "@/requests";
import React from "react";
import Products from "./Products";

export default async function ProductsPage() {
  const prods = await getProducts();
  <div>rere</div>;
  return <Products products={prods} />;
}
