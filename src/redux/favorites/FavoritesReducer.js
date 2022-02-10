import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./FavoritesConstants";

const initialState = {
  products: [],
  ids: [],
};

function favoritesReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ADD_TO_FAVORITES:
      if (!state.ids.includes(action.payload.product.id)) {
        newState = {
          ...state,
          products: [...state.products, action.payload.product],
          ids: [...state.ids, action.payload.product.id],
        };
        return newState;
      }

    case REMOVE_FROM_FAVORITES:
      let indexToDelete = action.payload.product.index;
      let idToDelete = action.payload.product.id;
      let updatedState = {
        ...state,
        products: [
          ...state.products.filter(
            (elem) => state.products.indexOf(elem) !== indexToDelete
          ),
        ],
        ids: [...state.ids.filter((elem) => elem.id !== idToDelete)],
      };
      return updatedState;

    default:
      return state;
  }
}
export default favoritesReducer;
