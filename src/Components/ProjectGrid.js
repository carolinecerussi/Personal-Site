
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
                    <p className="portfolio__text">Featuring a user-friendly interface and accurate translation, I really enjoyed building an interactive application using JavaScript, HTML, and CSS that converted numbers into a robotic language output. </p>


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
        
                  <p className="portfolio__text">Building "Book Marked," a book logging web application, using React, JavaScript, HTML, and CSS enabled me to create a personalized platform where I could gather and store book recommendations from my social circle, creating an online library that amplified the joy of reading and sharing with friends.</p>


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
                    By harnessing the power of JavaScript, HTML, and CSS, I created a visually appealing and interactive pizza ordering web application that seamlessly allowed users to select their desired specifications, customize toppings, and submit orders, providing an efficient and enjoyable experience for pizza lovers.</p>
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

                    <p className="portfolio__text">This is the website you are currently viewing! Using React JS, JavaScript, CSS, and html, I built a custom professional portfolio site to show my skillset. </p>




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