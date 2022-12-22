import React from "react";

export default function PriceCard({ text, price }) {
  return (
    <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg my-6">
      <p className="text-lg md:text-xl">{text}</p>
      <p className="text-lg md:text-xl font-bold text-brand">{`₩${price}`}</p>
    </div>
  );
}
