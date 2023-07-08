
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
          <h1 className="section__title">PORTFOLIO</h1>
          <span className="section__subtitle">code projects created using html, CSS, JavaScript, React, and C#</span>
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

                  <p className="portfolio__text">As a developer, I had a blast building an application using JavaScript, HTML, and CSS that allows users to interact with a robot language translation feature. The concept was simple yet intriguing: users enter a number into a form, and the application converts it into robot language, generating a response based on the digits entered.

To bring this idea to life, I started by designing a user-friendly interface using HTML and CSS, ensuring it had a futuristic and robotic feel. Next, I implemented the logic using JavaScript to capture the user's input and process it into robot language. The application parsed each digit and mapped it to a corresponding robot phrase or response.

Throughout the development process, I paid attention to detail, ensuring the translation algorithm was accurate and the user experience was smooth. I added interactive elements to enhance engagement, such as animations and sound effects that further immersed users in the robotic world.

Testing played a crucial role in refining the application. I conducted various test scenarios, inputting different numbers and verifying the correct translation and response generation.

In the end, the application successfully translated numbers into robot language, creating a fun and entertaining experience for users. By combining JavaScript's power with HTML and CSS's ability to create visually appealing interfaces, I was able to build an application that demonstrated the exciting potential of human-robot interaction.</p>

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

                  <p className="portfolio__text">Creating a React JavaScript web application for a book club book log involves several steps.

First, the application's structure and components need to be planned out, including a form component for users to add new books and a library component to display the book suggestions.

Next, the necessary React components are developed, including form input fields, submit buttons, and a dynamic library section.

The form component is configured to capture user input and add the book data to an online database or storage.

The library component is designed to fetch and display the book suggestions and favorites from the database, allowing users to view and interact with the logged books.

Authentication and authorization features can be implemented to ensure privacy and security.</p>

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
                <div className="imagesForEach" >
                <img alt="ipad" className="portfolio__img" src={shelter1} />
                  <img alt="ipad" className="portfolio__img" src={shelter2} />
                  <img alt="ipad" className="portfolio__img" src={shelter3} />
                  </div>
                  <h1 className="portfolio__title hover-underline-animation">
                    <a href="https://github.com/carolinecerussi/Alien-Adopt" className="portfolio__link">Alien Adoption→</a></h1>

                  <p className="portfolio__text">Creating my own Alien Adoption website using HTML and CSS was an incredible coding experience. From the moment I started designing the website, I envisioned a platform that would showcase the adorable extraterrestrial pets up for adoption. With HTML, I carefully structured the web pages, ensuring a seamless flow of information. I used CSS to enhance the visual appeal, selecting captivating fonts, colors, and styling elements that brought the alien pets to life. One of the key features I implemented was making each pet's picture clickable, allowing visitors to delve into the details of their favorite alien companions.

Implementing the adoption form on each alien's page was a crucial aspect of the website. Using HTML, I created a user-friendly form that allowed potential adopters to express their interest and provide their personal details effortlessly. The form seamlessly integrated with the overall design of the website, ensuring a smooth adoption process for users. It was truly fulfilling to see the project come together, enabling visitors to browse the available pets, click on their pictures for more information, and easily fill out adoption forms to take the first step towards welcoming an extraterrestrial friend into their lives.
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

                  <p className="portfolio__text">  In creating a pizza ordering web application, I arnessed the power of JavaScript, HTML, and CSS to deliver a seamless and interactive user experience. Starting with the design, I crafted a visually appealing interface using HTML and CSS, ensuring it was intuitive and easy to navigate. Leveraging JavaScript, I implemented features such as dynamic menu options, customizable toppings, and a responsive order form. The application allowed users to easily select their desired pizza specifications, customize their toppings, and submit their orders. Through the combined use of JavaScript, HTML, and CSS, I successfully created a user-friendly pizza ordering web application that made the process efficient and enjoyable for pizza lovers.</p>
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
                      <iframe class="embed-responsive-item" width="400px" height="400px" src="https://www.youtube.com/embed/qN3OueBm9F4?autoplay=1" frameborder="0px" allowFullScreen ></iframe>   <a className="close" onClick={close}>
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