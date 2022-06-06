import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";

import { AppContext } from "./Game";

function Keyboard({ usedKeys }) {
  const { onDelete, onEnter, onSelectLetter } = useContext(AppContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      keys1.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          onSelectLetter(key);
          return;
        }
      });
      keys2.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          onSelectLetter(key);
          return;
        }
      });
      keys3.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          onSelectLetter(key);
          return;
        }
      });
    }
  });

  // Handle Keyboard Events in React
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  const getLetterPos = (word) => {
    return word.charCodeAt(0) - "A".charCodeAt(0);
  };

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key) => {
          return <Key value={key} color={usedKeys[getLetterPos(key)]} />;
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return <Key value={key} color={usedKeys[getLetterPos(key)]} />;
        })}
      </div>
      <div className="line3">
        <Key value={"Enter"} bigKey={true} />
        {keys3.map((key) => {
          return <Key value={key} color={usedKeys[getLetterPos(key)]} />;
        })}
        <Key value={"Delete"} bigKey={true} />
      </div>
    </div>
  );
}

export default Keyboard;
