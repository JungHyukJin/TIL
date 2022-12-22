import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  product: { id, title, imageUrl, price, category },
}) {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className="shadow-md rounded-md overflow-hidden cursor-pointer transition-all hover:scale-105"
    >
      <img className="" src={imageUrl} alt={title} />
      <div className="px-2 mt-2 flex justify-between items-center text-lg">
        <p className="truncate">{title}</p>
        <p>{`₩${price}`}</p>
      </div>
      <p className="p-2 text-sm text-gray-400">{category}</p>
    </li>
  );
}
