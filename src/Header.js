import React from 'react';
import './headerStyle.css';


function Header() {

    const aboutHead = {
        color: "black",
        fontSize: '40pt',
        fontFamily: "KiTestRings",
        backgroundColor: 'transparent',
        width: '40%',
        padding: '2%',
        float: 'left'

    }

    return (
        <React.Fragment>

                <div className="carolineHead" >
                    <h1>Caroline Cerussi</h1>
                    <div className="aboutHead" style={aboutHead}>
                        Front End Developer  <br />     Product Designer
                        <br /> Artist</div>
                    <br />
                    <br />
                    <div className="buttonContainer">

                        <button className="button" type="button" ><p><a href='https://www.carolinecerussi.me'>Website</a> </p></button>
                        <button className="button" type="button" ><p>Code</p></button>
                        <button className="button" type="button" ><p><a href='https://www.linkedin.com/in/caroline-cerussi/'>LinkedIn</a> </p></button>
                        <br />       <br />

                    </div>        
                </div>

        </React.Fragment>
    )

}
export default Header;