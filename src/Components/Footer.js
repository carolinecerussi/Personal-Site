import React from "react";
import 'react-slideshow-image/dist/styles.css';
import {Slide} from 'react-slideshow-image';
import book from "../img/book1.png";

const spanStyle = {
backgroundColor: 'transparent',
  color: 'blue',
  fontSize:'40pt',
  opacity:'100%',
  fontFamily: 'Bagel Fat One',
  textAlign:'left',
  textDecoration:'normal',

};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'contain',
  height: '170px',
  width:'100vw',
  marginTop:'2%',

};


const slideImages = [
  {
    url: 'https://freight.cargo.site/w/100/i/547865d00ffc608e26981c49cf89223865386e24d25000077ac66f82bfd2a9b4/ezgif.com-gif-maker.gif',
    caption: 'CALL 631 375 8024'
  },
  {
    url: book,
    caption: 'Home Sweet Home',
  
  },

];


const footerImage = {

display:'inline',
height: '200px',
width:'100%',
float:"left",


};


const footerStyle = {
  width:'100%',
  justifyContent : 'center',
  display:'flex',
  backgroundColor: 'transparent',
  height:'200px',
}



function Footer() {


  return (
    <React.Fragment>
      <div className="footer" style={footerStyle}>
        <div className="footerImages" style={footerImage} >
        <div className="slide-container">
          
  <Slide>
    {slideImages.map ((slideImage, index) => (
      <div key={index}>
        <div style={{...divStyle, backgroundImage: `url(${slideImage.url})`}}>
        <a style={spanStyle}>  <span >{slideImage.caption}</span></a>
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