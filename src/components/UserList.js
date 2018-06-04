import React from "react";
import {render} from "react-dom";
import dataJSON from "../data.json";

export class UserList extends React.Component{

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
                    <p>{dataJSON.users[0].name}</p>
                    <p>{dataJSON.users[0].surname}</p>
                    <p>{dataJSON.users[0].city}</p>
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
        );
    }
}