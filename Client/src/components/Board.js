import React from "react";
import Letter from "./Letter";

function Board({ board, evaluations }) {
  if (!board) {
    board = new Array(6).fill(new Array(5).fill(""));
  }
  return (
    <div className="board">
      {board.map((row, i) => (
        <div className="row">
          {row.map((l, j) => (
            <Letter
              value={board[i][j]}
              color={evaluations && evaluations[i] ? evaluations[i][j] : ""}
            ></Letter>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
