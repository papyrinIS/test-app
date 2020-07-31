import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import Reducer from "./reducer";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    Reducer:Reducer,
    form: formReducer
})



const store = createStore(reducers,applyMiddleware(thunkMiddleware))

window.store = store;

export default store;