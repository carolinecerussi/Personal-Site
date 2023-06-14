import React from 'react';
import './index.css';
import project from './face.jpg';
function Header() {
    const projectTitle = {
		color: "white",
		fontSize: '80pt',
		fontFamily: "KiTestRings OutliNe",
		backgroundColor: 'black',
        width: '100%',
        textAlign: 'center',
        float: 'left',
        }
          
    const projectDecription = {
		color: "white",
		fontSize: '30pt',
		backgroundColor: 'black',
        width: '100%',
        textAlign: 'center',
        padding: '8%',
        float: 'left',

	}
    const projectPhoto = {
		backgroundColor: 'transparent',
        width: '40%',
        textAlign: 'center',
        marginLeft: '30%',

	}


    return (
        <React.Fragment>

        <div className="projectTitle" style={projectTitle}>
           <h2>Code</h2>
           <h3>Number One</h3>             
           <div className="projectPhoto" style={projectPhoto}>
        <img src={project} alt="project" />
                </div>
      </div>
            <div className="projectDescription" style={projectDecription}>
            <p>This is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Projecthis is my Projecthis is my Project</p>
        </div>
        </React.Fragment>
    )

}
export default Header;