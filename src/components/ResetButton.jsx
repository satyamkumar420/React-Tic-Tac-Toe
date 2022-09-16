import React from "react";
import "./ResetButton.css";

const ResetButton = ({ resetBoard }) => {
  return (
    <>
      <div>
        <button className="reset-button" onClick={resetBoard}>
          Reset
        </button>
      </div>
    </>
  );
};

export default ResetButton;
