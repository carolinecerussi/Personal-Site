import React from "react";
import Rainbow from "./Rainbow";


const skillsHeader = {
    fontWeight:'100',
  backgroundColor:'transparent',
  display:'block',
 height:'auto',
 width:'100%',
  }

  const bigSkills = {
    fontWeight :'100',
    fontSize:'38pt',
    justifyContent:'center',
    display:'block',
    textAlign:'center',

  }
const smallSkillsStyle = {
    marginTop: '-1%',
    fontSize: '13pt',
    textAlign: 'left',
    width: '80vw',
    gridTemplateColumns: 'repeat(1,95%)',
    backgroundColor: 'white',
    borderRadius: '10pt',
    fontWeight:'300',
  
  };
  
  const skillSet = {
    fontSize: '12pt',
   
    color: 'rgb(255, 104, 10)',
  };
  
  const skillsStyle = {
    fontSize: '13pt',
    gridTemplateColumns: 'repeat(1,80%)',
    backgroundColor: 'transparent',
    textAlign: 'left',
    marginTop: '3%',
    width: '100%',
    justifyContent: 'center',
    maxWidth: '100vw',
    lineHeight: '16pt',
  marginBottom:'3%'
  };
  

function Skills() {





    return (
      <React.Fragment>






<Rainbow />



<div style={skillsStyle} id="skillsLink">
    <h1 style={bigSkills}>SKILLS</h1>
  
    <p>
  <h1 style={skillsHeader}>Hard Skills: </h1>


    <p>

  
      <span style={skillSet}>
        <h3>&bull; Html, Css, React JS, JavaScript:</h3>
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
    <br />
   <br />
    <h1 style={skillsHeader}>Soft Skills:</h1> 
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
    <span style={skillSet}><h3>&bull; Problem Solving:</h3></span>
    {' '}
    <div style={smallSkillsStyle}>

      Able to analyze complex issues, identify root causes, and develop innovative solutions when faced with challenges in development or design processes.
    </div>
    <span style={skillSet}><h3>&bull; Time Management:</h3></span>
    {' '}
    <div style={smallSkillsStyle}>

      Skills to prioritize tasks, meet project deadlines, and effectively handle multiple projects simultaneously
    </div>

    <span style={skillSet}><h3>&bull; Adaptability:</h3></span>
    {' '}
    <div style={smallSkillsStyle}>
      Able to adapt to changing technologies, trends, and project requirements, staying up-to-date with the latest front-end development and design practices and being open to learning new skills.
    </div>
    <br />
  </p>

</div>

<Rainbow />
</React.Fragment>
    )
}

export default Skills;