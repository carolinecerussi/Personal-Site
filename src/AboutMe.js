import React from 'react';
import './index.css';

function Header() {
    const titleStyle = {
        color: "red",
        fontSize: '80pt',
        fontFamily: "KiTestRings OutliNe",
        backgroundColor: 'white',
        width: '70%',
        float: 'left',

    }

    const paragraphStyle = {
        color: 'red',
        fontSize: '24pt',
        fontFamily: "KiTestRings OutliNe",
        width: '30%',
        textAlign: 'left',
        float: 'left',
    }
    const linkStyle = {
        width: '40%',
        float: 'left',
        marginBottom:'20pt',

        
    }

    return (
        <React.Fragment>

            <div className="aboutMe" style={titleStyle}>

                <h1>Me:</h1>
                <p>Hi, Im Caroline Cerussi and I rule</p>
       </div>
            <div className="button" style={linkStyle} >
                <button className="button" type="button" ><p>LinkedIn</p></button>
                <button className="button" type="button" ><p>LinkedIn</p></button>
                <button className="button" type="button" ><p>LinkedIn</p></button>
            </div>


        </React.Fragment>
    )

}
export default Header;