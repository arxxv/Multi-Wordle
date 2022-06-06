import React, { useContext } from "react";
import { AppContext } from "./Game";

function Key({ value, bigKey, color }) {
  const { onDelete, onEnter, onSelectLetter } = useContext(AppContext);
  const selectLetter = () => {
    if (value === "Enter") {
      onEnter();
    } else if (value === "Delete") {
      onDelete();
    } else {
      onSelectLetter(value);
    }
  };

  return (
    <div
      className="key"
      id={color ? color : bigKey && "big"}
      onClick={selectLetter}
    >
      {value}
    </div>
  );
}

export default Key;
