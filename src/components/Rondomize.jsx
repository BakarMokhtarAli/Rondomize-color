import React from "react";
import "./Rondomize.css";
function Rondomize() {
  const getRondomColor = () => {
    let colors = "1234567890ABCEDF";
    let hash = "#";
    for (let i = 0; i < 6; i++) {
      hash += colors[Math.floor(Math.random() * colors.length)];
    }
    return hash;
  };

  const handleBtnClick = (e) => {
    e.target.style.backgroundColor = getRondomColor();
    let body = document.querySelector("body");
    body.style.backgroundColor = getRondomColor();
  };

  return (
    <div>
      <h1>Rondomize Color</h1>
      <button className="red" onClick={handleBtnClick}>
        Click
      </button>
      <button className="yellow" onClick={handleBtnClick}>
        Click
      </button>
      <button className="green" onClick={handleBtnClick}>
        Click
      </button>
      <button className="orange" onClick={handleBtnClick}>
        Click
      </button>
    </div>
  );
}

export default Rondomize;
