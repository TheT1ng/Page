import React from 'react';
import dataJSON from "../data.json";

const initialState = {
    users: dataJSON.users,
    myInfo: dataJSON.myInfo,
    userInput: ''
};

const userIsFavReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_IMG":{
            return (action.payload == true) ? <img src="../images/account-star.svg"/> : null;
        }
        case "SET_TXT":{
            if (action.payload == true){return ("Delete from Favorites")}
            else {return ("Add to Favorites")}
        }
        case "ADD_FAV":{
            console.log("called");
            let tempArr = state.users;
            tempArr[action.payload - 2].isFav = !tempArr[action.payload - 2].isFav;
            state = {
                users: tempArr
            };
            return state;
        }
        case "ADD_CON":{
            console.log("called");
            let tempArr = state.users;
            tempArr[action.payload - 2].isFriend = !tempArr[action.payload - 2].isFriend;
            state = {
                users: tempArr
            };
            return state;
        }
        default: {
            return state
        }
    }
};

export default userIsFavReducer;