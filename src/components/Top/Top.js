import React from "react";
import atmSign from "../../assets/atm_sign.png";
import graffiti from "../../assets/graffiti.png";

import "./Top.css";

export default function Top() {
  return (
    <div className="atm-sign-wrapper">
      <img src={atmSign} alt="atm sign" className="atm-sign" />
      <img src={graffiti} alt="graffiti" className="graffiti" />
    </div>
  );
}
