import React from "react";
import ReactPlayer from 'react-player'
import caroline from "../img/carolinesite.mp4"
const videoStyle={
    borderRadius: '15pt',
    backgroundColor:'red',
  marginBottom:'2%',
  marginTom: '2%',
}

function Video() {


    return (
        <React.Fragment>
            <div className="video-container"     >
            <ReactPlayer
             style={videoStyle}  
            loop={true}
            playing={true} 
            muted={true}
            url={caroline} 
            width={'100%'}
            />
            </div>

        </React.Fragment>
    )

}
export default Video;