import { useSelector } from "react-redux";
import classes from "./cart.module.scss";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  addQuantity,
  removeQuantity,
} from "../../store/actions/cart_actions";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(({ cart }) => cart.cart);

  const removeItemFromCart = (index) => {
    dispatch(removeFromCart(index));
  };

  const addOneMoreToCart = (index) => {
    dispatch(addQuantity(index));
  };

  const removeOneFromCart = (index) => {
    dispatch(removeQuantity(index));
    const product = cart.find((el) => el.item.id === index);
    if (product.quantity === 1) {
      removeItemFromCart(product.item.id);
    }
  };

  const removeAllItemsFromCart = () => {
    dispatch(clearCart());
    localStorage.clear();
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>CART</h1>
      <ul className={classes.productsContainer}>
        {cart
          ? cart.map((el, i) => (
              <li key={el.item.id}>
                <div className={classes.productName}>{el.item.name}</div>
                {el.quantity}
                <button onClick={() => addOneMoreToCart(el.item.id)}>
                  {" "}
                  +{" "}
                </button>
                <button onClick={() => removeOneFromCart(el.item.id)}>
                  {" "}
                  -{" "}
                </button>
                <button onClick={() => removeItemFromCart(el.item.id)}>
                  {" "}
                  delete{" "}
                </button>
              </li>
            ))
          : null}
      </ul>
      <button onClick={() => removeAllItemsFromCart()}>Clear cart</button>
    </div>
  );
}

export default Cart;
