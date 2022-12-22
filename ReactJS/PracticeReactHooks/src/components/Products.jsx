import React from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  return (
    <>
      {isLoading && <p>isLoading...</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
