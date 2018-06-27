import React from 'react';
import dataJSON from "../data.json";

const initialState = {
    users: dataJSON.users,
    myInfo: dataJSON.myInfo,
    userInput: ''
};

const GridReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_USERS":{
            return {
                users: action.payload
            };
        }
        default: {
            return state
        }
    }
};

export default GridReducer;