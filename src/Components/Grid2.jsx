
import React from 'react'
import ReactPlayer from 'react-player'
import floral2 from "../img/floral2.mp4";
import '../css/grid2.css';
import Finn from "../img/Finn.png";
import caroline from "../img/caroline.mp4"
import robot from "../img/robotvideo.mp4";
import bookVid from "../img/book.mp4";
import Fan from "./Fan";
import RobotFan from "./RobotFan";
import BookFan from "./BookFan";
import PizzaFan from './PizzaFan';
import book1 from "../img/book1.png";
import book2 from "../img/book2.png";
import book3 from "../img/book3.png";
import pizza1 from "../img/flowerpizza.png";
import pizza2 from "../img/pizzaoven.png";
import pizza3 from "../img/peoplenew.png";
import robot1 from "../img/robot1.PNG";
import robot2 from "../img/robot2.PNG";
import robot3 from "../img/robot4.png";
import caroline1 from "../img/newcaroline.png";
import caroline2 from "../img/newcaroline2.png";


const videoStyle = {
    borderRadius: '6pt',
    backgroundColor: 'transparent',
    marginBottom: '20px',
    marginTop: '20px',
    display:'block',
    boxSixing:'border-box',
marginLeft:'auto',
marginRight:'auto',
objectFit:'cover',
justifyContent:'center',
padding:'2.1%',

}



function Grid2() {
    return (
        <React.Fragment >
            <div id="projects-link">
            <h1 className="section-title">PROJECTS</h1>
            <div className="grid-container" >
               
                <div className="project">
                    <div className="project-header">
                        <h1>Personal Site</h1>
                        </div>
                        <div className="project-pictures">
                            <div className="image-grid">
                                <img className="each-image" src={caroline1} width={'100%'} ></img>
                                <img className="each-image" src={caroline2} width={'100%'} ></img>
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
                          width={'95%'}
                         height={'85%'}
                          
                        />
                    </div>
                        <Fan />
                        <div className="project-description">
                        This is the website you are currently on! As one of my most recent coding projects, I am constantly working on this code. Written completely from scratch using React JS, JavaScript, html, & CSS, I’ve strengthened my knowledge and skillset in front end development. Using custom components, I created a portfolio for my coding projects.

</div>
                        <a href="https://github.com/carolinecerussi/Personal-Site" target="_blank"
                            className="portfolio__link">             <i class="fa fa-github"> </i></a>
                    </div>
             
                    <div className="project" > 
                <div className="project-header">
                    <h1>Floral Fire</h1>
                    </div>
                    <div className="project-pictures">
                        <div className="image-grid">
                            <img className="each-image" src={pizza1} width={'100%'} ></img>
                            <img className="each-image" src={pizza2} width={'100%'} ></img>
                            <img className="each-image" src={pizza3} width={'100%'} ></img>
                        </div>
                    </div>
                    <div className="video-container"     >
                        <ReactPlayer
                            style={videoStyle}
                            loop={true}
                            playing={true}
                            muted={true}
                            url={floral2}
                            width={'95%'}
                         height={'85%'}
                        />
                    </div>
                    <PizzaFan />
                    <div className="project-description">
                    Using Html, JavaScript, and CSS, this web application is a website for a pizza restaurant. You are able to order a Pizza using a form, and learn about the establishment with an about page.    </div>
                    <a href="https://github.com/carolinecerussi/Personal-Site" target="_blank"
                        className="portfolio__link">             <i class="fa fa-github"> </i></a>
                </div>

                <div className="project"> <div className="project-header">
                    <h1>Robo Ramble</h1>
                    </div>
                    <div className="project-pictures">
                        <div className="image-grid">
                            <img className="each-image" src={robot1} width={'100%'} ></img>
                            <img className="each-image" src={robot2} width={'100%'} ></img>
                            <img className="each-image" src={robot3} width={'100%'} ></img>
                        </div>
                        
                    </div>
                    <div className="video-container"     >
                        <ReactPlayer
                            style={videoStyle}
                            loop={true}
                            playing={true}
                            muted={true}
                            url={robot}
                            width={'95%'}
                            height={'85%'}
                        />
                    </div>
                    <RobotFan />
                    <div className="project-description">
                    As one of my first projects during my Coding certification program, was to create a web application using html, JavaScript, and CSS. The program tested my knowledeg of designing a functional and simple layout, where a user can input a number and get a robot worded translation based on that number, using back end code.

</div>
                    <a href="https://github.com/carolinecerussi/Personal-Site" target="_blank"
                        className="portfolio__link">             <i class="fa fa-github"> </i></a>
                </div>
                <div className="project"> <div className="project-header">
                    <h1>Book Marked</h1>
                    </div>
                    <div className="project-pictures">
                        <div className="image-grid">
                            <img className="each-image" src={book1} width={'100%'} ></img>
                            <img className="each-image" src={book2} width={'100%'} ></img>
                            <img className="each-image" src={book3} width={'100%'} ></img>
                        </div>
                    </div>
                    <div className="video-container"     >
                        <ReactPlayer
                            style={videoStyle}
                            loop={true}
                            playing={true}
                            muted={true}
                            url={bookVid}
                            width={'95%'}
                            height={'85%'}
                        />
                    </div>
                    <BookFan />
                    {/* <Video  /> */}
                    <div className="project-description">
                    Using React, Javscript, Html, and CSS, I created a web application for my local book club. The application allows you to add a new book recommendation by filling out a custom form, including details of the book. The book is then sorted into a buildable library that others can look through and click into book details.

</div>
                    <a href="https://github.com/carolinecerussi/Personal-Site" target="_blank"
                        className="portfolio__link">             <i class="fa fa-github"> </i></a>
                </div></div>
            </div>
    
        </React.Fragment>
    )
}

export default Grid2;