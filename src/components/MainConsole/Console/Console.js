import React, { Component } from "react";
import axios from "axios";
import ConsoleSide from "../ConsoleSide/ConsoleSide";
import ConsoleCenter from "../ConsoleCenter/ConsoleCenter";

import "./Console.css";

class Console extends Component {
  constructor() {
    super();
    this.state = {
      currentScreen: "login",
      login: "",
      balance: 0,
      deposit: 0,
      withdraw: 0,
      cardToActivate: Math.floor(Math.random() * 6)
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      if (name === "login") {
        if (this.state.login.length === 4) {
          this.setState({
            currentScreen: "home"
          });
        }
      }
    });
  };

  handleClick = async e => {
    const { name } = e.target;
    if (name === "login") {
      this.setState({
        currentScreen: "login",
        login: "",
        balance: 0,
        deposit: 0,
        withdraw: 0,
        cardToActivate: Math.floor(Math.random() * 6)
      });
    }
    if (name === "balance") {
      const {
        data: { balance }
      } = await axios.get("/balance");
      this.setState({
        currentScreen: "balance",
        balance: balance
      });
    }
    if (name === "home") {
      this.setState({
        currentScreen: "home"
      });
    }
  };

  render() {
    const {
      pin,
      currentScreen,
      toDeposit,
      toWithdraw,
      balance,
      cardToActivate
    } = this.state;
    return (
      <div className="atm-machine-wrapper">
        <div className="sign-shade" />
        <div
          className="main-console"
          onClick={this.handleClick}
          onChange={this.handleChange}
        >
          <ConsoleSide currentScreen={currentScreen} side="left" />
          <ConsoleCenter
            currentScreen={currentScreen}
            toDeposit={toDeposit}
            toWithdraw={toWithdraw}
            balance={balance}
            pin={pin}
            cardToActivate={cardToActivate}
          />
          <ConsoleSide currentScreen={currentScreen} side="right" />
        </div>
      </div>
    );
  }
}

export default Console;
