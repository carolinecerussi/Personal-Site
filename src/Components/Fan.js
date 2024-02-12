import React from "react";
import FanStyle from "../css/fan.css";

function Fan() {
return(
    <React.Fragment>
      <div className="fan-container" >
    <div style={FanStyle} className="swatch">
  <div ></div>
  <div ></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
</div>
</React.Fragment>
)
}

export default Fan;