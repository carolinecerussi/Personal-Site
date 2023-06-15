import React from 'react';
import './index.css';
import book from '../src/img/bookIcon.jpg';
import iphone from '../src/img/iphone.png';
import ipad from '../src/img/ipad.png';
function Projects() {
    const projectTitle = {
        color: "blue",
        fontSize: '80pt',
        fontFamily: "Aretha Bridge",
        backgroundColor: 'white',
        textAlign: 'center',
        float: 'left',
        width: '100%',
        marginTop: '20pt',
    }

    const projectDecription = {
        color: "red",
        fontSize: '30pt',
        backgroundColor: 'white',
        textAlign: 'left',
        fontFamily: "KiTestRings",
        padding: '5%',


    }
    const projectPhoto = {
        backgroundColor: 'white',
        width: '100%',
        textAlign: 'center',
    }

    const websitePhoto = {
        textAlign: 'center'
    }
    return (
        <React.Fragment>

            <div className="projectTitle" style={projectTitle}>
                <h2>Projects</h2>
                <div className="projectPhoto" style={projectPhoto}>
                    <h4>Alien Shelter</h4>
                    <iframe width="70%" height='1200' src="https://www.loom.com/embed/4975256d56bc4c4fa1d849848ddecceb?sid=10ad3957-3a2c-493a-8a8b-b36f4c2ad26c" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

                    <div className="projectDescription" style={projectDecription}>
                        <p>This is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Projecthis is my Projecthis is my Project</p>
                    </div>
                </div>
                <br />
                <div className="projectPhoto" >
                    <h4>Personal Website</h4>
                    <img src={iphone} alt="iphone" width="20%" style={websitePhoto} />
                    <img src={ipad} alt="iphone" width="50%" style={websitePhoto} />
                    <iframe width="70%" height='1200' src="https://www.loom.com/embed/4975256d56bc4c4fa1d849848ddecceb?sid=10ad3957-3a2c-493a-8a8b-b36f4c2ad26c" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

                    <div className="projectDescription" style={projectDecription}>
                        <p>Personal Website Explanation</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}
export default Projects;