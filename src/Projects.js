import React from 'react';
import './index.css';
import book from '../src/img/bookIcon.jpg';


function Projects() {
    const projectTitle = {
        color: "white",
        fontSize: '80pt',
        fontFamily: "Aretha Bridge",
        backgroundColor: 'black',
        textAlign: 'center',
        float: 'left',
        width: '100%',
        marginTop: '20pt',
    }

    const projectDecription = {
        color: "white",
        fontSize: '30pt',
        backgroundColor: 'black',
        textAlign: 'left',
        fontFamily: "KiTestRings",
        padding: '5%',


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
                    <h4>Alien Shelter</h4>
                    <iframe width="50%" height="541" src="https://www.loom.com/embed/4975256d56bc4c4fa1d849848ddecceb?sid=10ad3957-3a2c-493a-8a8b-b36f4c2ad26c" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>           
                    
                    <div className="projectDescription" style={projectDecription}>
                    <p>This is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Projecthis is my Projecthis is my Project</p>
       </div>
       </div>
            </div>    
        </React.Fragment>
    )

}
export default Projects;