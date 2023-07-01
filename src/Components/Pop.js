import React from 'react';
import Popup from 'reactjs-popup';
import ipad from '../img/ipad.png';
import 'reactjs-popup/dist/index.css';


const popStyle = {
padding:'15%',
width:'100%',
backgroundColor:'white',

}

const popButtonStyle ={
width:'100%',
justifyContent:'center',

borderColor:'transparent',
backgroundColor:'transparent',

}



function Pop(){
    return (
        <React.Fragment>
            <div className="popUp" style={popButtonStyle}>
  <Popup  trigger={<button>VIDEO</button>} position="top center">
    {close => (
      <div className="openBox" style={popStyle}>
ALIEN ADOPTION  <iframe class="embed-responsive-item" width="100%" height="100%" src="https://www.youtube.com/embed/qN3OueBm9F4?autoplay=1" frameborder="0px" allowFullScreen ></iframe>   <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}

  </Popup>
</div>
  </React.Fragment>



)
    };


    export default  Pop;