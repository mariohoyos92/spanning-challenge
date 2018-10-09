import React from 'react';

import "./ConsoleSide.css"
export default function ConsoleSide({ side, currentScreen }) {
    const choices = {
        left: {
            login: { one: "", two: "", three: "", four: "" },
            home: { one: "", two: "", three: "withdraw", four: "deposit" },
            balance: { one: "", two: "", three: "", four: "home" }
        },
        right: {
            login: { one: "", two: "", three: "", four: "" },
            home: { one: "", two: "", three: "balance", four: "login" },
            balance: { one: "", two: "", three: "", four: "login" }
        }
    }

    return (<div className="console">
        <button name={choices[side][currentScreen].one}></button>
        <button name={choices[side][currentScreen].two}></button>
        <button name={choices[side][currentScreen].three}></button>
        <button name={choices[side][currentScreen].four}></button>
    </div>)
}