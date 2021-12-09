const initialState = {
  products: [],
};

function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      const newState = {
        ...state,
        products: [...state.products, action.payload.product],
      };
      return newState;

    case "REMOVE_FROM_FAVORITES":
      let indextoDelete = action.payload.product.index;
      let updatedState = {
        ...state,
        products: [
          ...state.products.filter(
            (elem) => state.products.indexOf(elem) !== indextoDelete
          ),
        ],
      };
      return updatedState;

    default:
      return state;
  }
}
export default favoritesReducer;
