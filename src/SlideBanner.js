import React from 'react';
import './css/banner.css';


const slideStyle ={
    textAlign: 'left',
    color: 'red',

}

function Slide(){
    return (
    <React.Fragment>

<div className="marquee" speed="-4">
    <div className="blink" >
        <span id="now">NOW</span>
    </div>
    <div ><small>
        <span >L︎︎KING for work!</span></small>
</div>
</div>

</React.Fragment>
    )
    }
export default Slide;