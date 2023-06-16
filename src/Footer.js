import React from 'react';
import '../src/headerStyle.css';



function Footer() {

  const footerStyle= {
        backgroundColor: 'transparent',
        fontSize: '50pt',
    }

 
      
      return (
      <React.Fragment >
        <div className='footerStyle' style={footerStyle}>
          <br />
          <div className='buttonStyle' >
          <button className="button" type="button" ><p><a href="https://www.linkedin.com/in/caroline-cerussi/" target="_blank" class="icon-link">LinkedIn</a></p></button>
          <br /> <button className="button" type="button" ><p><a href="mailto:cerussicaroline@gmail.com" class="icon-link">Email Me</a></p></button>
          <button className="button" type="button" ><p><a href="tel:+1631-375-8024" class="icon-link">Call Me</a></p></button>
      <button className="button" type="button" ><p><a href='https://www.carolinecerussi.me'>Website</a> </p></button>        
        </div>        </div>

      </React.Fragment>
      )

      }


export default Footer;