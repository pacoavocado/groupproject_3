import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Market = () => {
  return (
    <div className="container cursor">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Market;