import classes from "./single-product.module.scss";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../store/actions/cart_actions";

function SingleProduct(props) {
  const dispatch = useDispatch();
  const { product } = props;
  const linkPath = `/products/${product.name}`;

  const addToCart = () => {
    dispatch(addToCartAction(product));
    localStorage.setItem(product.id, JSON.stringify(product));
  };
  return (
    <div>
      <Link href={linkPath}>
        <a>
          <div className={classes.productContainer}>
            <img className={classes.picture} src={product.image_link} />
            <p>{product.product_type}</p>
            <h2>{product.name}</h2>
            <p className={classes.price}>${product.price.padEnd(2, 0)}0</p>
          </div>
        </a>
      </Link>
      <button onClick={addToCart}>+</button>
    </div>
  );
}

export default SingleProduct;
