import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";

export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();
  const [success, setSuccess] = useState('');
  const [disabled, setDisabled] = useState(false);
  const {
    state: {
      product: { id, imageUrl, title, description, category, price, options },
    },
  } = useLocation();

  const [selected, setSelected] = useState(options[0]);
  const selectHandler = (e) => {
    // 옵션 선택
    setSelected(e.target.value);
  };

  const clickHandler = () => {
    // 장바구니 추가
    const product = {
      id,
      imageUrl,
      title,
      description,
      category,
      price,
      option: selected,
      quantity: 1,
    };
    addOrUpdateItem.mutate(product, { onSuccess: () => {
      setDisabled(true); // 버튼 비활성화
      setSuccess('장바구니에 성공적으로 추가되었습니다! :]');
      setTimeout(()=>{
        setSuccess('');
        setDisabled(false);
      },3000)
    } });
    
  };

  return (
    <section className="w-full p-4 flex flex-col lg:flex-row ">
      <img
        className="w-full md:w-6/12 rounded-md shadow-md m-auto"
        src={imageUrl}
        alt=""
      />
      <div className="w-full flex flex-col p-4">
        <div className="w-full flex justify-between border-b pb-4">
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-2xl font-bold">{`₩${price}`}</p>
        </div>
        <div className="w-full flex justify-between items-center pt-2 pb-4">
          <p className="">
            {category}, {description}
          </p>
          <div className="flex gap-2 items-center">
            <label htmlFor="select" className="text-brand font-bold">
              옵션 :{" "}
            </label>
            <select
              id="select"
              className="border-dashed border-2 p-1 m-2"
              onChange={selectHandler}
              value={selected}
            >
              {options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
        </div>
        {success&&<p>{success}</p>}
        <Button text="장바구니에 추가" onClick={clickHandler} disabled={disabled}/>
      </div>
    </section>
  );
}
