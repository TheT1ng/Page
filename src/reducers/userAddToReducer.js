import dataJSON from "../data.json";

const initialState = {
    users: dataJSON.users,
    myInfo: dataJSON.myInfo,
    userInput: ''
};

const userAddToReducer = (state = initialState, action) => {
    switch (action.type){
        default: {
            return state
        }
    }
};

export default userAddToReducer;