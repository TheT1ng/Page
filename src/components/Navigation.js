import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';

export class Navigation extends React.Component{
    constructor(){
        super();
        this.state= {
            myInfo: {name: "Black",
                surname: "Circle",
                city: "Lviv"
            }};
    }
    render(){
        return(
            <div id="navWrapper">
                <div className="imgWrapper">
                    <img src="/images/black.png" className="img-fluid"/>
                </div>
                <div className="infoWrapper">
                    <p className="text-center"> {this.state.myInfo.name + ' ' + this.state.myInfo.surname} </p>
                    <p className="text-center">{this.state.myInfo.city}</p>
                </div>
                <div className="navLinks">
                    <ul className="list-unstyled text-center">
                        <Link to="/"><li>HOME</li></Link>
                        <a href="#"><li>LINK</li></a>
                        <a href="#"><li>LINK</li></a>
                        <a href="#"><li>LINK</li></a>
                    </ul>
                </div>
                <userData/>
            </div>
        );
    }
}