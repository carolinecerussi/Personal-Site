import React from 'react';
import './index.css';
import iphone from '../src/img/iphone.png';
import ipad from '../src/img/ipad.png';
import macbook from '../src/img/macbook.png';
function Projects() {
    const projectTitle = {
        color: "blue",
        fontSize: '80pt',
        fontFamily: "Aretha Bridge",
        backgroundColor: 'white',
        textAlign: 'left',
        float: 'left',
        marginTop: '20pt',
        marginLeft:'2%',
        width:'100%'
    }

    const projectDecription = {
        color: "black",
        fontSize: '30pt',
        backgroundColor: 'white',
        textAlign: 'left',
        fontFamily: "KiTestRings",
width:'50%'
    }


    const websitePhoto = {
        textAlign: 'left'
    }

    return (
        <React.Fragment>
            <div className="projectTitle" style={projectTitle}>
                <h2>Projects</h2>
                    <h4>Alien Shelter</h4>
                    <div className="projectDescription" style={projectDecription}>
                        <p>This is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Project his is my Projecthis is my Projecthis is my Project</p>
                    </div>
                    <iframe width="40%" height='900' src="https://www.loom.com/embed/4975256d56bc4c4fa1d849848ddecceb?sid=10ad3957-3a2c-493a-8a8b-b36f4c2ad26c" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


                <br />
                <div className="projectPhoto" >
                    <h4>Personal Website</h4>
                    <div className="projectDescription" style={projectDecription}>
 <p>Personal Website Explanation</p>
                    </div>
                    <img src={iphone} alt="iphone" width="10%" style={websitePhoto} />
                    <img src={ipad} alt="ipad" width="20%" style={websitePhoto} />
                    <img src={macbook} alt="macbook" width="40%" style={websitePhoto} />

                    <iframe width="40%" height='900' src="https://www.loom.com/embed/4073508f53ad410ea51a0c7375bf05d0?sid=8c95eace-da02-4eb9-b5c7-fa83162c4669" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    <div className="projectDescription" style={projectDecription}>
                        <p>Personal Website Explanation</p>
                    </div>

            </div>


</div>

        </React.Fragment>
    )

}
export default Projects;