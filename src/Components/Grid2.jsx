
import React from 'react'
import ReactPlayer from 'react-player'
import floral from "../img/floral.mp4";
import '../css/grid2.css';
import Finn from "../img/Finn.png";
import caroline from "../img/carolinesite.mp4"
import robot from "../img/robotvideoo.mp4";
import bookVid from "../img/book.mp4";
import Fan from "./Fan";
import RobotFan from "./RobotFan";
import BookFan from "./BookFan";
import PizzaFan from './PizzaFan';
const videoStyle = {
    borderRadius: '15pt',
    backgroundColor: 'white',
    marginBottom: '2%',
    marginTop: '5%',
}



function Grid2() {
    return (
        <React.Fragment>
            <h1 className="section-title">PROJECTS</h1>
            <div className="grid-container" >

                <div className="project" > <div className="project-header">
                    <h1>Floral Fire</h1>
                    <div className="project-pictures">
                        <div className="image-grid">
                            <img className="each-image" src={Finn} width={'100%'} ></img>
                            <img className="each-image" src={Finn} width={'100%'} ></img>
                            <img className="each-image" src={Finn} width={'100%'} ></img>
                        </div>
                    </div>
                    <div className="video-container"     >
                        <ReactPlayer
                            style={videoStyle}
                            loop={true}
                            playing={true}
                            muted={true}
                            url={floral}
                            width={'100%'}
                        />
                    </div>
                    <PizzaFan />
                    <div className="project-description">
                        this is the description
                    </div>
                    <a href="https://github.com/carolinecerussi/Personal-Site" target="_blank"
                        className="portfolio__link">             <i class="fa fa-github"> </i></a>
                </div></div>
                <div className="project">
                    <div className="project-header">
                        <h1>Personal Site</h1>
                        <div className="project-pictures">
                            <div className="image-grid">
                                <img className="each-image" src={Finn} width={'100%'} ></img>
                                <img className="each-image" src={Finn} width={'100%'} ></img>
                                <img className="each-image" src={Finn} width={'100%'} ></img>
                            </div>
                        </div>
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
                        <Fan />
                        <div className="project-description">
                            this is the description
                        </div>
                        <a href="https://github.com/carolinecerussi/Personal-Site" target="_blank"
                            className="portfolio__link">             <i class="fa fa-github"> </i></a>
                    </div>
                </div>


                <div className="project"> <div className="project-header">
                    <h1>Robo Ramble</h1>
                    <div className="project-pictures">
                        <div className="image-grid">
                            <img className="each-image" src={Finn} width={'100%'} ></img>
                            <img className="each-image" src={Finn} width={'100%'} ></img>
                            <img className="each-image" src={Finn} width={'100%'} ></img>
                        </div>
                        
                    </div>
                    <div className="video-container"     >
                        <ReactPlayer
                            style={videoStyle}
                            loop={true}
                            playing={true}
                            muted={true}
                            url={robot}
                            width={'100%'}
                        />
                    </div>
                    <RobotFan />
                    <div className="project-description">
                        this is the description
                    </div>
                    <a href="https://github.com/carolinecerussi/Personal-Site" target="_blank"
                        className="portfolio__link">             <i class="fa fa-github"> </i></a>
                </div></div>
                <div className="project"> <div className="project-header">
                    <h1>Book Marked</h1>
                    <div className="project-pictures">
                        <div className="image-grid">
                            <img className="each-image" src={Finn} width={'100%'} ></img>
                            <img className="each-image" src={Finn} width={'100%'} ></img>
                            <img className="each-image" src={Finn} width={'100%'} ></img>
                        </div>
                    </div>
                    <div className="video-container"     >
                        <ReactPlayer
                            style={videoStyle}
                            loop={true}
                            playing={true}
                            muted={true}
                            url={bookVid}
                            width={'100%'}
                        />
                    </div>
                    <BookFan />
                    {/* <Video  /> */}
                    <div className="project-description">
                        this is the description
                    </div>
                    <a href="https://github.com/carolinecerussi/Personal-Site" target="_blank"
                        className="portfolio__link">             <i class="fa fa-github"> </i></a>
                </div></div>
            </div>

        </React.Fragment>
    )
}

export default Grid2;