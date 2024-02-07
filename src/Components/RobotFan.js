import React from "react";
import robotfanstyle from "../css/robotfan.css";

function Fan() {
  return (
    <React.Fragment>
      <div style={robotfanstyle} class="roboSwatch">
        <div ></div>
        <div ></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </React.Fragment>
  )
}

export default Fan;