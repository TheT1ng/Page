import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import dataJSON from "../data.json";
import {UserList} from "./UserList";
import {ComponentShow} from "./ComponentShow";

export class HomeList extends React.Component{
    constructor(){
        super();
        this.state= {
            userInput: '',

            testArray: [1,2,4,5,6,6,43,345,236,2],

            users: dataJSON.users,
            myInfo: {name: "Black",
                surname: "Circle",
                city: "Lviv"
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

    onUserInput(event){
        this.setState({
            userInput: event.target.value
        })
    }

    addToFav(id){
        var arr = dataJSON.users;
        arr[id].isFav = !arr[id].isFav;
        this.setState({users: arr});
    }

    userIsFavTxt(id){
        return (dataJSON.users[id].isFav == true) ? "Delete from Favs" : "Add to Favs";
    }

    userIsFavImg(id){
        if (dataJSON.users[id].isFav == true)
            return(<img src="../images/account-star.svg"/>)
    }

    render(){
        return(
            <div id="homeWrapper">
                <div className="topPanel">

                    <div className="panelLeft">
                        <div className="leftTop">
                            <button>
                                <img src="./images/close.svg"/>
                            </button>
                            <div className="inputWrapper">
                                <img src="./images/magnify.svg"/>
                                <input type="text" placeholder="Search..." onChange={(event)=>this.onUserInput(event)}></input>
                            </div>
                            <button className="btn-primary" onClick={this.searchFor.bind(this)}>Search</button>
                        </div>
                        <div className="leftBottom">
                            <div>People</div>
                            <div>
                                <Link to="/home-grid">
                                    <img src="./images/view-grid.svg"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="panelRight">
                        <div className="rightTop">
                            <div className="topTxts">
                                <p className="text-right">Welcome,</p>
                                <p className="text-right">{dataJSON.myInfo.name + ' ' + dataJSON.myInfo.surname}</p>
                            </div>
                            <div>
                                <img src="./images/biohazard.svg"/>
                            </div>
                        </div>
                        <div className="rightBottom">
                            <div>
                                <img src="./images/map-marker.svg"/>
                            </div>
                            <div className="dropdown">
                                asdasdasd
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="container-fluid gridContainer">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div id="navWrapper" className="col-md-2">
                            <div className="imgNest">
                                <img className="listImg" src="/images/black.png"/>
                            </div>
                            <div className="imgNest">
                                {this.userIsFavImg(0)}
                            </div>
                        </div>
                        <div className="text-center col-md-3 textContainer">
                            <p>{this.state.users[0].name}</p>
                            <p>{this.state.users[0].surname}</p>
                            <p>{this.state.users[0].city}</p>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-3">
                            <ul className="linkContainer list-unstyled text-center">
                                <li><button onClick={() => this.addToFav(0)}>{this.userIsFavTxt(0)}</button></li>
                                <li><button>Send message</button></li>
                                <li><button>Check page</button></li>
                                <li><button>Unfriend</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}