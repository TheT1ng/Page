import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';

export class Navigation extends React.Component{
    constructor(){
        super();
        this.state= {
            myInfo: {
                name: "Black",
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
                    <p className="text-center">{ this.state.myInfo.name + ' ' + this.state.myInfo.surname }</p>
                    <p className="text-center">{ this.state.myInfo.city }</p>
                </div>
                <div className="navLinks">
                    <ul className="list-unstyled">
                        <li>
                            <Link to="/">
                                <img src="../images/home-outline.svg" className="navImgs" />
                                <p className="navTxts">HOME</p>
                            </Link>
                        </li>
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
                        <li>
                            <Link to="/">
                                <img src="../images/home-outline.svg" className="navImgs" />
                                <p className="navTxts">PEOPLE</p>
                            </Link>
                        </li>
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