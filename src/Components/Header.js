import React from 'react';
import '../css/headerStyle.css';
import Border from './Border';
import Slide from './SlideBanner';
import Rainbow from './Rainbow';
import carolineName from '../img/carceru.gif'

function Header() {

    const aboutHead = {
        color: "black",
        fontSize: '18pt',
        fontFamily: "Athiti",
        textAlign: 'center',
        float:'left',
        width:'100%'
    }

    return (
        <React.Fragment>
                   <Slide />
            <div className='header'>
                <div className="carolineHead" >
                <img src={carolineName} />
                <span style={aboutHead}><p>Developer  - Designer    - Artist</p></span>
                </div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                <div className='buttonStyle' >
                    <button className="button" type="button" ><p><a href="mailto:cerussicaroline@gmail.com" class="icon-link">Email Me</a></p></button>
                    <button className="button" type="button" ><p><a href="tel:+1631-375-8024" class="icon-link">Call Me</a></p></button>
                    <button className="button" type="button" ><p><a href="https://www.linkedin.com/in/caroline-cerussi/" target="_blank" class="icon-link">
<p><i class="fa fa-linkedin-square"></i>
</p></a></p></button>
                </div>
            </div>
        </React.Fragment>
    )

}
export default Header;