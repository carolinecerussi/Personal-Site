import React from 'react';
import '../css/grid.css';
import Popup from 'reactjs-popup';
import resume1 from '../img/cac.png';
import Rainbow from './Rainbow';

 const aboutMeWhole = {
  width: '100%',
  padding: '1%',
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(1,95%)',
  display: 'block',
  backgroundColor:'transparent',

}

  const popUpStyle=  {
  textAlign: 'left',
  cursor: 'pointer',
}
const  skillsStyle = {
  fontSize: '12pt',
  textAlign: 'left',
  display: 'inline-block',
  marginLeft: '4%',
  marginRight: '4%',
  lineHeight: '12pt',
  width: '90%',
  justifyContent: 'center',
}
 const perogativeStyle = {
  float: 'left',
  gridTemplateColumns: 'repeat(1,80%)',
  justifyContent: 'center',
  fontSize: '20pt',
  lineHeight: '20pt',
  marginTop: '5%',
  textAlign: 'center',
};

 const smallFont = {
  float: 'left',
  fontSize: '14pt',
  lineHeight: '20pt',
  textAlign: 'center',
};

 const meBoxStyle = {
  columnGap: '4%',
  gridTemplateColumns: 'repeat(2,48%)',
  textAlign: 'left',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  width: '100%',
  marginLeft: '10%',
  lineHeight: '12pt',
  float: 'left',
};

 const skillSet = {
  fontSize: '13pt',
  lineHeight: '9pt',
  color: 'rgb(255, 104, 10)',
  marginTop: '15%',
};

function AboutMe () {
  return (
    <React.Fragment>

      <div className="portfolio__text-section" style={aboutMeWhole}>

        <div className="perogative" style={perogativeStyle}>
          <h1>MY PEROGATIVE</h1>
          <div className="smallerInfo" style={smallFont}>
            <br />
            <p>
              As an energetic and curious New Yorker with a love for art, I found my passion for design at Pratt Institute. Throughout my studies, I discovered the fascinating connection between space, color, and functionality. I've always been captivated by the potential of design and technology working together to create amazing products. This curiosity led me to explore front-end development, where I've dived into coding and its transformative abilities.

              Through a comprehensive coding program, I've gained confidence in using various languages like C#, HTML, CSS, JavaScript, and React. Alongside my experience in drafting on SolidWorks, product development, and research, I'm well-equipped to take on exciting opportunities in front-end design and web development. My goal is to craft comprehensive, intuitive, and visually appealing designs that leave a lasting impact.
            </p>
          </div>
        </div>

        <div className="aboutMeBox" style={meBoxStyle}>
          <p>
            <h1>ME:</h1> <br />
            <p>
              {' '} <p>
                <h2>PORTLAND OR</h2> based
                <h3>29 year-old</h3>
                {' '}
                <a
                  href="https://www.ziprecruiter.com/blog/best-career-paths-scorpio/#:~:text=In%20the%20workplace%2C%20Scorpios%20are,receive%20clear%20and%20direct%20instructions."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Scorpio</h3>
                </a>
                with an
                {' '}
                <h2>Industrial Design</h2>
                {' '}
                degree from
                {' '}
                <h2>Pratt Institute</h2>
                {' '}
                of Art and Design.
              </p>
              <br />
            </p>
            <p>
              {' '}<h2>Coding Certificate</h2>from
              <h3>Epicodus Coding School </h3>
              React, JavaScript, HTML, CSS, C#
            </p>
          </p>
          <p>
            <div >
              <h1>Contact:</h1>
              <br />
              <a href="https://github.com/carolinecerussi" target="_blank">
                <h3>
                  <i class="fa fa-github"> </i>

                  : Github
                </h3>
              </a>
              <a href="https://carolinecerussi.me" target="_blank">
                <h3><i class="fa fa-chain"> </i>: Website</h3>
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=cerussicaroline@gmail.com"
                target="_blank"
              >
                <h3>
                  {' '} <i class="fa fa-envelope-o" />cerussicaroline@gmail.com
                </h3>
              </a>
            </div>
            <Popup
              style={popUpStyle}
              trigger={
                <a>
                  <p><i class="fa fa-file-o" />: Resume</p>
                </a>
              }
              position="top left"
            >
              {close => (
                <div className="openBox">
                  <img
                    class="embed-responsive-item"
                    width="800px"
                    height="900px"
                    src={resume1}
                    frameborder="1px"
                  />
                  {' '}{' '}{' '}
                  <a className="close" onClick={close}>
                    &times;
                  </a>
                </div>
              )}

            </Popup>
          </p>

        </div>
      </div>
      <Rainbow />
      <div className="portfolio__text-section" style={aboutMeWhole}>

        <div style={skillsStyle}>
          <p>
            <h1>Hard Skills: </h1>
            <br />
            <p>
              {' '}{' '}
              <span style={skillSet}>
                <h3>+ Html, Css, React JS, JavaScript</h3>
              </span>
              {' '}
              creating and styling website content, as well as implementing interactivity and dynamic functionality.

              <span style={skillSet}> <h3>+ jQuery:</h3></span>
              {' '}
              interactive and dynamic functionality on websites, such as animations, form validation, and AJAX requests.

              <span style={skillSet}> <h3>+ CMS Platforms:</h3></span>
              {' '}
              experience in WordPress, Cargo Collective, SquareSpace,etc, & understanding their structure, theming systems, template customization, and plugin/module development

              <span style={skillSet}>  <h3>+ Front-End Frameworks:</h3></span>
              Familiarity with popular front-end frameworks such as Bootstrap or Foundation, which provide pre-designed components and responsive layouts for efficient development.

              <span style={skillSet}>  <h3>+ Git/Github:</h3></span>
              Familiarity with popular front-end frameworks such as Bootstrap or Foundation, which provide pre-designed components and responsive layouts for efficient development.
            </p>

            <span style={skillSet}>   <h3>+ UI/UX Design:</h3></span>
            {' '}
            understanding visually appealing and intuitive website designs. Knowledge of wireframing, prototyping, and usability testing.
            <br />
            <br /><br /><br /><br />
            <h1>Soft Skills:</h1> <br />
            <span style={skillSet}><h3>+ Strong Communication:</h3></span>
            {' '}
            both verbal and written, to collaborate with team members, understand client requirements, and convey ideas and concepts clearly.

            <span style={skillSet}><h3>+ Attention to Detail:</h3></span>
            {' '}
            accuracy in coding, design implementation, and overall website quality, ensuring a polished and professional end product.

            <span style={skillSet}><h3>+ Problem Solving</h3></span>
            {' '}
            able to analyze complex issues, identify root causes, and develop innovative solutions when faced with challenges in development or design processes.

            <span style={skillSet}><h3>+ Time Management</h3></span>
            {' '}
            skills to prioritize tasks, meet project deadlines, and effectively handle multiple projects simultaneously
            <span style={skillSet}><h3>+ Adaptability</h3></span>
            {' '}
            able to adapt to changing technologies, trends, and project requirements, staying up-to-date with the latest front-end development and design practices and being open to learning new skills.

          </p>

        </div>
      </div>

    </React.Fragment>
  );
}

export default AboutMe;
