import { ADD_TODOS, CLEAR_COMPLETED, DELETE_TODOS, TOOGLE_TODOS } from "./actiontype"

export const Addtodonew = (todo) => (dispatch) => {
    dispatch({type : ADD_TODOS , payload : todo})
}

export const Delete = (id) => (dispatch) => {
    dispatch({type : DELETE_TODOS , payload : id})
}

export const Toggle = (id) => (dispatch) => {
    dispatch({type : TOOGLE_TODOS ,  payload : id})
}


export const Clear = (dispatch) => {
    dispatch({type: CLEAR_COMPLETED})
}