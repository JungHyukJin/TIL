import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useCart from "../hooks/useCart";

const ICON_CLASS =
  "mx-2 cursor-pointer hover:scale-105 hover:text-brand transition-all";

export default function CartItem({ product }) {
  const {addOrUpdateItem, removeItem} = useCart();

  const minusHandler = () => {
    if (product.quantity < 2) {
      return;
    }
    addOrUpdateItem.mutate({ ...product, quantity: product.quantity - 1 });
  };
  const plusHandler = () => {
    addOrUpdateItem.mutate({ ...product, quantity: product.quantity + 1 });
  };
  const removeHAndler = () => {
    removeItem.mutate(product.id);
  };
  return (
    <li className="flex justify-between my-4 items-center">
      <img
        className="w-48 md:w-56 rounded-lg"
        src={product.imageUrl}
        alt=""
      ></img>
      <div className="flex justify-between flex-1">
        <div className="basis-5/12 ml-6">
          <p className="font-bold text-lg md:text-2xl">{product.title}</p>
          <p className="text-brand text-xl md:text-2xl border-b pb-3">{product.option}</p>
          <p className="text-lg mt-4">{`₩${product.price}`}</p>
        </div>
        <div className="flex items-center text-lg md:text-2xl">
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={minusHandler} />
          <span>{product.quantity}</span>
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={plusHandler} />
          <RiDeleteBin5Fill className={ICON_CLASS} onClick={removeHAndler} />
        </div>
      </div>
    </li>
  );
}
