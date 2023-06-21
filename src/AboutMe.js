import React from 'react';
import face from "../src/img/face.jpg";
import "../src/headerStyle.css";
import iPhone from "../src/img/iphone.png";
function AboutMe() {



    const paragraphStyle = {
        color: "blue",
        fontSize: '25pt',
        fontFamily: "Lao MN",
        backgroundColor: 'white',
        float: 'right',
        marginTop: '8%'

    }
    const projectPhoto = {
        color: "black",
        fontSize: '120pt',
        fontFamily: "Aretha Bridge",
        backgroundColor: 'transparent',
        lineHeight: '1pt',
        float: 'left',
        width: '40%',
        marginTop: ' 15%'

    }

    const smallStyle = {
        fontSize: '35pt',
        backgroundColor: 'white',
        color: 'red',
        lineHeight:'50pt',
    }


    return (
        <React.Fragment>
            <div className="figure">
  <img className="image-main" src={face} alt="project" width='50%' />
  <img className="image-hover" src={iPhone} alt='iphone' width='50%' />
</div>
<div className="figure">
                <p className="main">DEVELOPER</p>
                <p className="hover">CODE</p>
                </div>
            <div className='perogative'>

                <br />   <div style={projectPhoto}> 
                <img src={face} alt="project" width='100%' />
                <h2>Me</h2>
                </div>
            </div>
            <div className='perogative' style={paragraphStyle} >
                <h2>My Perogative-</h2>
                <br />
                <p>As a  coder and product designer, I am driven by a deep love for creating innovative and visually captivating experiences. My journey has been shaped by a  blend of emotional and educational experiences throughout my life, which have left me with a unique perspective that I attempt to bring to anything I create. By combining my knowledge of product development and design with my newfound coding skills, I strive to craft responsive and interesting designs that seamlessly blend form and function.

                    My ultimate goal is to find fulfilling work that not only allows me to further develop my front-end development skillset, but also offers a nurturing environment where I can grow and learn from a reliable and positive company. I am so eager to contribute my perspective, dedication, and collaborative spirit to projects that push the boundaries of design and technology, and in doing so, make a meaningful impact in the digital and physical realm. </p>
                <br />
                <div className='smallerInfo' style={smallStyle} >
                    <h3>Hard Skills </h3>
                    <p>-HTML
                        <br />
                        -CSS
                        <br />
                        -JavaScript <br />
                        -React</p>

                </div>
            </div>
            <br />



        </React.Fragment>
    )

}
export default AboutMe;