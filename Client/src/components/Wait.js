import React from "react";
import "../App.css";

function Wait({ roomId }) {
  return (
    <>
      <div className="wait">
        <div>Room id:</div>
        <div style={{ fontWeight: "bold", textDecoration: "underline" }}>
          {roomId}
        </div>
        <div style={{ fontSize: "1rem", marginTop: "40px" }}>
          Share this with your friend to start the game!
        </div>
      </div>
      ;
    </>
  );
}

export default Wait;
