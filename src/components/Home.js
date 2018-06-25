import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import dataJSON from '../data.json';

export class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>HOME</h1>
                <Link to="/people-grid"><button>{dataJSON.myInfo.surname}</button></Link>
            </div>
        );
    }
}