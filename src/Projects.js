import React from 'react';
import './index.css';
import project from './face.jpg';
function Header() {
    const projectTitle = {
		color: "white",
		fontSize: '80pt',
		fontFamily: "KiTestRings OutliNe",
		backgroundColor: 'black',
        textAlign: 'center',
        float: 'left',
        width:'100%',
        marginTop: '20pt',
        }
          
    const projectDecription = {
		color: "white",
		fontSize: '30pt',
		backgroundColor: 'black',
        textAlign: 'center',
        padding: '5%',
        float:'left',
        margin: '2%',


	}
    const projectPhoto = {
		backgroundColor: 'black',
        width: '100%',
        textAlign: 'center',
	}


    return (
        <React.Fragment>

        <div className="projectTitle" style={projectTitle}>
           <h2>Code</h2>
           <div className="projectPhoto" style={projectPhoto}>
           <h3>Number One</h3>             

        <img src={project} alt="project" width='20%' />
                </div>
      </div>
            <div className="projectDescription" style={projectDecription}>
            <p>This is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Projecthis is my Projecthis is my Project</p>
        </div>
        </React.Fragment>
    )

}
export default Header;