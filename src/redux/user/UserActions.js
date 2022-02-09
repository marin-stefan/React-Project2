import { signInWithGoogle,signInWithFacebook, signOut } from "../../apis/firebase"
import { START_LOADING, UPDATE_USER_DATA, UPDATE_ERROR } from "./UserConstants"

export function startLoading() {
    return{
        type: START_LOADING
    }
}

export function updateUserData(payload) {
    return {
        type: UPDATE_USER_DATA,
        payload
    }
}

export function updateError(payload) {
    return{

        type: UPDATE_ERROR,
        payload
    }
}



export function loginUserG() {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithGoogle().then((response)=> {
            console.log(response.user)
            const payload = response.user;
            dispatch(updateUserData(payload))
        }).catch((error)=>{
            console.log("error")
            dispatch(updateError(error))
        })
    }
}

export function loginUserF() {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithFacebook().then((response)=> {
            console.log(response.user)
            const payload = response.user;
            dispatch(updateUserData(payload))
        }).catch((error)=>{
            console.log("error")
            dispatch(updateError(error))
        })
    }
}


export function logOutUser() {
    return (dispatch) => {
        dispatch(startLoading())

        signOut().then(()=> {
            dispatch(updateUserData(null))
        }).catch((error)=> {
            dispatch(updateError(error))
        })
    }
}
