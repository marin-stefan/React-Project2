import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import cartReducer from "../cart/CartReducer";
import { userReducer } from "../user/UserReducer";
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
