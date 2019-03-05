import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import IndexReducer from "./index"

const BigReducer=combineReducers({
    IndexReducer
})

const Store=createStore(BigReducer,applyMiddleware(thunk))


