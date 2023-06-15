import React from 'react';
import face from "../src/img/face.jpg";
import "../src/headerStyle.css";

function AboutMe() {

    const titleStyle = {
        color: "black",
        fontSize: '100pt',
        fontFamily: "Aretha Bridge",
        backgroundColor: 'yellow',
        width: '50%',
        float: 'left',

    }
    const paragraphStyle = {
        color: "white",
        fontSize: '30pt',
        fontFamily: "KiTestRings",
        backgroundColor: 'blue',
        float:'right',
marginTop: '8%'

    }
    const projectPhoto = {
        color: "black",
        fontSize: '120pt',
        fontFamily: "Aretha Bridge",
        backgroundColor: 'transparent',
        lineHeight: '1pt',
        float:'left',
        width:'50%',
        marginTop:' 10%'

    }


    return (
        <React.Fragment>
          
            <div className='perogative'  >
               <div style={projectPhoto}> <img src={face} alt="project" width='80%' /><h2>Me</h2>
               </div> 

            </div>
            <div className='perogative' style={paragraphStyle} >

                <h2>My Perogative-</h2>
                <br />
                <p>As a  coder and product designer, I am driven by a deep love for creating innovative and visually captivating experiences. My journey has been shaped by a  blend of emotional and educational experiences throughout my life, which have left me with a unique perspective that I attempt to bring to anything I create. By combining my knowledge of product development and design with my newfound coding skills, I strive to craft responsive and interesting designs that seamlessly blend form and function.

                    My ultimate goal is to find fulfilling work that not only allows me to further develop my front-end development skillset, but also offers a nurturing environment where I can grow and learn from a reliable and positive company. I am so eager to contribute my perspective, dedication, and collaborative spirit to projects that push the boundaries of design and technology, and in doing so, make a meaningful impact in the digital and physical realm. </p>
                <br />
            </div>
            {/* <div className="aboutMe" style={titleStyle}>
                    <h2>Me</h2>
                </div> */}
            <br />




        </React.Fragment>
    )

}
export default AboutMe;