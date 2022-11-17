import React from "react";
import { Products } from "../components/products";
import { Search } from "../components/search";
import { useProducts } from "../hooks/useProducts";

const Home = () => {
  const { products } = useProducts();
  return (
    <>
      <Search />
      <Products products={products} />
    </>
  );
};

export default Home;
