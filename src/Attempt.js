import '../src/css/attempt.css';
import React from 'react';
import iPad from './img/ipad.png';


function Attempt() {

  return (
    <React.Fragment>
      <div className="portfolio__content">
        <div className="portfolio__group">
          <div className='first' >
            <div className="portfolio__box">
              <div className="portfolio__text-section">
                <h1 className="portfolio__title hover-underline-animation">
                  <br />
                  <a href="https://github.com/carolinecerussi/Personal-Site" className="portfolio__link">My Website →</a>
                </h1>
                <p className="portfolio__text">Take a look at the code that makes this website tick. It was built with HTML5, CSS3, and React, and features nested array mapping along with various states to manage front-end rendering.</p>
              </div>
              <img className="portfolio__img" src={iPad} alt="faceGif"  />
              </div>
            </div>
            <div className='second' >
            <div className="portfolio__box">
              <div className="portfolio__text-section">
                <h1 className="portfolio__title hover-underline-animation">
                  <br />
                  <a href="https://github.com/carolinecerussi/Personal-Site" className="portfolio__link">My Website →</a>
                </h1>
                <p className="portfolio__text">Take a look at the code that makes this website tick. It was built with HTML5, CSS3, and React, and features nested array mapping along with various states to manage front-end rendering.</p>
              </div>
              <img className="portfolio__img" src={iPad} alt="faceGif"  />
              <img className="portfolio__img" src={iPad} alt="faceGif"  />

              <img className="portfolio__img" src={iPad} alt="faceGif"  />

              </div>
            </div>
            <div className='third' >
            <div className="portfolio__box">
              <div className="portfolio__text-section">
                <h1 className="portfolio__title hover-underline-animation">
                  <br />
                  <a href="https://github.com/carolinecerussi/Personal-Site" className="portfolio__link">My Website →</a>
                </h1>
                <p className="portfolio__text">Take a look at the code that makes this website tick. It was built with HTML5, CSS3, and React, and features nested array mapping along with various states to manage front-end rendering.</p>
              </div>
              <img className="portfolio__img" src={iPad} alt="faceGif"  />
              </div>
            </div>
          
        </div>
      </div>
    </React.Fragment>
  )
}

export default Attempt;