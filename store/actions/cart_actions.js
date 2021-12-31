export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART_UNITS = "UPDATE_CART_UNITS";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const REMOVE_QUANTITY = "REMOVE_QUANTITY";

export const addToCartAction = (product) => (dispatch) => {
  return dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
};

export const removeFromCart = (index) => (dispatch) => {
  return dispatch({
    type: REMOVE_FROM_CART,
    payload: index,
  });
};

export const addQuantity = (index) => (dispatch) => {
  return dispatch({
    type: ADD_QUANTITY,
    payload: index,
  });
};

export const removeQuantity = (index) => (dispatch) => {
  return dispatch({
    type: REMOVE_QUANTITY,
    payload: index,
  });
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
