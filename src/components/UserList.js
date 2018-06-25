import React from "react";
import {render} from "react-dom";
import dataJSON from "../data.json";

export class UserList extends React.Component{
    addToFav(id){
        var arr = dataJSON.users;
        arr[dataJSON.users.indexOf(id)].isFav = !arr[dataJSON.users.indexOf(id)].isFav;
        this.setState({users: arr});
    }

    userIsFavTxt(isFav){
        return (isFav == true) ? "Delete from Favorites" : "Add to Favorites";
    }

    userIsFavImg(isFav){
        return (isFav == true) ? <img src="../images/account-star.svg"/> : null;
    }

    isComponentToShow(toShow){
        if(toShow == true){
            return(
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-2">
                        <div className="imgNest">
                            <img className="listImg" src="/images/black.png"/>
                        </div>
                        <div className="imgNest">
                            {this.userIsFavImg(this.props.user.isFav)}
                        </div>
                    </div>
                    <div className="text-center col-md-3 textContainer">
                        <p>{this.props.user.name}</p>
                        <p>{this.props.user.surname}</p>
                        <p>{this.props.user.city}</p>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-3">
                        <ul className="linkContainer list-unstyled text-center">
                            <li><button onClick={() => this.addToFav(this.props.user)}>{this.userIsFavTxt(this.props.user.isFav)}</button></li>
                            <li><button>Send message</button></li>
                            <li><button>Check page</button></li>
                            <li><button>Unfriend</button></li>
                        </ul>
                    </div>
                    <hr/>
                </div>
            );
        }else {return <div></div>}
    }

    render(){
        return(
            <div>
                {this.isComponentToShow(this.props.toShow)}
            </div>
        );
    }
}