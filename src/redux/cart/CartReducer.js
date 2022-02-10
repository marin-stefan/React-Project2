import { ADD_TO_CART, REMOVE_FROM_CART } from "./CartConstants";

const initialState = {
  products: [],
  ids: [],
  total: 0,
  currency: "LEI",
};

function cartReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ADD_TO_CART:
      if (!state.ids.includes(action.payload.product.id)) {
        let priceToAddToTotal = action.payload.product.price;
        let quantity = 1;

        let newpayload = { ...action.payload.product, quantity };
        newState = {
          ...state,
          products: [...state.products, newpayload],
          ids: [...state.ids, action.payload.product.id],
          total: state.total + priceToAddToTotal,
        };
        return newState;
      } else {
        return state;
      }

    case REMOVE_FROM_CART:
      let priceToDeductFromTotal = action.payload.product.price;
      let idToDelete = action.payload.product.id;
      let indextoDelete = action.payload.product.index;

      let updatedState = {
        ...state,
        products: [
          ...state.products.filter(
            (elem) => state.products.indexOf(elem) !== indextoDelete
          ),
        ],
        ids: [...state.ids.filter((elem) => elem.id !== idToDelete)],
        total: state.total - priceToDeductFromTotal,
      };
      return updatedState;

    default:
      return state;
  }
}

export default cartReducer;
