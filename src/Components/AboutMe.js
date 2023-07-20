import React from 'react';
import Rainbow from './Rainbow';

const meBoxStyle = {
  columnGap: '5%',
  gridTemplateColumns: 'repeat(2, 42.5%)',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  lineHeight: '15pt',
  width: '100%',
  maxWidth: '100vw',
  paddingTop: '5%',
  textAlign:'left',
  float:'left',
};


 const aboutMeWhole = {
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(1,85%)',
  display: 'block',
  backgroundColor:'transparent',
marginBottom:'2%',
marginTop:'1%',
  boxSizing: 'border- box',

}

const headerOneStyle ={
  fontSize :'30pt',
  width: '100%',
  background:'transparent',
display:'inline',
}

 const perogativeStyle = {
  float: 'left',
  gridTemplateColumns: 'repeat(1,90%)',
  justifyContent: 'center',
  fontSize: 'auto',
  marginTop: '2%',
  textAlign: 'center',
  maxWidth:'100vw',
  backgroundColor:'transparent',
};

 const smallFont = {
  fontSize: '13pt',
  textAlign: 'center',
  backgroundColor:' white',

};

const smallSkillsStyle = {
  marginTop: '-1%',
  fontSize: '12pt',
  textAlign: 'left',
  width: '90%',
  backgroundColor: 'transparent',
};

const skillSet = {
  fontSize: '13pt',
  color: 'rgb(255, 104, 10)',
  backgroundColor: 'transparent',
};

const skillsStyle = {
  fontSize: '13pt',
  gridTemplateColumns: 'repeat(1,90%)',
  backgroundColor: 'transparent',
  textAlign: 'left',
  marginTop: '4%',
  width: '100%',
  justifyContent: 'center',
  maxWidth: '100vw',
  lineHeight: '16pt',
};



