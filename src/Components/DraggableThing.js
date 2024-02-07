import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import '../css/test.css';
import pigeon from "../img/pigeon.png";
import Popup from 'reactjs-popup';
import photo from "../img/chair_.png";
import photo2 from "../img/flash.png";
import chair from "../img/heart.png";
import finn from "../img/Finn.png";
function DraggableThing() {
  return (
    <React.Fragment>
      <div className='dragBody'>
        <Draggable
          handle=".dragBox"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[30, 30,]}
          scale={1}
        >

          <div className='dragBox'>
            <div className="hidden"><p><i class="fa fa-arrows-alt"></i></p>
              <Popup trigger={<img id="chair" src={photo} width="100%" />} position="left"><p className="pop"><img src={chair} width='20%' /> Hey chair</p>
              </Popup>
            </div>
          </div>
        </Draggable>



        <Draggable
          handle=".dragBox"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[30, 30,]}
          scale={1}
        >
          <div className='dragBox'>
            <div className="hidden"><p><i class="fa fa-arrows-alt"></i>
            </p>
              <Popup trigger={<img id="flash" src={photo2} width="100%" />} position="left"><p className="pop"> hey</p>
              </Popup>
            </div>
          </div>
        </Draggable>

        <Draggable
          handle=".dragBox"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[30, 30,]}
          scale={1}
        >
          <div className='dragBox'>
            <div className="hidden"><p><i class="fa fa-arrows-alt"></i>
            </p>
              <Popup trigger={<img id="flash" src={pigeon} width="100%" />} position="left"><p className="pop"> hey</p>
              </Popup>
            </div>
          </div>
        </Draggable>

        <Draggable
          handle=".dragBox"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[30, 30,]}
          scale={1}
        >
          <div className='dragBox'>
            <div className="hidden"><p><i class="fa fa-arrows-alt"></i>
            </p>
              <Popup trigger={<img id="flash" src={finn} width="70%" />} position="left"><p className="pop"> Finnley is my ultimate companion of 11 years. She and I have traveled to most of all US states together, and camped across the country several times. </p>
              </Popup>
            </div>
          </div>
        </Draggable>

      </div>
    </React.Fragment>
  )
}

export default DraggableThing;