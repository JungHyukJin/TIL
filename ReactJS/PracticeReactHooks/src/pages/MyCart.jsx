import React from "react";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";

const SHIPPING_PRICE = 3000;
export default function MyCart() {
  const {
    cartQuery: { data: products, isLoading },
  } = useCart();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const hasProducts = products && products.length > 0;
  const totalPrice = products.reduce(
    (prev, current) => prev + parseInt(current.price) * current.quantity,
    0
  );

  const orderHandler = () => {};

  return (
    <section className="px-4 pb-12 flex flex-col ">
      {!hasProducts && <p>장바구니에 상품이 없습니다..!</p>}
      {hasProducts && (
        <>
          <p className="text-center p-4 border-b font-bold text-xl">
            내 장바구니
          </p>
          <ul className="border-b p-4">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className="flex justify-between items-center m-4">
            <PriceCard text={"상품 총가격"} price={totalPrice} />
            <BsFillPlusCircleFill className="shrink-0" />
            <PriceCard text={"배송 가격"} price={SHIPPING_PRICE} />
            <FaEquals className="shrink-0" />
            <PriceCard text={"총가격"} price={totalPrice + SHIPPING_PRICE} />
          </div>
          <Button text="주문하기" onClick={orderHandler} />
        </>
      )}
    </section>
  );
}
