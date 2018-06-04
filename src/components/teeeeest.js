import React from "react";
import {render} from "react-dom";
import { Route, Link, Switch } from 'react-router-dom';

export class TopBar extends React.Component{
    render(){
        return(
            <div className="topPanel">

                <div>
                    <div>
                        <input type="text" placeholder="Search for..." onChange={(event)=>this.onUserInput(event)}></input>
                        <button className="btn-primary" onClick={this.searchFor.bind(this)}>Search</button>
                    </div>
                    <div>
                        <p>People</p>
                        <Link to="/home-grid">
                            <img src="./images/view-grid.svg"/>
                        </Link>
                    </div>
                </div>
                <div>

                </div>

            </div>
        );
    }
}