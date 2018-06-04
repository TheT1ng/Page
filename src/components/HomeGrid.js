import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import dataJSON from "../data.json";

export class HomeGrid extends React.Component{
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
                                <Link to="/home-list">
                                    <img src="./images/format-list-bulleted.svg"/>
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
                        <div className="userCard col-md-3 text-center">
                            <div>
                                <img className="listImg" src="/images/black.png"/>
                            </div>
                            <div className="userInfo">
                                <p>Name Surname</p>
                                <p>City</p>
                            </div>
                            <div className="socNetworks">
                                <div><Link to="https://www.facebook.com/profile.php?id=100013864786991"><img src="/images/facebook.svg"/></Link></div>
                                <div><Link to="#"><img src="/images/twitter.svg"/></Link></div>
                                <div><Link to="#"><img src="/images/google-plus.svg"/></Link></div>
                                <div><Link to="#"><img src="/images/skype.svg"/></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>
        );
    }
}