import React from "react";
import finn from '../img/face.gif'



const footerImage = {
  width: '100%',
  textAlign:'center',
  margin:'2%',
  
}

const footerStyle = {
  width:'100%',
  justifyContent : 'center',
  backgroundColor: 'black',

}

function Footer() {


  return (
    <React.Fragment>
      <div className="footer" style={footerStyle}>
        <div className="footerImages" style={footerImage} >
          <img src={finn} width='100px' alt='finn' />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer;