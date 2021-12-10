import { START_LOADING } from "./UserConstants"
import { UPDATE_USER_DATA } from "./UserConstants"
import { UPDATE_ERROR } from "./UserConstants"

const initialState = {
    date: null,
    loading: false,
    error: null
}

export function userReducer(state=initialState, action) {
    switch(action.type){
        case START_LOADING:
            return {
                ...state,
                loading: true
            }
        case UPDATE_USER_DATA:
            return {
                ...state,
                data: action.payload
            }
        case UPDATE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }

}