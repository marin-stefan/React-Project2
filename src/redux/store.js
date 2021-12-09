import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import  cartReducer  from "./reducers/cart";
import { userReducer } from "./reducers/user";
import favoritesReducer from "./reducers/favorites";
import logger from "redux-logger";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  favorite: favoritesReducer,
});

const middlewares = [ReduxThunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
