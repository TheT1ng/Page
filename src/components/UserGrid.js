import React from "react";
import {render} from "react-dom";
import { Route, Link, Switch } from 'react-router-dom';
import dataJSON from "../data.json";
import store from "../app/store";

export class UserGrid extends React.Component{
    buttonsShow(user){
        var deleteStyle = {
            color: "red",
            border: "1px solid red"
        };
        if(user.isFriend){
            if(user.isFav){
                return <ul className="linkContainer list-unstyled text-center">
                    <li><button onclick={() => this.props.addToCon(user.id)} style={deleteStyle}>{this.addToContactsTxt(user)}</button></li>
                    <li><button style={deleteStyle} onClick={() => this.props.addToFav(user.id)}>Delete from Favorites</button></li>
                </ul>
            }else {
                return <ul className="linkContainer list-unstyled text-center">
                    <li><button style={deleteStyle}>{this.addToContactsTxt(user)}</button></li>
                    <li><button onClick={() => this.props.addToFav(user.id)}>Add to Favorites</button></li>
                </ul>
            }
        }else {
            return <ul className="linkContainer list-unstyled text-center">
                <li><button onClick={() => this.props.addToCon(user.id)}>{this.addToContactsTxt(user)}</button></li>
            </ul>
        }
    }

    addToContactsTxt(user){
        return (user.isFriend == true) ? "Delete from Contacts" : "Add to Contacts";
    }

    userIsFavImg(isFav){
        return (isFav == true) ? <img src="../images/account-star.svg"/> : null;
    }

    showSocNetworks(user){
        var networksArr = ["skype", "facebook", "twitter", "google-plus"];
        return(
            <div className="socNetworks">
                {
                    user.map(function(currentVal, index){
                        if(currentVal){
                            return(
                                <div>
                                    <Link to="#">
                                        <img src={"./images/" + networksArr[index] + ".svg"}/>
                                    </Link>
                                </div>
                            );
                        }
                    })
                }
            </div>
        );
    }

    render(){
        return(
            <div>
                <div className="userAvatarWrapper">
                    <div>
                        <img className="listImg" src="/images/black.png"/>
                    </div>
                    <div className="imgNest">
                        {this.userIsFavImg(this.props.user.isFav)}
                    </div>
                </div>
                <div className="userInfo">
                    <p>{this.props.user.name + ' ' + this.props.user.surname}</p>
                    <p>{this.props.user.city}</p>
                </div>
                {this.showSocNetworks(this.props.user.socNetworks)}
                <div>
                    {this.buttonsShow(this.props.user)}
                </div>
            </div>
        );
    }
}



