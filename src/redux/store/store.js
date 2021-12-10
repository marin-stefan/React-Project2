import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
// import  cartReducer  from "./reducers/cart";
import cartReducer from "../cart/CartReducer"
// import { userReducer } from "./reducers/user";
import { userReducer } from "../user/UserReducer";
// import favoritesReducer from "./reducers/favorites";
import favoritesReducer from "../favorites/FavoritesReducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  favorite: favoritesReducer,
});

const middlewares = [ReduxThunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
