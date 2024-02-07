import React from "react";
import pizzafanstyle from "../css/pizzafan.css";

function Fan() {
  return (
    <React.Fragment>
      <div style={pizzafanstyle} class="swatchPizza">
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