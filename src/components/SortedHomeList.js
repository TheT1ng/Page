import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import dataJSON from "../data.json";
import {UserList} from "./UserList";
import {TopPanel} from "./TopPanel";

export class SortedHomeList extends React.Component{
    constructor(){
        super();
        this.state= {
            userInput: '',
            users: dataJSON.users,
            myInfo: {name: dataJSON.myInfo.name,
                surname: dataJSON.myInfo.surname,
                city: dataJSON.myInfo.city
            }
        };
    }

    searchFor() {
        for (var i = 0; i < this.state.users.length; i++) {
            var tempObj = this.state.users;
            if (this.state.users[i].name.toLowerCase().indexOf(this.state.userInput.toLowerCase()) > -1){
                tempObj[i].name = tempObj[i].name.toUpperCase()
            }else if (this.state.users[i].surname.toLowerCase().indexOf(this.state.userInput.toLowerCase()) > -1){
                tempObj[i].surname = tempObj[i].surname.toUpperCase()
            }else if (this.state.users[i].city.toLowerCase().indexOf(this.state.userInput.toLowerCase()) > -1){
                tempObj[i].city = tempObj[i].city.toUpperCase()
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
        var tempObj = this.state.users;
        for (var i = 0; i < tempObj.length-1; i++) {
            tempObj[i].name = capitalizeFunc(tempObj[i].name);
            tempObj[i].city = capitalizeFunc(tempObj[i].city);
            tempObj[i].surname = capitalizeFunc(tempObj[i].surname);
        }
        this.setState({
            userInput: '',
            users: tempObj
        })
    }

    onUserInput(event){
        this.setState({
            userInput: event.target.value
        })
    }

    showUsers(){
        var tempArr = [];
        for(let j = 0; j < this.state.users.length; j++){
            (this.state.users[j].city == "Lviv")
                ? tempArr.push(<UserList key={this.state.users[j].id} user={this.state.users[j]} toShow={true}/>)
                : tempArr.push(<UserList key={this.state.users[j].id} user={this.state.users[j]} toShow={false}/>)
        }
        for(let j = 0; j < this.state.users.length; j++){
            (this.state.users[j].city == "Lviv")
                ? tempArr.push(<UserList key={this.state.users[j].id} user={this.state.users[j]} toShow={false}/>)
                : tempArr.push(<UserList key={this.state.users[j].id} user={this.state.users[j]} toShow={true}/>)
        }
        return(
            <ul className="list-unstyled">
                {tempArr.map(i =>{
                    return <li>{i}</li>
                })}
            </ul>
        )
    }

    render(){
        return(
            <div>
                <div id="homeWrapper">
                    <TopPanel
                        onUserInput = {this.onUserInput.bind(this)}
                        searchFor = {this.searchFor.bind(this)}
                        onCrossClick = {this.onCrossClick.bind(this)}
                    />
                    <hr/>
                    <div className="container-fluid gridContainer">
                        {this.showUsers()}
                    </div>
                </div>
            </div>
        );
    }
}