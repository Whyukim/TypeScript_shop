import { Link } from "react-router-dom";
import { Product } from "../../types";

const ProductItem = ({
  id,
  category,
  image,
  price,
  rating,
  title,
}: Product) => {
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <p>{category}</p>
        <p>{title}</p>
        <img className="product-item__image" src={image} />
        <span>${price}</span>
        <span>{rating.count}</span>
        <span>{rating.rate}</span>
      </Link>
    </li>
  );
};

export default ProductItem;
