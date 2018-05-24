import React from "react";
import { Route, Link, Switch } from 'react-router-dom';

import {HomeGrid} from "./HomeGrid";
import {HomeList} from "./HomeList";
import {Navigation} from "./Navigation";

export class Combination extends React.Component{
    render(){
        return(
            <div className="appWrapper">
                <div className="navSector">
                    <Navigation/>
                </div>
                <div className="homeSector">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
