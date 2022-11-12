import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetcher, QueryKeys } from "../../queryClient";
import { Product } from "../../types";

const ProductDetail = ({
  item: {
    category,
    title,
    image,
    price,
    description,
    rating: { rate },
  },
}: {
  item: Product;
}) => {
  return (
    <div className="product-detail">
      <p>{category}</p>
      <p>{title}</p>
      <img className="product-detail__image" src={image} />
      <p>{description}</p>
      <span>${price}</span>
      <span>{rate}</span>
    </div>
  );
};

export default ProductDetail;
