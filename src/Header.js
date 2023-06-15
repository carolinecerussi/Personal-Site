import React from 'react';
import './headerStyle.css';


function Header() {
    const caroline = {
		color: "white",
		fontSize: '120pt',
		fontFamily: "Niblick",
		backgroundColor: 'transparent',
        textAlign: 'center',
        }
    const aboutHead = {
		color: "black",
		fontSize: '40pt',
		fontFamily: "Niblick",
		backgroundColor: 'transparent',
        width: '100%',
        float:'left',

	}

    return (
        <React.Fragment>

        <div className="carolineHead" style={caroline}>
            <h1>Caroline Cerussi</h1>

            <div className="aboutHead" style={aboutHead}>
            <h3>Front End Designer & Developer</h3>
        </div>
        </div>
      

        </React.Fragment>
    )

}
export default Header;