import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  ADD_QUANTITY,
} from "../../actions/cart_actions";

const INITIAL_STATE = {
  cart: [],
};

export const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { item: payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      const productToRemove = state.cart.find((el) => el.item.id === payload);
      return {
        ...state,
        cart: state.cart.filter((el) => el !== productToRemove),
      };
    case ADD_QUANTITY:
      const productToChangeQuan = state.cart.find(
        (el) => el.id === payload.index
      );
      console.log(state.cart.find((el) => el.item === productToChangeQuan));
      return {
        ...state,
        cart: [...state.cart, { quantity: payload.quantity + 1 }],
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
