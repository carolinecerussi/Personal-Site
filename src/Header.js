import React from 'react';
import './index.css';

function Header() {
    const caroline = {
		color: "black",
		fontSize: '100pt',
		fontFamily: "KiTestRings OutliNe",
		backgroundColor: 'transparent',
        width: '50%',
          
        }
          
    const aboutHead = {
		color: "black",
		fontSize: '60pt',
		fontFamily: "KiTestRings OutliNe",
		backgroundColor: 'transparent',
        width: '50%',
	}
    const carolinePhoto = {
		backgroundColor: 'red',
        width: '50%',

	}


    return (
        <React.Fragment>

        <div className="carolineHead" style={caroline}>
            <h1>Caroline Cerussi</h1>
        </div>
            <div className="aboutHead" style={aboutHead}>
            <h2>Front End Designer</h2>
        </div>
        <div className="carolinePhoto" style={carolinePhoto}>
           {/* <img src={face} alt='face' /> */}
        </div>

        </React.Fragment>
    )

}
export default Header;