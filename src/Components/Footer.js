import React from "react";
import finn from '../img/face.gif'
import 'react-slideshow-image/dist/styles.css';
import chair from '../img/chair.jpeg';

import {Slide} from 'react-slideshow-image';


const spanStyle = {
  padding: '5px',
backgroundColor: 'transparent',
  color: 'blue',
  fontSize:'50pt',
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'contain',
  height: '300px',
  width:'100vw'

};
const slideImages = [
  {
    url: 'https://freight.cargo.site/t/original/i/96cc78ddbffbbda41b80d2331399548863ffa19edde63ec94aaada3a3a95c953/bench1.jpg',
    caption: 'I MADE THIS',
  },
  {
    url: 'https://freight.cargo.site/t/original/i/3fc952b9d858eac58f86f2c174034115c0c2433ad4296929d81814c936fe9b6f/chair_.jpg',
    caption: 'AND THIS',
  },
  {
    url: 'https://freight.cargo.site/t/original/i/64dba1641d61a92a7acb6b09fc0aeae881d631ee3b318e0867ebb251b9ff3f46/stool2.jpg',
    caption: 'AND THIS',
  },
];

const footerImage = {

  justifyContent:'center',
  width: '100%',
  marginTop:'2%'
};


const footerStyle = {
  width:'100%',
  justifyContent : 'center',
  backgroundColor: 'transparent',
}

function Footer() {


  return (
    <React.Fragment>
      <p>hehe</p>
      <div className="footer" style={footerStyle}>
        <div className="footerImages" style={footerImage} >
        <div className="slide-container">
  <Slide>
    {slideImages.map ((slideImage, index) => (
      <div key={index}>
        <div style={{...divStyle, backgroundImage: `url(${slideImage.url})`}}>
          <span style={spanStyle}>{slideImage.caption}</span>
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