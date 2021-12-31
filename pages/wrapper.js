import { useEffect } from "react";
import { syncReducer } from "../store/actions/cart_actions";
import { useDispatch, useSelector } from "react-redux";

const Wrapper = ({ children }) => {
  const cart = useSelector(({ cart }) => cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(syncReducer());
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cart));
  }, [cart]);

  return <>{children}</>;
};

export default Wrapper;
