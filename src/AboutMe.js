import React from 'react';
import "../src/headerStyle.css";
import Border from './Border';
function AboutMe() {



  const paragraphStyle = {
    color: "black",
    fontSize: '25pt',
    fontFamily: "Bagel Fat One ",
    width: '100%',
    backgroundColor: 'transparent',
    float:'left',

  }

const smallFont = {
  width:'50%',
  float:'left',
  textAlign:'left',
  fontSize: '20pt',
  fontFamily: "Barlow ",
}


  return (
    <React.Fragment>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@200&family=Press+Start+2P&display=swap" rel="stylesheet">
      </link>
      {/* <div className="figure">
                <img className="image-main" src={face} alt="project" width='50%' />
                <p className="image-hover" >Hi this is an about me</p>
            </div> */}
            <Border />  



      <div className='perogative' style={paragraphStyle} >
      <div className='perogative'>
          <h1>My Perogative</h1>
          <br />
        </div>
        <div className='smallerInfo' style={smallFont} >
          <p>As a  coder and product designer, I am driven by a deep love for creating innovative and visually captivating experiences. My journey has been shaped by a  blend of emotional and educational experiences throughout my life, which have left me with a unique perspective that I attempt to bring to anything I create. By combining my knowledge of product development and design with my newfound coding skills, I strive to craft responsive and interesting designs that seamlessly blend form and function.
            My ultimate goal is to find fulfilling work that not only allows me to further develop my front-end development skillset, but also offers a nurturing environment where I can grow and learn from a reliable and positive company. I am so eager to contribute my perspective, dedication, and collaborative spirit to projects that push the boundaries of design and technology, and in doing so, make a meaningful impact in the digital and physical realm. </p>
          <br />
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