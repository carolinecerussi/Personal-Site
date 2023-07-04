import React from 'react';
import "../src/css/grid.css"



function AboutMe() {



  const titleStyle =  {
    float: 'left',
    columnGap: '3rem',
    gridTemplateColumns: 'repeat(1,50%)',
    justifyContent: 'center',

  }

const smallFont = {
  float:'left',
  fontSize: '20pt',

}

const meBoxStyle=  {
    float: 'left',
    columnGap: '1rem',
    gridTemplateColumns: 'repeat(1,50%)',
    justifyContent: 'center',
    textAlign:'left'
  }




  return (
    <React.Fragment>
     
                    <div className="portfolio__text-section">
                    <div className='aboutMeBox' style={meBoxStyle}>
  <h1>ME:</h1>
  <p>Hi,  I'm Caroline, a 29-year-old <a href='https://www.ziprecruiter.com/blog/best-career-paths-scorpio/#:~:text=In%20the%20workplace%2C%20Scorpios%20are,receive%20clear%20and%20direct%20instructions.'><h3>Scorpio</h3></a> living in <h3>Portland, Oregon</h3></p>
<br />   <p> from </p><h3>
 <a> 
Portland, OR</a></h3>
<h4><i class="fa fa-chain"></i> portfolio site</h4>
<h4><i class="fa fa-chain"></i> portfolio site</h4>
<h4><i class="fa fa-envelope-o"></i>: cerussicaroline@gmail.com</h4>

</div>
                        
                     


</div>


      <div className='perogative' style={titleStyle} >
          <h1>MY PEROGATIVE</h1>
          <br />
        <div className='smallerInfo' style={smallFont} >
          <p>As a  coder and product designer, I am driven by a deep love for creating innovative and visually captivating experiences. My journey has been shaped by a  blend of emotional and educational experiences throughout my life, which have left me with a unique perspective that I attempt to bring to anything I create. By combining my knowledge of product development and design with my newfound coding skills, I strive to craft responsive and interesting designs that seamlessly blend form and function.
            My ultimate goal is to find fulfilling work that not only allows me to further develop my front-end development skillset, but also offers a nurturing environment where I can grow and learn from a reliable and positive company. I am so eager to contribute my perspective, dedication, and collaborative spirit to projects that push the boundaries of design and technology, and in doing so, make a meaningful impact in the digital and physical realm. </p>
          <br />
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



    </React.Fragment>
  )

}
export default AboutMe;