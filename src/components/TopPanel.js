import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import dataJSON from "../data.json";
import {UserList} from "./UserList";
import {HomeList} from "./HomeList";
import {SortedHomeList} from "./SortedHomeList"

export class TopPanel extends React.Component{
    locationSortButton(){
        if(window.location.href == "http://localhost:3000/people-list-location")
        {
            return(
                <div>
                    <Link to="/people-list">
                        <button className="locationSort">
                            Ukraine, {dataJSON.myInfo.city}
                        </button>
                    </Link>
                    <div className="listArrow" >
                        <img
                            style={{transform: "rotate(180deg)"}}
                            src="./images/chevron-up.svg"/>
                    </div>
                </div>
            );
        }else{
            return(
                <div>
                    <Link to="/people-list-location">
                        <button className="locationSort">
                            Ukraine, {dataJSON.myInfo.city}
                        </button>
                    </Link>
                    <div className="listArrow" >
                        <img style={{transform: "rotate(0deg)"}} src="./images/chevron-up.svg"/>
                    </div>
                </div>
            );
        }
    }

    viewChangers(){
        return(
            <div className="viewChangersWrapper">
                <div class="viewChangers">
                    <Link to="/people-grid">
                        <img src="./images/view-grid.svg"/>
                        <Route path="/people-grid"/>
                    </Link>
                </div>
                <div class="viewChangers">
                    <Link to="/people-list">
                        <img src="./images/format-list-bulleted.svg"/>
                        <Route path="/people-list"/>
                    </Link>
                </div>
            </div>
        );
    }

    render(){
        return(
            <div className="topPanel">
                <div className="panelLeft">
                    <div className="leftTop">
                        <button onClick={this.props.onCrossClick}>
                            <img src="./images/close.svg"/>
                        </button>
                        <div className="inputWrapper">
                            <img src="./images/magnify.svg"/>
                            <input
                                id="searchInputField"
                                type="text"
                                placeholder="Search..."
                                value={this.props.userInput}
                                onChange={(event) => this.props.onUserInput(event)}
                            >
                            </input>
                        </div>
                    </div>
                    <div className="leftBottom">
                        <div>People</div>
                        <div>
                            {this.viewChangers()}
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
                        <div>
                            {this.locationSortButton()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}