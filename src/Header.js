import React from 'react';
import './headerStyle.css';


function Header() {

    const aboutHead = {
        color: "black",
        fontSize: '40pt',
        fontFamily: "KiTestRings",
        backgroundColor: 'transparent',
        width: '40%',
        float: 'left'

    }

    return (
        <React.Fragment>
            <header>
                
                <div className="carolineHead" >
                    <h1>Caroline Cerussi</h1>
                    <div className="aboutHead" style={aboutHead}>
                        Front End Developer  <br />     Product Designer
                        <br /> Artist</div>
                    <br />
                    <br />   
                </div>
                <div className='buttonStyle' >
          <button className="button" type="button" ><p><a href="https://www.linkedin.com/in/caroline-cerussi/" target="_blank" class="icon-link">LinkedIn</a></p></button>
          <br /> <button className="button" type="button" ><p><a href="mailto:cerussicaroline@gmail.com" class="icon-link">Email Me</a></p></button>
          <button className="button" type="button" ><p><a href="tel:+1631-375-8024" class="icon-link">Call Me</a></p></button>
      <button className="button" type="button" ><p><a href='https://www.carolinecerussi.me'>Website</a> </p></button>        
        </div>  
                </header>
        </React.Fragment>
    )

}
export default Header;