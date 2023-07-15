
import React from "react";
import '../css/grid.css';
import caroline2 from "../img/caroline2.png";
import Popup from "reactjs-popup";
import robot1 from '../img/robot1.PNG';
import robot2 from '../img/robot2.PNG';
import robot3 from '../img/robot3.jpg';
import shelter1 from '../img/shelter11.png';
import shelter2 from '../img/shelter22.png';
import shelter3 from '../img/shelter33.png';
import pizza1 from '../img/womanpizza.png';
import book1 from '../img/book1.png';
import book2 from '../img/book2.png';
import book3 from '../img/book3.png';
import people from '../img/people.png';
import caroline1 from '../img/caroline.png';
import caroline3 from '../img/caroline3.png';
import yellow from '../img/yellow.png';
import pizza3 from '../img/pizza3.png';
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
                      <a href="https://github.com/carolinecerussi/Robot_Translator" className="portfolio__link">Robot Ramble →</a></h1>

                    <p className="portfolio__text">Featuring a user-friendly interface and accurate translation, I really enjoyed building an interactive application using JavaScript, HTML, and CSS that converted numbers into a robotic language output. </p>

                    <Popup trigger={<button><i class="fa fa-play"></i>
                    </button>} position="top center">
                      {close => (
                        <div className="openBox" >
                          <iframe class="embed-responsive-item" width="500px" height="500px" src="https://www.loom.com/embed/ec3fb5fd06f146088415d1d009639d50?sid=2fb84a76-673e-46cf-b3d4-2a635372be96" frameborder="0px"  ></iframe>   <a className="close" onClick={close}>
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
                    <img alt="ipad" className="portfolio__img" src={book2} />
                    <img alt="ipad" className="portfolio__img" src={book3} />
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
                    <img alt="pizza" className="portfolio__img" src={people} />
                    <img alt="interior" className="portfolio__img" src={pizza3} />
                    <img alt="interior" className="portfolio__img" src={yellow} />

                  </div>
                  <h1 className="portfolio__title hover-underline-animation">
                    <a href="https://github.com/carolinecerussi/Super-Slice" 
                   className="portfolio__link">Super Slice →</a></h1>

                  <p className="portfolio__text">
                    By harnessing the power of JavaScript, HTML, and CSS, I created a visually appealing and interactive pizza ordering web application that seamlessly allowed users to select their desired specifications, customize toppings, and submit orders, providing an efficient and enjoyable experience for pizza lovers.</p>
                  <Popup trigger={<button><i class="fa fa-play"></i>
                  </button>} position="top center">
                    {close => (
                      <div className="openBox" >
                        <iframe class="embed-responsive-item" width="600px" height="600px" src="https://www.loom.com/embed/9616493b84e348d3a0b2bc78442ad7f1?sid=80b55573-b4f2-4735-82dd-0a9451f2a0f0" frameborder="0px"  ></iframe>   <a className="close" onClick={close}>
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
                    <img alt="ipad" className="portfolio__img" src={robot1} />
                    <img alt="ipad" className="portfolio__img" src={robot2} />
                    <img alt="ipad" className="portfolio__img" src={robot3} />
                  </div>
                  <h1 className="portfolio__title hover-underline-animation">
                    <a href="https://github.com/carolinecerussi/STARTREKD" className="portfolio__link">'Engage' - A Star Trek Dashboard →</a></h1>
                  <p className="portfolio__text">Star Trek </p>
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
                <div className="portfolio__content">
              <div className="portfolio__box"><div className="portfolio__group">

                <div className="portfolio__text-section">
            
                  <div className="imagesForEach" >
                    <img alt="caroline1" className="portfolio__img" src={caroline1} />
                    <img alt="caroline2" className="portfolio__img" src={caroline2} />
                    <img alt="caroline3" className="portfolio__img" src={caroline3} />
                  </div>
                  <h1 className="portfolio__title hover-underline-animation">
                    <a href="https://github.com/carolinecerussi/Personal-Site" className="portfolio__link">Personal Portfolio Website →</a></h1>

                  <p className="portfolio__text">This is the website you are currently viewing! </p>
                  <Popup trigger={<button><i class="fa fa-play"></i></button>} position=" center">
                    {close => (
                      <div className="openBox" >
                        <iframe className="embed-responsive-item" width="400px" height="400px" src="https://www.loom.com/share/9616493b84e348d3a0b2bc78442ad7f1?sid=a1c14064-4c01-453f-83bf-c291095cb737" frameborder="0px" allowFullScreen ></iframe>   <a className="close" onClick={close}>
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