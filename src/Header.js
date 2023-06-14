import React from 'react';
import './index.css';
import project from './face.jpg';
import "./headerStyle.css";



function Header() {
    const caroline = {
		color: "black",
		fontSize: '100pt',
		fontFamily: "KiTestRings OutliNe",
		backgroundColor: 'white',
        width: '50%',

        }
          
    const aboutHead = {
		color: "black",
		fontSize: '40pt',
		fontFamily: "KiTestRings OutliNe",
		backgroundColor: 'transparent',
        width: '50%',
        float:'left',


	}
    const projectPhoto = {
float:'right',
width:'50%',
	}

    const linkStyle = {
        width: '40%',
        float: 'left',
        marginBottom:'20pt',

        
    }


    return (
        <React.Fragment>

        <div className="carolineHead" style={caroline}>
            <h1>Caroline Cerussi</h1>
    
        </div>
        <div className="projectPhoto" alt="photo" style={projectPhoto}>
        <img src={project} alt="project" width='50%'/>
                </div>
            <div className="aboutHead" style={aboutHead}>
            <h3>Front End Designer & Developer</h3>
        </div>

        </React.Fragment>
    )

}
export default Header;