import {createStore, combineReducers, applyMiddleware} from "redux";
import userAddToReducer from "../reducers/userAddToReducer";
import GridReducer from "../reducers/GridReducer";
import thunk from "redux-thunk";
import dataJSON from "../data.json";

export default createStore(combineReducers({
    GridReducer,
    userAddToReducer
    }),
    {
        users: dataJSON.users,
        myInfo: dataJSON.myInfo,
        userInput: ''
    },
    applyMiddleware(thunk)
);