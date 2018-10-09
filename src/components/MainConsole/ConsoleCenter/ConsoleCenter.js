import React from 'react';

import spanningSystems from '../../../assets/spanning_systems.png'
import stickerGraf from "../../../assets/sticker_graf.png"

import "./ConsoleCenter.css"

export default function ConsoleCenter() {
    return (<div className="console-center">
        <figure className="sprite-wrapper" />
        <div className="screen">
            <h1 className="display">Please Enter Your Pin</h1>
            <input type="password" name="pin" id="pin" />
        </div>
        <img src={spanningSystems} alt="spanning systems logo" id="spanning-systems-logo" />
        <img src={stickerGraf} alt="sticker" id="sticker-graffiti" />
    </div>)
}