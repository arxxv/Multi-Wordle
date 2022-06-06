import React from "react";
import "../App.css";

function Scores({ score1, score2, fdir }) {
  return (
    <div
      className="score"
      style={{
        flexDirection: fdir,
        alignItems: fdir == "row" ? "flex-start" : "center",
      }}
    >
      <div className="whiteboard" style={{ margin: "10px", fontSize: "2rem" }}>
        {score1}
      </div>
      <div className="whiteboard" style={{ margin: "10px", fontSize: "2rem" }}>
        {score2}
      </div>
    </div>
  );
}

export default Scores;
