import React from 'react';
import './headerStyle.css';


function Header() {
    const caroline = {
        color: "black",
        fontSize: '120pt',
        fontFamily: "Aretha Bridge",
        backgroundColor: '',
        textAlign: 'left',
        float: 'left',
        width: '60%',
        textAlign: 'left',
    }
    const aboutHead = {
        color: "black",
        fontSize: '30pt',
        fontFamily: "KiTestRings",
        backgroundColor: 'yellow',
        width: '20%',
        float: 'left',
        marginTop: '30%',

    }

    return (
        <React.Fragment>
<header>
            <div className="carolineHead" >
                <h1>Caroline Cerussi</h1>
            </div>
            <div className="aboutHead" style={aboutHead}>
                <h3>Front End Designer & Developer</h3>
            </div>
            </header>
            </React.Fragment>
                )

}
                export default Header;