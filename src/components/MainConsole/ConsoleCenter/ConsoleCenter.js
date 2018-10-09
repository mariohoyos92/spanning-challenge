import React from 'react';

import spanningSystems from '../../../assets/spanning_systems.png'
import stickerGraf from "../../../assets/sticker_graf.png"

import "./ConsoleCenter.css"

export default function ConsoleCenter({ currentScreen, balance, cardToActivate }) {
    const headers = {
        login: "Please Enter Your Pin",
        withdraw: "Amount To Withdraw",
        deposit: "Amount To Deposit",
        balance: "Balance: ",
        home: "Please make a choice..."
    };

    const renderScreen = () => {
        switch (currentScreen) {
            case "login":
                return (<div className="screen">
                    <h1 className="display">{headers[currentScreen]}</h1>
                    {
                        <input type="password" name={currentScreen} />
                    }
                </div>)
            case "withdraw":
            case "deposit":
                return (<div className="screen">
                    <h1 className="display">{headers[currentScreen]}</h1>
                    {
                        <input type="number" name={currentScreen} />
                    }
                </div>)
            case "home":
                return (<div className="screen"> <h1 className="display">{headers[currentScreen]}</h1><div className="choices-wrapper"><div className="choices"><p>Withdraw</p><p>Deposit</p></div><div className="choices right" ><p>Balance</p><p>Re-Enter Pin</p></div></div> </div >);
            case "balance":
                return (<div className="screen"><h1 className="display">{headers[currentScreen]}</h1>
                    <p>{balance}</p>
                    <div className="choices-wrapper">
                        <div className="choices"><p>Home</p></div> <div className="choices right" ><p>Exit</p></div></div >
                </div >
                )
            default:
                break;
        }

    }

    return (<div className="console-center">
        {currentScreen !== "login" &&
            <div className="color-changer">
                {Array.apply(null, Array(6)).map((item, i) => <div className={`filter ${cardToActivate === i + 1 ? '' : "inactive"}`} />)}
            </div>}
        <figure className="sprite-wrapper" />
        {renderScreen()}
        <img src={spanningSystems} alt="spanning systems logo" id="spanning-systems-logo" />
        <img src={stickerGraf} alt="sticker" id="sticker-graffiti" />
    </div >)
}