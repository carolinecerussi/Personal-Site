import React from 'react';
import '../css/banner.css';
import Border from './Border';

function Slide() {
    return (
        <React.Fragment>
            <div className='marqueeContainer' >
                <div className="marquee" >
                    <div className="blink" >

                        <span id="now">N<i class="fa fa-eye" />
                            W</span>
                    </div>

                    <div >
                        <span >LOOKING FOR WORK
                            {/* <br /><i class="fa fa-eye" />&nbsp;
<i class="fa fa-eye" /> */}
                            <br />
                        </span>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default Slide;