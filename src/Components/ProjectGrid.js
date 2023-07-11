
import React from "react";
import '../css/grid.css';
import ipad from "../img/ipad.png";
import Popup from "reactjs-popup";
import robot1 from '../img/robot1.PNG';
import robot2 from '../img/robot2.PNG';
import robot3 from '../img/robot3.jpg';
import shelter1 from '../img/shelter11.png';
import shelter2  from '../img/shelter22.png';
import shelter3  from '../img/shelter33.png';
import pizza1 from '../img/womanpizza.png';
import book1 from '../img/book1.png';

function Grids() {


  return (
    <React.Fragment>
      <div className="gridContent">
        <div id="portfolio" className="portfolio section">
          <h1 className="section__title">PROJECTS</h1>
          <span className="section__subtitle"> React JS, JavaScript, Html,CSS,C#</span>
          <div className="portfolio__container container grid">
            <div className="portfolio__content">
              <div className="portfolio__box">
                <div className="portfolio__group">
                <div className="portfolio__text-section">
                  <div className="imagesForEach" >
                <img alt="ipad" className="portfolio__img" src={robot1} />
                  <img alt="ipad" className="portfolio__img" src={robot2} />
                  <img alt="ipad" className="portfolio__img" src={robot3} />
                  </div>
                  <h1 className="portfolio__title hover-underline-animation">
                    <a href="https://github.com/carolinecerussi/Robot_Translator.git" className="portfolio__link">Robot Ramble →</a></h1>

                  <p className="portfolio__text">Featuring a user-friendly interface and accurate translation, I really enjoyed building an interactive application using JavaScript, HTML, and CSS that converted numbers into a robotic language output. </p>

                  <Popup trigger={<button><i class="fa fa-play"></i>
</button>} position="top center">
                    {close => (
                      <div className="openBox" >
                        <iframe class="embed-responsive-item" width="400px" height="400px" src="https://www.loom.com/embed/f47dc27da3d94811992b5e7cd3d7eaaf?sid=a650bc3e-e997-4dcb-adbf-02d1fed693c7" frameborder="0px" allowFullScreen ></iframe>   <a className="close" onClick={close}>
                          &times;
                        </a>
                      </div>
                    )}

                  </Popup>
            

                </div></div></div></div>

                <div className="portfolio__content">
              <div className="portfolio__box"><div className="portfolio__group">

                <div className="portfolio__text-section">
                <div className="imagesForEach" >
                <img alt="ipad" className="portfolio__img" src={book1} />
                <img alt="ipad" className="portfolio__img" src={book1} />
                <img alt="ipad" className="portfolio__img" src={book1} />
                  </div>
                  <h1 className="portfolio__title hover-underline-animation">
                    <a href="https://github.com/carolinecerussi/bookmarked" className="portfolio__link">Book Marked→</a></h1>
                  <p className="portfolio__text">Building "Book Marked," a book logging web application, using React, JavaScript, HTML, and CSS enabled me to create a personalized platform where I could gather and store book recommendations from my social circle, creating an online library that amplified the joy of reading and sharing with friends.</p>
                  <Popup trigger={<button> <i class="fa fa-play"></i>
</button>} position="top center">
                    {close => (
                      <div className="openBox" >
                       <iframe class="embed-responsive-item" width="400px" height="400px" src="https://www.youtube.com/embed/qN3OueBm9F4?autoplay=1" frameborder="0px" allowFullScreen ></iframe>   <a className="close" onClick={close}>
                          &times;
                        </a>
                      </div>
                    )}

                  </Popup>
                </div></div></div></div>



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

                  <Popup trigger={<button><i class="fa fa-play"></i>
</button>} position="top center">
                    {close => (
                      <div className="openBox" >
                       <iframe class="embed-responsive-item" width="400px" height="400px" src="https://www.youtube.com/embed/qN3OueBm9F4?autoplay=1" frameborder="0px" allowFullScreen ></iframe>   <a className="close" onClick={close}>
                          &times;
                        </a>
                      </div>
                    )}

                  </Popup>
                </div></div></div></div>




            <div className="portfolio__content">
              <div className="portfolio__box"><div className="portfolio__group">

                <div className="portfolio__text-section">
                  <div className="video">

                    <div id="headerPopup" class="mfp-hide embed-responsive embed-responsive-21by9">

                    </div>

                  </div>
                  <div className="imagesForEach" >
                <img alt="ipad" className="portfolio__img" src={pizza1} />
                  <img alt="ipad" className="portfolio__img" src={pizza1} />
                  <img alt="ipad" className="portfolio__img" src={pizza1} />
                  </div>
                  <h1 className="portfolio__title hover-underline-animation">
                    <a href="https://github.com/carolinecerussi/Super-Slice" className="portfolio__link">Super Slice →</a></h1>

                  <p className="portfolio__text">  
By harnessing the power of JavaScript, HTML, and CSS, I created a visually appealing and interactive pizza ordering web application that seamlessly allowed users to select their desired specifications, customize toppings, and submit orders, providing an efficient and enjoyable experience for pizza lovers.</p>
                  <Popup trigger={<button><i class="fa fa-play"></i>
</button>} position="top center">
                    {close => (
                      <div className="openBox" >
                    <iframe class="embed-responsive-item" width="400px" height="400px" src="https://www.youtube.com/embed/qN3OueBm9F4?autoplay=1" frameborder="0px" allowFullScreen ></iframe>   <a className="close" onClick={close}>
                          &times;
                        </a>
                      </div>
                    )}

                  </Popup>
                </div></div></div></div>


            <div className="portfolio__content">
              <div className="portfolio__box"><div className="portfolio__group">

                <div className="portfolio__text-section">
                  <img alt="ipad" className="portfolio__img" src={ipad} />
                  <div className="imagesForEach" >
                <img alt="ipad" className="portfolio__img" src={robot1} />
                  <img alt="ipad" className="portfolio__img" src={robot2} />
                  <img alt="ipad" className="portfolio__img" src={robot3} />
                  </div>
                  <h1 className="portfolio__title hover-underline-animation">
                    <a href="https://github.com/carolinecerussi/Personal-Site" className="portfolio__link">Personal Portfolio Website →</a></h1>

                  <p className="portfolio__text">This is the website you are currently viewing! </p>
                  <Popup trigger={<button><i class="fa fa-play"></i></button>} position="top center">
                    {close => (
                      <div className="openBox" >
                      <iframe className="embed-responsive-item" width="400px" height="400px" src="https://www.youtube.com" frameborder="0px" allowFullScreen ></iframe>   <a className="close" onClick={close}>
                          &times;
                        </a>
                      </div>
                    )}

                  </Popup>
            
                </div></div></div></div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Grids;