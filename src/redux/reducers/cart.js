
const initialState ={
    products : []
}


// nu trebuie sa modifice state-ul primit ca parametru si trebuie sa facem deep copy pe care prelucram si apoi returnam
function cartReducer(state=initialState, action ){
    switch(action.type){
        case 'ADD_TO_CART':
            const newState = {
                ...state,
                products:[...state.products, action.payload.product]
            }

            return newState;
        case 'REMOVE_FROM_CART':
            let indextoDelete = action.payload.product.index
            let updatedState = {
                ...state,
                products:[...state.products.filter(elem => state.products.indexOf(elem) !== indextoDelete  )]
            }
            return updatedState;
          
        default:
            return state;
    }
}

export default cartReducer;