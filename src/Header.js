import React from 'react';
import './headerStyle.css';


function Header() {

    const aboutHead = {
        color: "black",
        fontSize: '40pt',
        fontFamily: "KiTestRings",
        backgroundColor: 'transparent',
        width: '20%',
        float: 'left',
        padding:'5%',
    }

    return (
        <React.Fragment>
<header>
            <div className="carolineHead" >
                <h1>Caroline Cerussi</h1>
            </div>
            <div className="aboutHead" style={aboutHead}>
                <h3>Front End Designer & Developer</h3>
                <div>
                <button className="button" type="button" ><p>Website</p></button>
                <button className="button" type="button" ><p>Code</p></button>
                <button className="button" type="button" ><p><a href='https://www.linkedin.com/in/caroline-cerussi/'>LinkedIn</a> </p></button>

            </div>
            </div>
            </header>
            </React.Fragment>
                )

}
                export default Header;