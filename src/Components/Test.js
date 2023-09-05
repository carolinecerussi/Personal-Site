import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import '../css/test.css';
import Popup from 'reactjs-popup';
import photo from "../img/chair_.png";
import photo2 from "../img/flash.png";

function DraggableThing() {
    return (
        <React.Fragment>
            <div className='dragBody'>
  
<Draggable
        handle=".dragBox"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[30, 30,]}
        scale={1}
>
        <div className='dragBox'>
        <div className="hidden"><p>Move</p>
          <Popup trigger={<img src={photo} width="100%"/>} position="left"><p className="pop"> hi</p>
          </Popup>
          </div>
        </div>
      </Draggable>
      <Draggable
        handle=".dragBox"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[30, 30,]}
        scale={1}
>
        <div className='dragBox'>
        <div className="hidden"><p>Move</p>
          <Popup trigger={<img src={photo2} width="100%"/>} position="left"><p className="pop"> hey</p>
          </Popup>
          </div>
        </div>
      </Draggable>

     
      </div>
</React.Fragment>
    )
}

export default DraggableThing;