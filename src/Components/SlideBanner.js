import React from 'react';
import '../css/banner.css';

function Slide(){
    return (
    <React.Fragment>
<div className='marqueeContainer' >
<div className="marquee" >
    <div className="blink" >
        <span id="now">NOW</span>
    </div>

    <div >
        <span >LOOKING FOR WORK</span>
</div>
</div>
</div>

</React.Fragment>
    )
    }
export default Slide;