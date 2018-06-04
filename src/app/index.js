import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import dataJSON from "../data.json";

import {HomeGrid} from "../components/HomeGrid";
import {HomeList} from "../components/HomeList";
import {Navigation} from "../components/Navigation";
import {Combination} from "../components/Combination";

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={HomeGrid}/>
                        <Combination>
                            <Route path="/home-list" component={HomeList}/>
                            <Route path="/home-grid" component={HomeGrid}/>
                        </Combination>
                    </Switch>
                </div>
            </Router>
    );
    }
}

render(<App/>, window.document.getElementById("root"));
