import { useParams } from "react-router"
import { Link } from "react-router-dom";

function ProductDetail() {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      <p><Link to='..' relative="path">Back</Link></p>
    </>
  )
}

export default ProductDetail