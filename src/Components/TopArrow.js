import React from "react";
import smile from '../img/smile2.png';

const arrowStyle = {
    display:'inline-flex',
    width:'100%',
    justifyContent:'center',
    position:'fixed'

}
function TopArrow() {
    return(
        <React.Fragment>
            <div style={arrowStyle}>
                <a href="#top"><img src={smile} alt="smile" width="40px"/></a>
            </div>
        </React.Fragment>
    )
}

export default TopArrow;
