import { legacy_createStore , applyMiddleware ,  combineReducers} from "redux"
import {reducer as TodoReducer} from "./reducer"
import thunk from "redux-thunk"

const root = combineReducers({
 TodoReducer
})

export const store = legacy_createStore(root , applyMiddleware(thunk))