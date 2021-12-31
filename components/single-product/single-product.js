import classes from "./single-product.module.scss";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction, addQuantity } from "../../store/actions/cart_actions";
import { forwardRef, useEffect, useState } from "react";

function SingleProduct(props) {
  const [productsFromCart, setProductsFromCart] = useState([]);
  const [productsAddedToCart, setProductsAddedToCart] = useState([]);

  useState(() => {
    const prod = localStorage.getItem("products");
    if (prod) {
      const parsedProducta = JSON.parse(prod);
      setProductsAddedToCart(parsedProducta);
    }
  }, []);

  const dispatch = useDispatch();
  const { product } = props;
  const linkPath = `/products/${product.name}`;

  const productObject = {
    product: product,
    quantity: 1,
  };

  const addToCart = () => {
    dispatch(addToCartAction(product));
    const newArr = JSON.parse(JSON.stringify(productsAddedToCart));
    newArr.push(productObject);
    setProductsAddedToCart(newArr);

    localStorage.setItem("products", JSON.stringify(productsAddedToCart));

    if (typeof window !== "undefined") {
      const productsArr = JSON.parse(localStorage.getItem("products"));
      console.log(productsArr);
      setProductsFromCart(productsArr);
    }
    console.log(productsFromCart);
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
          // productsAddedToCart.find((el) => el.product.id === product.id)
          //   ? increaseQuantity
          //   : () => addToCart()
          addToCart
        }
      >
        +
      </button>
    </div>
  );
}

export default SingleProduct;
