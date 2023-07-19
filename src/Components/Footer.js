import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import heart from "../img/heart.png";

const spanStyle = {
  backgroundColor: 'transparent',
  color: 'black',
  justifyContent:'center',
  fontSize: '30pt',
  opacity: '100%',
  textDecoration: 'none',
  width:'fit-content',
  float:'left',
  padding:'0pt 5pt ',
  alignItems:'center',
  marginBottom:'-3%',
};


const divStyle = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  backgroundSize: 'contain',
  width: '100%',
  height: '100px',
  alignItems:'center',
marginTop:'1%'

};
const slideImages = [
  {
    url: 'https://freight.cargo.site/w/100/i/547865d00ffc608e26981c49cf89223865386e24d25000077ac66f82bfd2a9b4/ezgif.com-gif-maker.gif',
  },
  {
    url:  'https://freight.cargo.site/w/100/i/547865d00ffc608e26981c49cf89223865386e24d25000077ac66f82bfd2a9b4/ezgif.com-gif-maker.gif',
  },
  {
    url:  'https://freight.cargo.site/w/100/i/547865d00ffc608e26981c49cf89223865386e24d25000077ac66f82bfd2a9b4/ezgif.com-gif-maker.gif',
  },
];


const footerImage = {

  display: 'inline-block',
  width: '100%',
  float: "left",
justifyContent:'center',
alignItems:'center'
};


const footerStyle = {
  width: '100%',
  justifyContent: 'center',
  display: 'flex',
  backgroundColor: 'transparent',
}



function Footer() {


  return (
    <React.Fragment>
      <div className="footer" style={footerStyle}>
        <div className="footerImages" style={footerImage} >
     <span style={spanStyle}><a  style={spanStyle} href="carolinecerussi.com" ><i class="material-symbols-outlined">
                      <p style={spanStyle}>home</p> 
                    </i>  
                         </a>  
                     </span>
                         {/* <span style={spanStyle}><p style={spanStyle}  > Contact Me:
                         </p>  
                      </span> */}
          <div className="slide-container">
          
            <Slide>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
              {slideImages.map((slideImage, index) => (
                <div key={index}>
                  <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})`}}>
                  </div>
                </div>
              ))}

            </Slide>
          </div>;
        </div>
      </div>

    </React.Fragment>
  )
}

export default Footer;