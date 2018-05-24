import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';

export class HomeGrid extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div id="homeWrapper">
                <div className="topPanel">
                    <Link to="/home-list">
                        <img src="./images/format-list-bulleted.svg"/>
                    </Link>
                </div>
                <div className="container-fluid gridContainer">
                    <div className="row">
                        <div className="userCard col-md-3 text-center">
                            <div>
                                <img className="listImg" src="/images/black.png"/>
                            </div>
                            <div className="userInfo">
                                <p>Name Surname</p>
                                <p>City</p>
                            </div>
                            <ul className="list-inline socNetworks">
                                <li><Link to="https://www.facebook.com/profile.php?id=100013864786991"><img src="/images/facebook.svg"/></Link></li>
                                <li><img src="/images/twitter.svg"/></li>
                                <li><img src="/images/google-plus.svg"/></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-center">
                            <div>
                                <img className="listImg" src="/images/black.png"/>
                            </div>
                            <div className="userInfo">
                                <p>Name Surname</p>
                                <p>City</p>
                            </div>
                            <ul className="list-inline socNetworks">
                                <li><Link to="https://www.facebook.com/profile.php?id=100013864786991"><img src="/images/facebook.svg"/></Link></li>
                                <li><img src="/images/twitter.svg"/></li>
                                <li><img src="/images/google-plus.svg"/></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-center">
                            <div>
                                <img className="listImg" src="/images/black.png"/>
                            </div>
                            <div className="userInfo">
                                <p>Name Surname</p>
                                <p>City</p>
                            </div>
                            <ul className="list-inline socNetworks">
                                <li><Link to="https://www.facebook.com/profile.php?id=100013864786991"><img src="/images/facebook.svg"/></Link></li>
                                <li><img src="/images/twitter.svg"/></li>
                                <li><img src="/images/google-plus.svg"/></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-center">
                            <div>
                                <img className="listImg" src="/images/black.png"/>
                            </div>
                            <div className="userInfo">
                                <p>Name Surname</p>
                                <p>City</p>
                            </div>
                            <ul className="list-inline socNetworks">
                                <li><Link to="https://www.facebook.com/profile.php?id=100013864786991"><img src="/images/facebook.svg"/></Link></li>
                                <li><img src="/images/twitter.svg"/></li>
                                <li><img src="/images/google-plus.svg"/></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <div>
                                <img className="listImg" src="/images/black.png"/>
                            </div>
                            <div className="userInfo">
                                <p>Name Surname</p>
                                <p>City</p>
                            </div>
                            <ul className="list-inline socNetworks">
                                <li><Link to="https://www.facebook.com/profile.php?id=100013864786991"><img src="/images/facebook.svg"/></Link></li>
                                <li><img src="/images/twitter.svg"/></li>
                                <li><img src="/images/google-plus.svg"/></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-center">
                            <div>
                                <img className="listImg" src="/images/black.png"/>
                            </div>
                            <div className="userInfo">
                                <p>Name Surname</p>
                                <p>City</p>
                            </div>
                            <ul className="list-inline socNetworks">
                                <li><Link to="https://www.facebook.com/profile.php?id=100013864786991"><img src="/images/facebook.svg"/></Link></li>
                                <li><img src="/images/twitter.svg"/></li>
                                <li><img src="/images/google-plus.svg"/></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-center">
                            <div>
                                <img className="listImg" src="/images/black.png"/>
                            </div>
                            <div className="userInfo">
                                <p>Name Surname</p>
                                <p>City</p>
                            </div>
                            <ul className="list-inline socNetworks">
                                <li><Link to="https://www.facebook.com/profile.php?id=100013864786991"><img src="/images/facebook.svg"/></Link></li>
                                <li><img src="/images/twitter.svg"/></li>
                                <li><img src="/images/google-plus.svg"/></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-center">
                            <div>
                                <img className="listImg" src="/images/black.png"/>
                            </div>
                            <div className="userInfo">
                                <p>Name Surname</p>
                                <p>City</p>
                            </div>
                            <ul className="list-inline socNetworks">
                                <li><Link to="https://www.facebook.com/profile.php?id=100013864786991"><img src="/images/facebook.svg"/></Link></li>
                                <li><img src="/images/twitter.svg"/></li>
                                <li><img src="/images/google-plus.svg"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}