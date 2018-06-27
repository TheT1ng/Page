import dataJSON from "../data.json";
import {setUsers} from "../actions/actions";
import store from "../app/store";

export function addToFavorites(user){
    return function (dispatch){
        let tempArr = dataJSON.users;
        tempArr[tempArr.indexOf(user)].isFav = !tempArr[tempArr.indexOf(user)].isFav;
        dispatch(setUsers(tempArr));
    }
}

export function addToContacts(user){
    return function (dispatch){
        let tempArr = dataJSON.users;
        tempArr[tempArr.indexOf(user)].isFav = !tempArr[tempArr.indexOf(user)].isFav;
        dispatch(setUsers(tempArr));
    }
}

export function searchForFunc (val){
    var tempArr = dataJSON.users;
    store.dispatch(onCrossClick());
    for (var i = 0; i < dataJSON.users.length; i++) {
        if (tempArr[i].name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
            tempArr[i].name = tempArr[i].name.toUpperCase();
        } else if (tempArr[i].surname.toLowerCase().indexOf(val.toLowerCase()) > -1) {
            tempArr[i].surname = tempArr[i].surname.toUpperCase();
        } else if (tempArr[i].city.toLowerCase().indexOf(val.toLowerCase()) > -1) {
            tempArr[i].city = tempArr[i].city.toUpperCase();
        }
    }
    if(val === ''){store.dispatch(onCrossClick());}
    return function (dispatch){
        dispatch(setUsers(tempArr));
    }
}

export function onCrossClick() {
    var capitalizeFunc = function (string){
        string = string.toLowerCase();
        string = string.charAt(0).toUpperCase() + string.slice(1);
        return(string);
    };
    var tempArr = store.getState().GridReducer.users;
    for (var i = 0; i < tempArr.length-1; i++) {
        tempArr[i].name = capitalizeFunc(tempArr[i].name);
        tempArr[i].city = capitalizeFunc(tempArr[i].city);
        tempArr[i].surname = capitalizeFunc(tempArr[i].surname);
    }
    return function (dispatch){
        dispatch(setUsers(tempArr));
    }
}