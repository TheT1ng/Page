import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import dataJSON from "../data.json";
import {TopPanel} from "./TopPanel";
import {UserGrid} from "./UserGrid";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import store from "../app/store";
import * as GridReducerFunctions from "../functions/GridReducerFuncs";

class HomeGrid extends React.Component {
    onUserInput(event){
        var val = event.target.value;
        store.dispatch(GridReducerFunctions.searchForFunc(val));
    }

    showOneRow(componentsArray, index){
        componentsArray = componentsArray.slice(index, index + 4);
        return(
            <div className="row">
                {
                    componentsArray.map(currentElement => {
                        return <div className="userCard col-md-3 text-center">{currentElement}</div>
                    })
                }
                <hr/>
            </div>
        );
    }

    showUsers(users){
        var compArr = [], indexArr = [];
        for(let j = 0; j < users.length; j++){
            compArr.push(<UserGrid
                key={users[j].id}
                user={users[j]}
                addToCon = {GridReducerFunctions.addToContacts.bind(this)}
                addToFav = {GridReducerFunctions.addToFavorites.bind(this)}
            />);
            if(j % 4 == 0){indexArr.push(j);}
        }
        return(
            <div>
                {
                    indexArr.map((currentElement) => {
                        return (
                            <div>
                                {this.showOneRow(compArr, currentElement)}
                            </div>
                        );
                    })
                }
            </div>
        )
    }

    render(){
        return(
            <div id="homeWrapper">
                <TopPanel
                    onUserInput={this.onUserInput.bind(this)}
                    onCrossClick = {GridReducerFunctions.onCrossClick.bind(this)}
                    userInput={store.getState().GridReducer.userInput}
                />
                <hr/>

                <div className="container-fluid gridContainer">
                    {this.showUsers(store.getState().GridReducer.users)}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userIsFav: state.GridReducer
    };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeGrid);