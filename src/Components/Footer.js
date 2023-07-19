import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import heart from "../img/heart.png";

const spanStyle = {
  backgroundColor: 'blue',
  color: 'white',
  fontSize: '40pt',
  marginBottom:'-2pt',
  opacity: '70%',
  textAlign: 'center',
  textDecoration: 'normal',
  fontWeight: '200',
  width:'10%',
  float:'left',
  marginLeft:'5%',
  justifyContent:'center',
  // borderRadius:'10pt',
  marginTop:'1%',
  paddingTop:'1%'

};

const divStyle = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  backgroundSize: 'contain',
  width: '100%',
  height: '80px',
  marginTop:'2%',


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
        <a style={spanStyle}>  <span ><a href="carolinecerussi.com" ><i class="material-symbols-outlined">
                      <h1 style={spanStyle}>home</h1>
                    </i>        </a></span></a>
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