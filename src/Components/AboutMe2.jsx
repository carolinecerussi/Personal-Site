import React from 'react';
import '../css/about2.css'; // Import CSS file for styling
import Map from './Map';
const About2 = () => {
    return (

        <React.Fragment >
            <h1 id="prerogative-h1">MY PREROGATIVE</h1>
            <div className='prerogative' id='about-link'>

                <p >
                    As an energetic and curious native New Yorker with a love for art, I found my passion for design at Pratt Institute. Throughout my studies, I discovered the fascinating connection between space, color, and functionality. I've always been captivated by the potential of design and technology working together to create amazing products. This curiosity led me to explore front-end development, where I've dived into coding and its transformative abilities.
                    Through a comprehensive coding program, I've gained confidence in using various languages like React, HTML, CSS, JavaScript, and C#. Alongside my experience in drafting on SolidWorks, product development, and research, I'm well-equipped to take on exciting opportunities in front-end design and web development. My goal is to craft comprehensive, intuitive, and visually appealing designs that leave a lasting impact.
                </p>
            </div>
            <div className="container">


                <div className="column">

                    <h2 id="header-h2">
                        <Map /> <i class="fa fa-map-marker"></i>
                        {' '} PORTLAND  OR
                    </h2>
                    <p>30 year-old <br />  
                    
                     <a
                     className="wavy"
                        href="https://www.ziprecruiter.com/blog/best-career-paths-sagittarius/#:~:text=If%20given%20enough%20flexibility%20and,great%20candidate%20for%20leadership%20roles."
                        target="_blank"
                        id="sag-a"
                        rel="noopener noreferrer"
                    >
                         <span  >S</span>
                         <span  >a</span>
                         <span  >g</span>
                         <span  >i</span>
                         <span >t</span>
                         <span >t</span>
                         <span >a</span>
                         <span >r</span>
                         <span >i</span>
                         <span >u</span>
                         <span >s</span>


                    </a>
                        with a Bachelor's degree of

                        <h2>Industrial Design
                        </h2>

                        from

                        <h2>Pratt Institute</h2>

                        of Art and Design.

                        &

                        <h2>Coding Certificate</h2>from
                        <h2>Epicodus Coding School </h2>
                        React, JavaScript, HTML, CSS, C#
                    </p>
                </div>

                <div className="column">
                    <h2 id="header-h2">CONTACT:</h2>

                    <p id="contact-p">

                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                        <a
                            href="tel:+1631-375-8024" id="contact-a" target='_blank' >    <h4><i class="fa fa-phone" ></i>: 631 375 8024</h4>
                        </a>
                        <a

                            id="contact-a" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=cerussicaroline@gmail.com"
                            target="_blank"
                        >
                            <h4>
                                {' '} <i class="fa fa-envelope-o" />: Cerussicaroline@gmail.com
                            </h4>
                        </a>

                        <a
                            id="contact-a" href="https://github.com/carolinecerussi" target="_blank">
                            <h4>
                                <i class="fa fa-github"> </i>

                                : Github
                            </h4>
                        </a>

                        <a
                            id="contact-a"
                            href="https://docs.google.com/document/d/e/2PACX-1vQ9WszdgVTh7EU6hghiV9wjkM097J8ip8j5rEjPmAec4BRMxp99P7SQqaI8mHh7SrRAuiMsamsEDGr1/pub"
                            target="_blank"
                        >
                            <h4>
                                <i class="fa fa-file-o" />: Resume
                            </h4>
                        </a>
                    </p>
                </div>

            </div>
        </React.Fragment>

    );
}

export default About2;