import '../src/css/attempt.css';
import React from 'react';
import iPad from './img/ipad.png';


function Attempt() {

    return (
        <React.Fragment>
            <div className="portfolio__content">
                <div className='first' >
                    <div className="portfolio__group">
                        <div className="portfolio__box">
                            <div className="portfolio__text-section">
                                <h1 className="portfolio__title hover-underline-animation">
                                <span className='video'>                    <iframe width="90%" height='800' src="https://www.loom.com/embed/4073508f53ad410ea51a0c7375bf05d0?sid=8c95eace-da02-4eb9-b5c7-fa83162c4669" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>
                                </span>
                                <br />
                                    <a href="https://github.com/carolinecerussi/Personal-Site" className="portfolio__link">My Website →</a>
                                </h1>
                                <p className="portfolio__text">Take a look at the code that makes this website tick. It was built with HTML5, CSS3, and React, and features nested array mapping along with various states to manage front-end rendering.</p>
                         
                            </div>
                            <img className="portfolio__img" src={iPad} alt="faceGif" width='50%'/>

                        </div>

                        <div className='second' >
                            <div className="portfolio__box">

                                <img className="portfolio__img" src={iPad} alt="faceGif" />
                                <div className="portfolio__text-section">
                                    <h1 className="portfolio__title hover-underline-animation">
                                        <a href="https://github.com/carolinecerussi/Personal-Site" className="portfolio__link">My Website →</a>
                                    </h1>
                                    <p className="portfolio__text">Take a look at the code that makes this website tick. It was built with HTML5, CSS3, and React, and features nested array mapping along with various states to manage front-end rendering.</p>
                                    <span className='video'>                    <iframe width="100%" height='800' src="https://www.loom.com/embed/4073508f53ad410ea51a0c7375bf05d0?sid=8c95eace-da02-4eb9-b5c7-fa83162c4669" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>
                                    </span>
                                </div>
                            </div>               </div>

                        <div className='third' >
                            <div className="portfolio__box">
                                <img className="portfolio__img" src={iPad} alt="faceGif" />
                                <div className="portfolio__text-section">
                                    <h1 className="portfolio__title hover-underline-animation">
                                        <a href="https://github.com/carolinecerussi/Personal-Site" className="portfolio__link">My Website →</a>
                                    </h1>
                                    <p className="portfolio__text">Take a look at the code that makes this website tick. It was built with HTML5, CSS3, and React, and features nested array mapping along with various states to manage front-end rendering.</p>
                                    <span className='video'>                    <iframe width="100%" height='800' src="https://www.loom.com/embed/4073508f53ad410ea51a0c7375bf05d0?sid=8c95eace-da02-4eb9-b5c7-fa83162c4669" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>
                                    </span>
                                </div>
                            </div>               </div>
</div>
</div>
</div>
        </React.Fragment>
    )
}

export default Attempt;