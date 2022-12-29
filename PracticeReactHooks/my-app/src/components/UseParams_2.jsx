import React from "react";
import { useParams } from "react-router-dom";

export default function UseParams_2() {
  const { params } = useParams();

  return (
    <>
      <p>이동 성공! URL 확인!</p>
      <p>파라미터 확인 : {params}</p>
    </>
  );
}
