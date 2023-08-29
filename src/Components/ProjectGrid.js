
import React from "react";
import '../css/grid.css';
import Fan from "./Fan";
import RobotFan from "./RobotFan";
import Popup from "reactjs-popup";
import robot1 from '../img/robot1.PNG';
import BookFan from "./BookFan";
import robot2 from '../img/robot2.PNG';
import robot3 from '../img/robot3.jpg';
import shelter1 from '../img/shelter11.png';
import PizzaFan from './PizzaFan';
import shelter2 from '../img/shel1.png';
import shelter3 from '../img/shelter33.png';
import Slide from "./Slide";
import book1 from '../img/book1.png';
import book2 from '../img/book2.png';
import book3 from '../img/book3.png';
import people from '../img/people.png';
import caroline1 from '../img/caroline.png';
import carolineface from '../img/carolineface.png';
import carolineSite from '../img/carolinesite.mp4';
import yellow from '../img/yellow.png';
import pizza3 from '../img/pizza3.png';
import book from '../img/book.mp4';
import roboVid from "../img/robotvideoo.mp4";
import smileVid from '../img/smilevideo.mp4';
function Grids() {


  return (
    <React.Fragment>
      <div className="gridContent">
        <div id="portfolio" className="portfolio section">
          <div className="section__title">PROJECTS</div>
          <span className="section__subtitle"> React JS, C#, JavaScript, Html, CSS <br />  & custom AI art</span>
          <div className="portfolio__container container grid">
            <div className="portfolio__content">
              <div className="portfolio__box">
                <div className="portfolio__group">
                <div className="portfolio__text-section">

                <div className="titleFlow">

<Popup trigger={<button className="playButton">   <h1 className="portfolio__title hover-underline-animation">
  Robot Ramble </h1>
</button>} position="top center">
  {close => (
    <div className="openBox" >
      <iframe class="embed-responsive-item" src={roboVid} frameborder="0px" allowFullScreen="true" ></iframe>  <a className="close" onClick={close} >
        &times;
      </a>
    </div>
  )}

</Popup> 
</div>

                    <div className="imagesForEach" >
                      <img alt="ipad" className="portfolio__img" src={robot1} />
                      <img alt="ipad" className="portfolio__img" src={robot2} />
                      <img alt="ipad" className="portfolio__img" src={robot3} />

                    </div>
                    <RobotFan />
                    <p className="portfolio__text">As one of my first projects during my Coding certification program, was to create a web application using html, JavaScript, and CSS. The program tested my knowledeg of designing a functional and simple layout, where a user can input a number and get a robot worded translation based on that number, using back end code.  </p>


                    <a href="https://github.com/carolinecerussi/Robot_Translator" target="_blank" 
                      className="portfolio__link">             <i class="fa fa-github"> </i></a>

                  </div></div></div></div>

            <div className="portfolio__content">
              <div className="portfolio__box"><div className="portfolio__group">
                <div className="titleFlow">
                  <Popup trigger={<button className="playButton">  <h1 className="portfolio__title hover-underline-animation">
                    Book Marked</h1>
                  </button>} position="left center">
                    {close => (
                      <div className="openBox" >
                        <iframe class="embed-responsive-item" src={book} frameborder="0px" allowFullScreen="true" ></iframe>   <a className="close" width="50vw" onClick={close}  >
                          &times;
                        </a>
                      </div>
                    )}
                  </Popup>
                </div>
                <div className="portfolio__text-section">
                  <div className="imagesForEach" >
                    <img alt="ipad" className="portfolio__img" src={book1} />
                    <img alt="ipad" className="portfolio__img" src={book2} />
                    <img alt="ipad" className="portfolio__img" src={book3} />
                  </div>
                  <BookFan />
                  <p className="portfolio__text">Using React, Javscript, Html, and CSS, I created a web application for my local book club. The application allows you to add a new book recommendation by filling out a custom form, including details of the book. The book is then sorted into a buildable library that others can look through and click into book details.</p>


                  <a href="https://github.com/carolinecerussi/bookmarked"
                    target="_blank"  className="portfolio__link">             <i class="fa fa-github"> </i></a>
                </div></div></div></div>


            {/* 
            <div className="portfolio__content">
              <div className="portfolio__box"><div className="portfolio__group">

                <div className="portfolio__text-section">
                  <div className="imagesForEach" >
                    <img alt="ipad" className="portfolio__img" src={shelter1} />
                    <img alt="ipad" className="portfolio__img" src={shelter2} />
                    <img alt="ipad" className="portfolio__img" src={shelter3} />
                  </div>
                  <h1 className="portfolio__title hover-underline-animation">
                    <a href="https://github.com/carolinecerussi/Alien-Adopt" className="portfolio__link">Alien Adoption→</a></h1>

                  <p className="portfolio__text">
                    Designing and developing my own Alien Adoption website using HTML and CSS provided an incredibly rewarding coding experience, as I crafted an engaging platform that beautifully showcased adorable extraterrestrial pets, with clickable pictures and user-friendly adoption forms, enabling visitors to seamlessly explore and adopt their favorite alien companions.
                  </p>

                  <Popup trigger={<button className="playButton"><i class="fa fa-play"></i>
                  </button>} position="top center">
                    {close => (
                      <div className="openBox" >
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/qN3OueBm9F4?autoplay=1" frameborder="0px"  allowFullScreen="true"></iframe>   <a className="close"  width="50vw" onClick={close} >
                          &times;
                        </a>
                      </div>
                    )}

                  </Popup>
                </div></div></div></div> */}





            <div className="portfolio__content">
              <div className="portfolio__box"><div className="portfolio__group">

                <div className="portfolio__text-section">
                  <div className="video">

                    <div id="headerPopup" class="mfp-hide embed-responsive embed-responsive-21by9">

                    </div>

                  </div>
                  <div className="titleFlow">
                    <Popup trigger={<button className="playButton">  <h1 className="portfolio__title hover-underline-animation">
                      Super Slice </h1>
                    </button>} position="left center">
                      {close => (
                        <div className="openBox" >
                          <iframe class="embed-responsive-item" src={smileVid} frameborder="0px" allowFullScreen="true" >play </iframe> <a className="close" width="50vw" onClick={close}  >
                            &times;
                          </a>
                        </div>
                      )}

                    </Popup>
                  </div>
                  <div className="imagesForEach" >
                    {/* <img alt="ipad" className="portfolio__img" src={pizza1} /> */}
                    <img alt="pizza" className="portfolio__img" src={people} />
                    <img alt="interior" className="portfolio__img" src={pizza3} />
                    <img alt="interior" className="portfolio__img" src={yellow} />


                  </div>
                  <PizzaFan />



                  <p className="portfolio__text">
                  Using html, javascript, and CSS, this web application for a pizza restaurant was my first independant project. The customer can visit the page and use the order form to create a pizza and check out.</p>
                  <a href="https://github.com/carolinecerussi/Super-Slice"
                   target="_blank"  className="portfolio__link">             <i class="fa fa-github"> </i></a>

                </div>
              </div></div></div>


            {/* <div className="portfolio__content">
              <div className="portfolio__box"><div className="portfolio__group">

                <div className="portfolio__text-section">
                  <div className="imagesForEach" >
                    {/* <img alt="starTrek1" className="portfolio__img" src={star1} /> */}
            {/* <img alt="starTrek2" className="portfolio__img" src={star2} />
                    <img alt="starTrek3" className="portfolio__img" src={star3} /> */}
            {/* <img alt="starTrek2" className="portfolio__img" src={star4} /> */}
            {/* <img alt="starTrek3" className="portfolio__img" src={star5} /> */}
            {/* </div>
                  <h1 className="portfolio__title hover-underline-animation">
                    <a href="https://github.com/carolinecerussi/STARTREKD" className="portfolio__link">'Engage' - A Star Trek Dashboard →</a></h1>
                  <p className="portfolio__text">Star Trek </p>
                  <Popup trigger={<button className="playButton"><i class="fa fa-play"></i></button>} position="top center">
                    {close => (
                      <div className="openBox" >
                        <iframe className="embed-responsive-item"  width="50vw" src="https://www.youtube.com" frameborder="0px"  allowFullScreen="true" ></iframe>   <a className="close" onClick={close}  >
                          &times;
                        </a>
                      </div>
                    )} */}
            {/* 
                  </Popup>

                </div></div></div></div> */}
            <div className="portfolio__content">
              <div className="portfolio__box">
                <div className="portfolio__group">

                  <div className="portfolio__text-section">

                    <Popup trigger={<button className="playButton">  <h1 className="portfolio__title hover-underline-animation">Code Portfolio</h1></button>} position="left center">
                      {close => (
                        <div className="openBox" >
                          <iframe className="embed-responsive-item" width="50vw" src={carolineSite} frameborder="0px" allowFullScreen="true" ></iframe>   <a className="close" onClick={close}   >
                            &times;
                          </a>
                        </div>
                      )}

                    </Popup>

                    <div className="imagesForEach" >
                      <img alt="caroline1" className="portfolio__img" src={caroline1} />
                      <img alt="caroline1" className="portfolio__img" src={carolineface} />
                      <img alt="caroline1" className="portfolio__img" src={caroline1} />
                      <Fan />

                    </div>

                    <p className="portfolio__text">This is the website you are currently on! As one of my most recent coding projects, I am constantly working on this code. Written completely from scratch using React JS, JavaScript, html, & CSS, I’ve strengthened my knowledge and skillset in front end development. Using custom components, I created a portfolio for my coding projects. </p>




                    <a href="https://github.com/carolinecerussi/Personal-Site" target="_blank" 
                      className="portfolio__link">             <i class="fa fa-github"> </i></a>


                  </div>      </div></div></div>

          </div>
        </div>
      </div>

    </React.Fragment>
  )
}
export default Grids;