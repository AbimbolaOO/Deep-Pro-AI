import React from "react";
import circular from "./../img/Circular-con.png";

export default function Ourteam() {
  return (
    <div className="team-area">
      <h2>Meet our team </h2>
      <div className="team-images">
        <img className="team-member" src={circular} alt="Temitope Adebiyi" />
        <img className="team-member" src={circular} alt="Olayemi Abimbola" />
      </div>
    </div>
  );
}
