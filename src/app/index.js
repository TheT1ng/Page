import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import dataJSON from "../data.json";
import {Provider} from "react-redux";
import store from "./store";

import HomeGrid from "../components/HomeGrid";
import {HomeList} from "../components/HomeList";
import {Navigation} from "../components/Navigation";
import {Combination} from "../components/Combination";
import {SortedHomeList} from "../components/SortedHomeList"
import {Home} from "../components/Home";

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Combination>
                            <Route path="/home" render={() => <Home />}/>
                            <Route path="/people-list" component={HomeList}/>
                            <Route path="/people-grid" component={HomeGrid}/>
                            <Route path="/people-list-location" component={SortedHomeList}/>
                        </Combination>
                    </Switch>
                </div>
            </Router>
    );
    }
}

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    window.document.getElementById("root"));