function AboutMe () {
  return (
    
    <React.Fragment>


      <div className="portfolio__text-section"  style={aboutMeWhole}>


        <div className="perogative" id="aboutLink" style={perogativeStyle}>
        
          <h1 style={headerOneStyle}>MY PEROGATIVE</h1>
          
          <div className="smallerInfo" style={smallFont}>

  
            <p>
              As an energetic and curious native New Yorker with a love for art, I found my passion for design at Pratt Institute. Throughout my studies, I discovered the fascinating connection between space, color, and functionality. I've always been captivated by the potential of design and technology working together to create amazing products. This curiosity led me to explore front-end development, where I've dived into coding and its transformative abilities.

              Through a comprehensive coding program, I've gained confidence in using various languages like C#, HTML, CSS, JavaScript, and React. Alongside my experience in drafting on SolidWorks, product development, and research, I'm well-equipped to take on exciting opportunities in front-end design and web development. My goal is to craft comprehensive, intuitive, and visually appealing designs that leave a lasting impact.
            </p>
            <br />
          </div>     
        </div> 

        <div className="aboutMeBox" style={meBoxStyle}>
          <p>
            <h1 style={headerOneStyle}>ME:</h1> 
            <br />
            <br />
            <p>
              {' '} <p>
                <h2>
<i class='fa fa-map-marker' ></i>&nbsp;
PORTLAND, OR
</h2> based
                <p>29 year-old</p>
                {' '}
             <a
                  href="https://www.ziprecruiter.com/blog/best-career-paths-scorpio/#:~:text=In%20the%20workplace%2C%20Scorpios%20are,receive%20clear%20and%20direct%20instructions."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Scorpio
                </a>
                <br />
                <br />

                with a Bachelor's degree of
                {' '}
                <h2>Industrial Design 
</h2>
                {' '}
                 from
                {' '}
                <h2>Pratt Institute</h2>
                {' '}
                of Art and Design.
              </p>
      &
            </p>
            <p>
              {' '}<h2>Coding Certificate</h2>from
              <h2>Epicodus Coding School </h2>
              React, JavaScript, HTML, CSS, C#
            </p>
          </p>
          <p id="contactLink">
              <h1  style={headerOneStyle}>Contact:</h1>
              <br />
              <br />

              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <a href="tel:+1631-375-8024"  target = '_blank' >    <h4><i class="fa fa-phone" ></i>: 631 375 8024</h4>  
</a>
<a
  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=cerussicaroline@gmail.com"
  target="_blank"
>
  <h4>
    {' '} <i class="fa fa-envelope-o" />: Cerussicaroline@ gmail.com
  </h4>
</a>

              <a href="https://github.com/carolinecerussi" target="_blank">
                <h4>
                  <i class="fa fa-github"> </i>

                   : Github
                </h4>
              </a>
              <a href="https://carolinecerussi.me" target="_blank">
                <h4><i class="fa fa-chain"> </i>: 
                Furniture Portfolio</h4>
              </a>
              <a
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
      <Rainbow />
      <div className="portfolio__text-section" style={aboutMeWhole}>


        <div style={skillsStyle} id="skillsLink">
          <p>
            <h1>Hard Skills: </h1>
          

            <p>
              <br />
              {' '}{' '}
              <span style={skillSet}>
                <h3>&bull; Html, Css, React JS, JavaScript</h3>
              </span>
              {' '}
              <div style={smallSkillsStyle}>
  Creating and styling website content, as well as implementing interactivity and dynamic functionality.</div>

              <span style={skillSet}> <h3>&bull; jQuery:</h3></span>
              {' '}
              <div style={smallSkillsStyle}>
  Interactive and dynamic functionality on websites, such as animations, form validation, and AJAX requests.</div>

              <span style={skillSet}> <h3>&bull; CMS Platforms:</h3></span>
              {' '}
              <div style={smallSkillsStyle}>

              Experience in WordPress, Cargo Collective, SquareSpace,etc, & understanding their structure, theming systems, template customization, and plugin/module development
</div>
              <span style={skillSet}>  <h3>&bull; Front-End Frameworks:</h3></span>
              <div style={smallSkillsStyle}>
     Familiarity with popular front-end frameworks such as Bootstrap or Foundation, which provide pre-designed components and responsive layouts for efficient development.
</div>
              <span style={skillSet}>  <h3>&bull; Git/Github:</h3></span>
              <div style={smallSkillsStyle}>
    Familiarity with popular front-end frameworks such as Bootstrap or Foundation, which provide pre-designed components and responsive layouts for efficient development.
          </div>  </p>

            <span style={skillSet}>   <h3>&bull; UI/UX Design:</h3></span>
            {' '}

            <div style={smallSkillsStyle}>
   Understanding visually appealing and intuitive website designs. Knowledge of wireframing, prototyping, and usability testing.
   </div>
      <br />
            <br /><br />
            <h1>Soft Skills:</h1> <br />
            <span style={skillSet}><h3>&bull; Strong Communication:</h3></span>
            {' '}
            <div style={smallSkillsStyle}>
 Both verbal and written, to collaborate with team members, understand client requirements, and convey ideas and concepts clearly.
</div>
            <span style={skillSet}><h3>&bull; Attention to Detail:</h3></span>
            {' '}
            <div style={smallSkillsStyle}>
 Accuracy in coding, design implementation, and overall website quality, ensuring a polished and professional end product.
</div>
            <span style={skillSet}><h3>&bull; Problem Solving</h3></span>
            {' '}
            <div style={smallSkillsStyle}>

            Able to analyze complex issues, identify root causes, and develop innovative solutions when faced with challenges in development or design processes.
</div>
            <span style={skillSet}><h3>&bull; Time Management</h3></span>
            {' '}
            <div style={smallSkillsStyle}>

            Skills to prioritize tasks, meet project deadlines, and effectively handle multiple projects simultaneously
            </div>

            <span style={skillSet}><h3>&bull; Adaptability</h3></span>
            {' '}
            <div style={smallSkillsStyle}>
    Able to adapt to changing technologies, trends, and project requirements, staying up-to-date with the latest front-end development and design practices and being open to learning new skills.
</div>
<br />
          </p>

        </div>
      </div>

    </React.Fragment>
  );
}

export default AboutMe;
