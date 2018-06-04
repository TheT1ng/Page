import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import dataJSON from "../data.json";
import {UserList} from "./UserList";

export class ComponentShow extends React.Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}