import React from 'react';
import sag from "../img/sag3.gif";
import Rainbow from './Rainbow';
import Slide from "./Slide";
import Weather from './Weather';
import ProjectGrid from './ProjectGrid';
import Map from './Map';
import '../css/aboutme.css';
const meBoxStyle = {
  justifyContent: 'center',
  width: '90%',
  boxSizing: 'border-box',
  lineHeight: '16pt',
backgroundColor: 'transparent',
display:'block',
marginLeft:'auto',
marginRight:'auto',
textWrap:'pretty',

};


const aStyle = {
  textAlign:'left',
  
}
const columnStyle = {
  display: 'flex',
  backgroundColor:'transparent',
  textAlign: 'left',
  marginLeft:'auto',
  marginRight:'auto',
  fontWeight:'300',
  width:'100%',
}
const rowStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  fontWeight:'100',
  width:'100%',
  marginLeft:'auto',
  marginRight:'auto',
  textAlign:'left',
}

const aboutMeWhole = {
  justifyContent: 'center',
  display: 'block',
  backgroundColor: 'transparent',
  marginBottom: '2%',
  marginTop: '2%',
  boxSizing: 'border-box',
  width:'100%',
  textWrap:'wrap',
}

const headerOneStyle = {
  fontSize: '30pt',
  width: '80%',
  marginLeft: '10%',
  backgroundColor: 'transparent',
  display: 'block',
  fontWeight:'100',
  marginLeft:'auto',
  marginRight:'auto'
}

const perogativeStyle = {
  float: 'left',
  display: 'block',
  justifyContent: 'center',
  marginTop: '2%',
  alignItems: 'center',
  maxWidth: '100vw',
  width:'80vw',
  marginLeft:'10%',
  backgroundColor: 'transparent',
 textWrap:'pretty',
};

const smallFont = {
  fontSize: '14pt',
  textAlign: 'left',
  backgroundColor: ' white',
textWrap:'pretty',
textIndent:'5%',
fontWeight:'300',
lineHeight: '19pt',
width:'100%',
borderRadius:'8pt',

};



function AboutMe() {
  return (

    <React.Fragment>


      <div className="portfolio__text-section" style={aboutMeWhole}>


        <div className="perogative" id="aboutLink" style={perogativeStyle}>

          <h1 style={headerOneStyle}>MY PREROGATIVE</h1>


          <div className="smallerInfo" style={smallFont}>


            <p >
              As an energetic and curious native New Yorker with a love for art, I found my passion for design at Pratt Institute. Throughout my studies, I discovered the fascinating connection between space, color, and functionality. I've always been captivated by the potential of design and technology working together to create amazing products. This curiosity led me to explore front-end development, where I've dived into coding and its transformative abilities.
             Through a comprehensive coding program, I've gained confidence in using various languages like React, HTML, CSS, JavaScript, and C#. Alongside my experience in drafting on SolidWorks, product development, and research, I'm well-equipped to take on exciting opportunities in front-end design and web development. My goal is to craft comprehensive, intuitive, and visually appealing designs that leave a lasting impact.
            </p>
            <br />
          </div>
        </div>

        <div className="aboutMeBox" style={meBoxStyle}>
        <Map /> 
          <div className='row' style={rowStyle}>
        
      
            <div className='column' style={columnStyle}>
   

              <p>
       
               <p>
        
                  <h2 id='hover-portland'>
                 
                    <i class='fa fa-map-marker' ></i>&nbsp;
                    PORTLAND  OR
                  </h2>


                  <p>30 year-old</p>

                  <a
                    href="https://www.ziprecruiter.com/blog/best-career-paths-sagittarius/#:~:text=If%20given%20enough%20flexibility%20and,great%20candidate%20for%20leadership%20roles."
                    target="_blank"
            style={aStyle}
                    rel="noopener noreferrer"
                  >
                      {/* <img  src={sag} /> */}
                    Sagittarius 
                   </a>

                  <br />

                  with a Bachelor's degree of
                  {' '}
                  <h2>Industrial Design
                  </h2>
                  {' '}
                  from
                  {' '}
                  <h2>Pratt Institute</h2>
                  {' '}
                  of Art and Design.
                </p>
                & 
     
              <h2>Coding Certificate</h2>from
              <h2>Epicodus Coding School </h2>
              React, JavaScript, HTML, CSS, C#
              </p>

            </div>
            <div className='column' style={columnStyle}>
              <br ></br>
              <br ></br>
              <br />

<br />
              <p >
              <h2>CONTACT:</h2>

                {/* <h1  style={headerOneStyle}>Contact:</h1> */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                <a             style={aStyle}
                 href="tel:+1631-375-8024" target='_blank' >    <h4><i class="fa fa-phone" ></i>: 631 375 8024</h4>
                </a>
                <a
                            style={aStyle}
                  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=cerussicaroline@gmail.com"
                  target="_blank"
                >
                  <h4>
                    {' '} <i class="fa fa-envelope-o" />: Cerussicaroline@gmail.com
                  </h4>
                </a>

                <a              style={aStyle}
                href="https://github.com/carolinecerussi" target="_blank">
                  <h4>
                    <i class="fa fa-github"> </i>

                    : Github
                  </h4>
                </a>
                {/* <a href="https://carolinecerussi.me" target="_blank">
                <h4><i class="fa fa-chain"> </i>: 
                Furniture Portfolio</h4>
              </a> */}
                <a
                            style={aStyle}
                  href="https://docs.google.com/document/d/e/2PACX-1vQ9WszdgVTh7EU6hghiV9wjkM097J8ip8j5rEjPmAec4BRMxp99P7SQqaI8mHh7SrRAuiMsamsEDGr1/pub"
                  target="_blank"
                >
                  <h4>
                    <i class="fa fa-file-o" />: Resume
                  </h4>
                </a>
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />

   

    </React.Fragment>
  );
}

export default AboutMe;
