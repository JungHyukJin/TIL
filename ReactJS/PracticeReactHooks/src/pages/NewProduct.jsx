import React, { useState } from "react";
import { uploadImage } from "../api/uploader";
import Button from "../components/ui/Button";
import useProducts from "../hooks/useProducts";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState(null);
  const { addProduct } = useProducts();

  const submitHandler = (e) => {
    e.preventDefault();
    // 제품 사진 cloudinary에 업로드 후 URL받기
    // Firebase에 제품 등록
    setIsUploading(true); // submit누르면 버튼 비활성화
    uploadImage(file)
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess("제품이 성공적으로 추가되었습니다..!");
              setTimeout(() => {
                setSuccess(null);
              }, 2000);
            },
          }
        );
      })
      .finally(() => setIsUploading(false));
  };

  const changeHandler = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  return (
    <section className="w-full text-center mb-12">
      <p className=" text-2xl font-bold my-4">새로운 제품 등록</p>
      {success && <p className="my-2">{success}</p>}
      {file && (
        <img
          className="w-96 mb-4 mx-auto"
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      <form className="flex flex-col mx-12" onSubmit={submitHandler}>
        <input
          type="file"
          accept="image/*"
          name="file"
          onChange={changeHandler}
          required
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ""}
          placeholder="제품명"
          onChange={changeHandler}
          required
        />
        <input
          type="number"
          name="price"
          value={product.price ?? ""}
          placeholder="가격"
          onChange={changeHandler}
          required
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ""}
          placeholder="카테고리"
          onChange={changeHandler}
          required
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ""}
          placeholder="제품 설명"
          onChange={changeHandler}
          required
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ""}
          placeholder="제품 옵션, ,(콤마)로 구분"
          onChange={changeHandler}
          required
        />
        <Button
          text={isUploading ? "제품 등록 중..." : "제품 등록하기"}
          disabled={isUploading}
        />
      </form>
    </section>
  );
}
