import React from 'react';
import './index.css';

function Header() {
    const titleStyle = {
        color: "black",
        fontSize: '100pt',
        fontFamily: "KiTestRings OutliNe",
        backgroundColor: 'transparent',
        width: '50%',

    }

    const paragraphStyle = {
        color: 'red',
        fontSize: '24pt',
        fontFamily: "KiTestRings OutliNe",
        width: '70%',
    }
    const linkStyle = {
        backgroundColor: 'black',
        color: 'white',
        fontSize: '25pt',
    }

    return (
        <React.Fragment>

            <div className="aboutMe" style={titleStyle}>
                <h1>Me:</h1>
            </div>
            <div className="aboutHead" style={paragraphStyle}>
                <p>Hi, Im</p>
            </div>
            <div className="carolinePhoto" style={linkStyle}>
                <h3>LinkedIn</h3>
                <h3>LinkedIn</h3>
                <h3>LinkedIn</h3>
                <h3>LinkedIn</h3>
            </div>

        </React.Fragment>
    )

}
export default Header;