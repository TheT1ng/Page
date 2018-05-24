import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
//import {user1} from "./users/user1";

export class HomeList extends React.Component{
    constructor(){
        super();
        this.state= {
            userInput: '',

            testArray: [1,2,4,5,6,6,43,345,236,2],

            users:[
            {id:2, name:"Zulu", surname:"First", city:"Lviv", isFav:false},
            {id:3, name:"Zulu", surname:"Second", city:"London", isFav:false},
            {id:4, name:"Zulu", surname:"Third", city:"Paris", isFav:false},
            {id:5, name:"Zulu", surname:"Forth", city:"Berlin", isFav:false},
            {id:6, name:"Zulu", surname:"Fifth", city:"Berlin", isFav:false},
            {id:7, name:"Zulu", surname:"Sixth", city:"Lviv", isFav:false},
            {id:8, name:"Zulu", surname:"Seventh", city:"Lviv", isFav:false}
        ],
            myInfo: {name: "Black",
                surname: "Circle",
                city: "Lviv"
            }};
    }

    /*userShow(){
        this.state.users.forEach( function(){
            return(
                <user data={this.state.users[index]} />
            )
        })
    }*/

    addToFav(id){
        var arr = this.state.users
        if(arr[id].isFav == false){arr[id].isFav=true; this.setState({users: arr})}
            else {arr[id].isFav=false; this.setState({users: arr})}
    }

    userIsFavTxt(id){
        if (this.state.users[id].isFav == true){return("Delete from Favs")}
        else {return("Add to Favs")}
    }

    userIsFavImg(id){
        if (this.state.users[id].isFav == true){return(<img src="../images/account-star.svg"/>)}}

    onUserInput(event){
        this.setState({
            userInput: event.target.value
        })
    }

    searchFor() {
        for (var i = 0; i < this.state.users.length; i++) {
            var tempObj = this.state.users
            if (this.state.users[i].name == this.state.userInput){
                tempObj[i].name = tempObj[i].name.toUpperCase()
            }else if (this.state.users[i].surname == this.state.userInput){
                tempObj[i].surname = tempObj[i].surname.toUpperCase()
            }else if (this.state.users[i].city == this.state.userInput){
                tempObj[i].city = tempObj[i].city.toUpperCase()
            }
            this.setState({
                users: tempObj
            })
        }
    }

    render(){
        return(
            <div id="homeWrapper">
                <div className="topPanel">
                    <Link to="/home-grid">
                        <img src="./images/view-grid.svg"/>
                    </Link>
                    <input type="text" placeholder="Search for..." onChange={(event)=>this.onUserInput(event)}></input>
                    <button className="btn-primary" onClick={this.searchFor.bind(this)}>Search</button>
                </div>
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
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div id="navWrapper" className="col-md-2">
                            <div className="imgNest">
                                <img className="listImg" src="/images/black.png"/>
                            </div>
                            <div className="imgNest">
                                {this.userIsFavImg(1)}
                            </div>
                        </div>
                        <div className="text-center col-md-3 textContainer">
                            <p>{this.state.users[1].name}</p>
                            <p>{this.state.users[1].surname}</p>
                            <p>{this.state.users[1].city}</p>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-3">
                            <ul className="linkContainer list-unstyled text-center">
                                <li><button onClick={() => this.addToFav(1)}>{this.userIsFavTxt(1)}</button></li>
                                <li><button>Send message</button></li>
                                <li><button>Check page</button></li>
                                <li><button>Unfriend</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div id="navWrapper" className="col-md-2">
                            <div className="imgNest">
                                <img className="listImg" src="/images/black.png"/>
                            </div>
                            <div className="imgNest">
                                {this.userIsFavImg(2)}
                            </div>
                        </div>
                        <div className="text-center col-md-3 textContainer">
                            <p>{this.state.users[2].name}</p>
                            <p>{this.state.users[2].surname}</p>
                            <p>{this.state.users[2].city}</p>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-3">
                            <ul className="linkContainer list-unstyled text-center">
                                <li><button onClick={() => this.addToFav(2)}>{this.userIsFavTxt(2)}</button></li>
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