import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  ADD_QUANTITY,
  REMOVE_QUANTITY,
  SYNCHRONIZE_REDUCER,
} from "../../actions/cart_actions";

const INITIAL_STATE = {
  cart: [],
};

export const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SYNCHRONIZE_REDUCER:
      return {
        ...state,
        cart: payload,
      };
    case ADD_TO_CART:
      const updatedCard = [...state.cart, { item: payload, quantity: 1 }];
      return {
        ...state,
        cart: updatedCard,
      };
    case REMOVE_FROM_CART:
      const productToRemove = state.cart.find((el) => el.item.id === payload);
      const updatedCarda = state.cart.filter((el) => el !== productToRemove);
      return {
        ...state,
        cart: updatedCarda,
      };
    case ADD_QUANTITY:
      console.log(state.cart, " co jest kurwa");
      const productToChangeQuan = state.cart.find(
        (el) => el.item.id === payload
      );
      const index = state.cart.findIndex(
        (item) => item === productToChangeQuan
      );
      if (index === -1) {
        return state;
      }
      const updatedStateCart = JSON.parse(JSON.stringify(state.cart));
      updatedStateCart[index].quantity += 1;
      const updatedCardb = [...updatedStateCart];
      return {
        ...state,
        cart: updatedCardb,
      };

    case REMOVE_QUANTITY:
      const productToRemoveQuan = state.cart.find(
        (el) => el.item.id === payload
      );
      const indexToRemoveQuantity = state.cart.findIndex(
        (item) => item === productToRemoveQuan
      );
      if (indexToRemoveQuantity === -1) {
        return state;
      }
      const updatedStateCartWithLessAmount = JSON.parse(
        JSON.stringify(state.cart)
      );
      updatedStateCartWithLessAmount[indexToRemoveQuantity].quantity -= 1;
      const updatedCardc = [...updatedStateCartWithLessAmount];
      return {
        ...state,
        cart: updatedCardc,
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
