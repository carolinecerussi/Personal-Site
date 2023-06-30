import React from 'react';
import '../src/css/banner.css';



function Slide(){
    return (
    <React.Fragment>

<div className="marquee" speed="-4">
    <div className="blink" >
        <span id="now">NOW</span>
    </div>
    <div ><small>
        <span >LOOKING FOR WORK</span></small>
</div>
</div>

</React.Fragment>
    )
    }
export default Slide;