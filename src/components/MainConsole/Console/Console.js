import React, { Component } from "react";

import ConsoleSide from '../ConsoleSide/ConsoleSide';
import ConsoleCenter from '../ConsoleCenter/ConsoleCenter';

import "./Console.css";

class Console extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="atm-machine-wrapper">
                <div className="sign-shade" />
                <div className="main-console" >
                    <ConsoleSide />
                    <ConsoleCenter />
                    <ConsoleSide />
                </div>
            </div>
        )
    }

}

export default Console;