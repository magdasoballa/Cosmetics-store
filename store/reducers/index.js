import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { cartReducer } from "../reducers/cartReducer/cart_reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const middleWares = applyMiddleware(thunk, logger);

export const store = createStore(rootReducer, middleWares);
