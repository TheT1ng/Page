import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import dataJSON from '../data.json';

export class Navigation extends React.Component{
    constructor(){
        super();
        this.state= {
            myInfo: dataJSON.myInfo
        };
    }

    peopleLink(){
        var liStyles = {
            position: "relative",
            width: "104%",
            background: "linear-gradient(#046F9B, #34BDF0, #046F9B)"
        };
        var divStyles = {
            content: '',
            position: 'absolute',
            width: '0',
            height: '0',
            borderStyle: 'solid',
            borderWidth: '10px 0 0 14px',
            borderColor: 'transparent transparent transparent #046F9B',
            top: '412px',
            left: '100%'
        };
        var li = document.getElementById("aaaa");
        if(window.location.href.indexOf("/people") != -1){
            return(
                <Link to="/people-grid">
                    <li style={liStyles}>
                        <img src="../images/home-outline.svg" className="navImgs" />
                        <p className="navTxts">PEOPLE</p>
                    </li>
                    <div style={divStyles}></div>
                </Link>
            );
        }else{
            return(
                <Link to="/people-grid">
                    <li>
                        <img src="../images/home-outline.svg" className="navImgs" />
                        <p className="navTxts">PEOPLE</p>
                    </li>
                </Link>
            );
        }
    }

    render(){
        return(
            <div id="navWrapper">
                <div className="imgWrapper">
                    <img src="/images/black.png" className="img-fluid"/>
                </div>
                <div className="infoWrapper">
                    <p className="text-center">{ this.state.myInfo.name + ' ' + this.state.myInfo.surname }</p>
                    <p className="text-center">{ this.state.myInfo.city }</p>
                </div>
                <div className="navLinks">
                    <ul className="list-unstyled">
                        <Link to="/home">
                            <li>
                                <img src="../images/home-outline.svg" className="navImgs" />
                                <p className="navTxts">HOME</p>
                            </li>
                        </Link>
                        <li>
                            <Link to="/">
                                <img src="../images/notebook.svg" className="navImgs" />
                                <p className="navTxts">CONTACTS</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <img src="../images/home-outline.svg" className="navImgs" />
                                <p className="navTxts">FAVORITES</p>
                            </Link>
                        </li>
                            {this.peopleLink()}
                        <li>
                            <Link to="/">
                                <img src="../images/home-outline.svg" className="navImgs" />
                                <p className="navTxts">COMPANIES</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="linksOut">
                    <ul className="list-unstyled">
                        <li>
                            <Link to="/">
                                <img src="../images/settings-outline.svg" className="outImgs" />
                                <p className="outTxts">SETTINGS</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <img src="../images/logout.svg" className="outImgs" />
                                <p className="outTxts">SIGN OUT</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}