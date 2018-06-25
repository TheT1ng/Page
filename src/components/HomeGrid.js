import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import dataJSON from "../data.json";
import {TopPanel} from "./TopPanel";
import {UserGrid} from "./UserGrid";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setImg} from "../actions/isFavActions";
import {setTxt} from "../actions/isFavActions";
import {addToFav} from "../actions/addToActions";
import {addToCon} from "../actions/addToActions";

class HomeGrid extends React.Component {
    searchFor(val) {
        this.onCrossClick();
        for (var i = 0; i < this.props.userIsFav.users.length; i++) {
            var tempObj = this.props.userIsFav.users;
            if (this.props.userIsFav.users[i].name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                tempObj[i].name = tempObj[i].name.toUpperCase();
            } else if (this.props.userIsFav.users[i].surname.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                tempObj[i].surname = tempObj[i].surname.toUpperCase();
            } else if (this.props.userIsFav.users[i].city.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                tempObj[i].city = tempObj[i].city.toUpperCase();
            }
            this.setState({
                users: tempObj
            })
        }
    }

    onCrossClick(){
        var capitalizeFunc = function (string){
            string = string.toLowerCase();
            string = string.charAt(0).toUpperCase() + string.slice(1);
            return(string);
        };
        var tempObj = this.props.userIsFav.users;
        for (var i = 0; i < tempObj.length-1; i++) {
            tempObj[i].name = capitalizeFunc(tempObj[i].name);
            tempObj[i].city = capitalizeFunc(tempObj[i].city);
            tempObj[i].surname = capitalizeFunc(tempObj[i].surname);
        }
        this.setState({
            users: tempObj
        })
    }

    onUserInput(event){
        var val = event.target.value;
        console.log(val);
        this.searchFor(val);
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
        console.log(users);
        for(let j = 0; j < users.length; j++){
            compArr.push(<UserGrid
                key={users[j].id}
                user={users[j]}
                addToFav = {this.props.addToFavF.bind(this)}
                addToCon = {this.props.addToConF.bind(this)}
                userIsFavImg = {this.props.setImgF.bind(this)}
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
                    searchFor={this.searchFor.bind(this)}
                    onCrossClick={this.onCrossClick.bind(this)}
                    userInput={this.props.userIsFav.userInput}
                />
                <hr/>

                <div className="container-fluid gridContainer">
                    {this.showUsers(this.props.userIsFav.users)}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userIsFav: state.userIsFavReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTxtF: bindActionCreators(setTxt, dispatch),
        setImgF: bindActionCreators(setImg, dispatch),
        addToFavF: bindActionCreators(addToFav, dispatch),
        addToConF: bindActionCreators(addToCon, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeGrid);