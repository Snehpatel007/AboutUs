import React from "react";
import "./bg-1.css";
import img2 from './event.jpg'

function Bg_1() {
  return (
    <div className="bg_1">
      <div className="child-1">
        <div className="back">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img
          className="tele"
            src={img2}
     
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Bg_1;
