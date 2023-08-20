import React from "react";
import FanStyle from "../css/fan.css";

function Fan() {
return(
    <React.Fragment>
    <div style={FanStyle} class="swatch">
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