import React from 'react';
import '../css/grid.css';
import Popup from 'reactjs-popup';
import resume1 from '../img/resume1.png';
function AboutMe() {


  const popUpStyle = {
    textAlign: 'left',
    cursor: 'pointer',

  }
const skillsStyle ={
  fontSize: '11pt',
  textAlign:'left',

}
  const perogativeStyle = {
    float: 'left',
    gridTemplateColumns: 'repeat(1,75%)',
    justifyContent: 'center',
marginTop: '2%',
fontSize: '20pt',
  }

  const smallFont = {
    float: 'left',
    fontSize: '14pt',

  }

  const meBoxStyle = {
    columnGap: '1rem',
    gridTemplateColumns: 'repeat(3,25%)',
    justifyContent: 'center',
    textAlign: 'left',
    display:'grid',
  }




  return (
    <React.Fragment>
      <div className="portfolio__text-section">
        <div className='aboutMeBox' style={meBoxStyle}>
         <p><h1>ME:</h1>
       <p>  <p><h1>Portland, OR</h1> based
            <h3>29 year-old</h3> <a href='https://www.ziprecruiter.com/blog/best-career-paths-scorpio/#:~:text=In%20the%20workplace%2C%20Scorpios%20are,receive%20clear%20and%20direct%20instructions.'><h3>Scorpio</h3></a>
            with an <h2>Industrial Design</h2> degree from <h2>Pratt Institute</h2> of Art and Design.
            </p>
            <br />
            </p> 
          <p> <h2>Coding Certificate</h2>from
           <h3>Epicodus Coding School </h3>
           React, JavaScript, HTML, CSS, C#
            </p>
            </p>
          <p> 
          <h1>Contact:</h1>
         <h3><i class="fa fa-github"></i>
             Github</h3>
          <h3><i class="fa fa-chain" > </i>     Website</h3>
         
          <h3><i class="fa fa-envelope-o"></i>: cerussicaroline@gmail.com</h3>

          <Popup style={popUpStyle} trigger={<a><p><i class="fa fa-file-o"></i>  Resume</p>
          </a>} position="top right">
            {close => (
              <div className="openBox" >
                <img class="embed-responsive-item" width="800px" height="1000px" src={resume1} frameborder="0px" allowFullScreen />   <a className="close" onClick={close}>
                  &times;
                </a>
              </div>
            )}

          </Popup>
          </p>
          <div style={skillsStyle}>
          <p>
          <h1>Hard Skills: </h1>
          <p><h3>+ HTML, CSS, & JavaScript:</h3> creating and styling website content, as well as implementing interactivity and dynamic functionality.
     
            <h3>+ JavaScript/jQuery:</h3> interactive and dynamic functionality on websites, such as animations, form validation, and AJAX requests.
        

            <h3>+ CMS Platforms:</h3> experience in WordPress, Drupal, Joomla,etc, & understanding their structure, theming systems, template customization, and plugin/module development

            <h3>+ Front-End Frameworks:</h3>Familiarity with popular front-end frameworks such as Bootstrap or Foundation, which provide pre-designed components and responsive layouts for efficient development.</p>
        

            <h3>+ UI/UX Design:</h3> understanding visually appealing and intuitive website designs. Knowledge of wireframing, prototyping, and usability testing.
            <br />

<h1>Soft Skills:</h1>
<h3>+ Strong Communication:</h3> both verbal and written, to collaborate with team members, understand client requirements, and convey ideas and concepts clearly.
 

            <h3>+ Attention to Detail:</h3> accuracy in coding, design implementation, and overall website quality, ensuring a polished and professional end product.
 
            <h3>+ Problem Solving:</h3>  able to analyze complex issues, identify root causes, and develop innovative solutions when faced with challenges in development or design processes.

            <h3>+ Time Management:</h3> skills to prioritize tasks, meet project deadlines, and effectively handle multiple projects simultaneously
            <h3>+ Adaptability:</h3> able to adapt to changing technologies, trends, and project requirements, staying up-to-date with the latest front-end development and design practices and being open to learning new skills.

</p>
</div>
        </div>


        <div className='perogative' style={perogativeStyle} >
          <h1>MY PEROGATIVE</h1>
          <br />
          <div className='smallerInfo' style={smallFont} >
            {/* <p>As a  coder and product designer, I am driven by a deep love for creating innovative and visually captivating experiences. My journey has been shaped by a  blend of emotional and educational experiences throughout my life, which have left me with a unique perspective that I attempt to bring to anything I create. By combining my knowledge of product development and design with my newfound coding skills, I strive to craft responsive and interesting designs that seamlessly blend form and function.
            My ultimate goal is to find fulfilling work that not only allows me to further develop my front-end development skillset, but also offers a nurturing environment where I can grow and learn from a reliable and positive company. I am so eager to contribute my perspective, dedication, and collaborative spirit to projects that push the boundaries of design and technology, and in doing so, make a meaningful impact in the digital and physical realm. </p> */}
            <br />
            <p> As an energetic, curious, and art-loving New Yorker, my passion for design led me to pursue industrial design at Pratt Institute. Throughout my studies, I developed a deep appreciation for the intricate relationship between space, color, and functionality.

              Driven by an insatiable curiosity about the future, I am fascinated by the synergistic potential of design and technology in creating awe-inspiring products. Motivated by this passion, I embarked on a journey into the world of front-end development, delving into coding and its transformative capabilities.

              Having successfully completed a comprehensive coding program, I have gained confidence in utilizing various languages such as C#, HTML, CSS, JavaScript, and React. These technical skills, combined with my prior experience in drafting on SolidWorks, product development, and research, as well as my unwavering commitment to crafting comprehensive, intuitive, and visually captivating designs, have equipped me for the exciting opportunities that lie ahead in front-end design and web development.</p>
          </div>
        </div>



      </div>

    </React.Fragment>
  )

}
export default AboutMe;