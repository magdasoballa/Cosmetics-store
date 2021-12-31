import { useSelector } from "react-redux";
import classes from "./cart.module.scss";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  addQuantity,
  removeQuantity,
} from "../../store/actions/cart_actions";
import { useEffect, useState } from "react";

function Cart() {
  const [productsAddedToCart, setProductsAddedToCart] = useState([]);

  const dispatch = useDispatch();
  const cart = useSelector(({ cart }) => cart.cart);
  const prodArr = [];
  const quantities = cart.map((el) => el.quantity);

  useEffect(() => {
    console.log(prodArr);
    for (let [key, value] of Object.entries(localStorage)) {
      prodArr.push(JSON.parse(value));
    }
    setProductsAddedToCart(prodArr);
    console.log(prodArr.map((el) => el.product));
  }, []);

  const removeItemFromCart = (index) => {
    const removedItem = cart.find((el) => el.item.id === index);
    dispatch(removeFromCart(index));
    localStorage.removeItem(removedItem.item.id);
  };

  const addOneMoreToCart = (index) => {
    dispatch(addQuantity(index));
  };

  const removeOneFromCart = (index) => {
    dispatch(removeQuantity(index));
  };

  const removeAllItemsFromCart = () => {
    dispatch(clearCart());
    localStorage.clear();
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>CART</h1>
      <ul className={classes.productsContainer}>
        {productsAddedToCart.map((el, i) => (
          <li key={el.product.id}>
            <div className={classes.productName}>{el.product.name}</div>
            {quantities[i]}
            <button onClick={() => addOneMoreToCart(el.product.id)}> + </button>
            <button onClick={() => removeOneFromCart(el.product.id)}>
              {" "}
              -{" "}
            </button>
            <button onClick={() => removeItemFromCart(el.product.id)}>
              {" "}
              delete{" "}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => removeAllItemsFromCart()}>Clear cart</button>
    </div>
  );
}

export default Cart;
