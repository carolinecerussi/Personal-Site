import React from 'react';
import '../css/grid.css';


function AboutMe() {



  const titleStyle =  {
    float: 'left',
    columnGap: '3rem',
    gridTemplateColumns: 'repeat(1,60%)',
    justifyContent: 'center',

  }

const smallFont = {
  float:'left',
  fontSize: '20pt',

}

const meBoxStyle=  {
    float: 'left',
    columnGap: '1rem',
    gridTemplateColumns: 'repeat(1,60%)',
    justifyContent: 'center',
    textAlign:'left'
  }




  return (
    <React.Fragment>
     
                    <div className="portfolio__text-section">
                    <div className='aboutMeBox' style={meBoxStyle}>
  <h1>ME:</h1>
  <p>Portland OR based <br />
  29-year-old <a href='https://www.ziprecruiter.com/blog/best-career-paths-scorpio/#:~:text=In%20the%20workplace%2C%20Scorpios%20are,receive%20clear%20and%20direct%20instructions.'><h2>Scorpio</h2></a> 
  with an <h3>Industrial Design</h3> degree from <h2>Pratt Institute</h2> of Art and Design.</p>


<h4><i class="fa fa-chain" ></i> Portfolio</h4>
<h4><i class="fa fa-github"></i>
  Github</h4>
<h4><i class="fa fa-envelope-o"></i>: cerussicaroline@gmail.com</h4>
<h4><i class="fa fa-file-o"></i>
  Resume</h4>
</div>
                        
<div className='portfolio__text-section'>
<div className='aboutMeBox' style={meBoxStyle}>

</div>




</div>


      <div className='perogative' style={titleStyle} >
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

  <div className="content">

  <h3>Hard Skills </h3>
          <p>-HTML
            <br />
            -CSS
            <br />
            -JavaScript <br />
            -React</p>
  </div>

</div>

    </React.Fragment>
  )

}
export default AboutMe;