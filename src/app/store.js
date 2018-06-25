import {createStore, combineReducers} from "redux";
import userAddToReducer from "../reducers/userAddToReducer";
import userIsFavReducer from "../reducers/userIsFavReducer"

export default createStore(combineReducers({
    userIsFavReducer,
    userAddToReducer
}));