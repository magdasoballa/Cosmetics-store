import { useSelector } from "react-redux";
import classes from "./cart.module.scss";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  addQuantity,
} from "../../store/actions/cart_actions";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(({ cart }) => cart.cart);

  const productsAddedToCart = cart.map((product) =>
    JSON.parse(
      typeof window !== "undefined"
        ? localStorage.getItem(product.item.id)
        : null
    )
  );

  const quantities = cart.map((el) => el.quantity);

  const removeItemFromCart = (index) => {
    const removedItem = cart.find((el) => el.item.id === index);
    dispatch(removeFromCart(index));
    localStorage.removeItem(removedItem.item.id);
  };

  const addOneMoreToCart = (index) => {
    dispatch(addQuantity(index));
  };

  const removeAllItemsFromCart = () => {
    dispatch(clearCart());
    localStorage.clear();
  };

  return (
    <div>
      <ul className={classes.productsContainer}>
        {productsAddedToCart.map((el, i) => (
          <li key={el.id}>
            {el.name}
            {quantities[i]}
            <button onClick={() => addOneMoreToCart(el.id)}> + </button>
            <button onClick={() => removeItemFromCart(el.id)}> - </button>
          </li>
        ))}
      </ul>
      <button onClick={() => removeAllItemsFromCart()}>Clear cart</button>
    </div>
  );
}

export default Cart;
