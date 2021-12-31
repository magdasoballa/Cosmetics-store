import classes from "./single-product.module.scss";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction, addQuantity } from "../../store/actions/cart_actions";
import { forwardRef, useEffect, useState } from "react";

function SingleProduct(props) {
  const cart = useSelector(({ cart }) => cart.cart);
  const dispatch = useDispatch();
  const { product } = props;
  const linkPath = `/products/${product.name}`;

  const addToCart = () => {
    dispatch(addToCartAction(product));
  };

  const increaseQuantity = () => {
    dispatch(addQuantity(product.id));
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
      <button
        onClick={
          cart.find((el) => el.item?.id === product.id)
            ? () => increaseQuantity()
            : () => addToCart()
        }
      >
        +
      </button>
    </div>
  );
}

export default SingleProduct;
