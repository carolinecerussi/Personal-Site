import React from 'react';
import face from "../src/img/face.jpg";


function AboutMe() {

    const titleStyle = {
		color: "black",
		fontSize: '120pt',
		fontFamily: "Aretha Bridge",
        backgroundColor: 'transparent',
        width: '100%',
        float:'left',
    }
    const paragraphStyle = {
        fontSize: '20pt',
        width: '80%',
        float: 'left',
        lineHeight: '25pt',

    }
    const projectPhoto = {
        float:'left',
        width:'100%',
            }
        


    return (
        <React.Fragment>
            <div className="aboutMe" style={titleStyle}>
                <h2>Me</h2>
                </div>
                <div className="projectPhoto" alt="photo" style={projectPhoto}>
        <img src={face} alt="project" width='20%'/>
                </div>
            <div className='aboutMe' style={paragraphStyle} >

                <h2>Who I Am-</h2>
                <br />
                <p>
                    CAROLINE CERUSSI <br />
                    29 <br />
                    Portland, Oregon <br />
                    Scorpio/Sagittarius <br />
                    <br /><br />
                    Degree in Industrial Design from <br />
                    Pratt Institute of Art and Design
                    <br /><br />
                    Coding Certificate from <br />
                    Epicodus Coding Program <br />
                    ( React, JavaScript, Html, CSS, C#)</p> 
                    <br/><br/><br/>
                    <h2>My Perogative-</h2>
                <br />
                <p>As a  coder and product designer, I am driven by a deep love for creating innovative and visually captivating experiences. My journey has been shaped by a  blend of emotional and educational experiences throughout my life, which have left me with a unique perspective that I attempt to bring to anything I create. By combining my knowledge of product development and design with my newfound coding skills, I strive to craft responsive and interesting designs that seamlessly blend form and function.

                    My ultimate goal is to find fulfilling work that not only allows me to further develop my front-end development skillset, but also offers a nurturing environment where I can grow and learn from a reliable and positive company. I am so eager to contribute my perspective, dedication, and collaborative spirit to projects that push the boundaries of design and technology, and in doing so, make a meaningful impact in the digital and physical realm. </p>
                <br />
</div>
                <div className="button">
                <button className="button" type="button" ><p>LinkedIn</p></button>
                <button className="button" type="button" ><p>LinkedIn</p></button>
                <button className="button" type="button" ><p>LinkedIn</p></button>
            </div>
    
        </React.Fragment>
    )

}
export default AboutMe;