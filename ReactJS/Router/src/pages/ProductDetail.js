import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  return (
    <seciton>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </seciton>
  );
};

export default ProductDetail;
