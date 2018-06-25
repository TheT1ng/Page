import React from "react";
import { Route, Link, Switch } from 'react-router-dom';

import {Navigation} from "./Navigation";

export const Combination = (props) => {
    return(
        <div className="appWrapper">
            <div className="navSector">
                <Navigation/>
            </div>
            <div className="homeSector">
                {props.children}
            </div>
        </div>
    );
};
