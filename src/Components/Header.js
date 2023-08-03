import React from 'react';
import '../css/headerStyle.css';
import carolineName from '../img/carceru.gif';
import Footer from './Footer.js';
import AboutMe from './AboutMe';
import ProjectGrid from './ProjectGrid';
import Rainbow from './Rainbow';
import Border from './Border';
import Slide from './SlideBanner';
function Header() {

    const aboutHead = {
        color: "black",
        fontSize: '14pt',
        fontFamily: "Athiti",
        textAlign: 'center',
        float:'left',
        width:'100%',

    }

    return (
        <React.Fragment>
            <Slide />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className='header' id="headerLink">
                <div className="carolineHead" >
                <img src={carolineName} />
                <Border />

            <span style={aboutHead}><p>Front End Developer / Designer / Artist</p></span>;

                </div>
                <div className='buttonStyle' >
                    <button className="button" type="button" ><p><a href="mailto:cerussicaroline@gmail.com" target="_blank" class="icon-link">Email Me</a></p></button>
                    <button className="button" type="button" ><p><a href="tel:+1631-375-8024"  target = '_blank' class="icon-link">Call Me</a></p></button>
                    <button className="button" type="button" ><p><a href="https://www.linkedin.com/in/caroline-cerussi/" target="_blank" class="icon-link">
<p><i class="fa fa-linkedin-square"></i>
</p></a></p></button>
                </div>
                
            </div>
            <br />
            <br />
            
        </React.Fragment>
    )

}
export default Header;