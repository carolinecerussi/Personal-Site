import React from 'react';
import Border from './Border';
import "../src/css/border.css"
function AboutMe() {



  const paragraphStyle = {
    color: "black",
    fontSize: '25pt',
    fontFamily: "Bagel Fat One ",
    width: '100%',
    backgroundColor: 'transparent',
    float:'left',

  }

const smallFont = {
  width:'100%',
  float:'left',
  textAlign:'center',
  fontSize: '20pt',
  fontFamily: "Barlow ",
  display:'box',

}

const meBoxStyle=  {
  color:'black',
  textAlign:'center',
  width:'100%',


}

  return (
    <React.Fragment>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@200&family=Press+Start+2P&display=swap" rel="stylesheet">
      </link>
<Border />
<div className='aboutMeBox' style={meBoxStyle}>
  <h1>ME:</h1>
  <p> 29 yo <a>scorpio</a></p>
<br />   <p> from </p><h3><a>Portland, OR</a></h3>
<div className="portfolio__content">
                    <div className="portfolio__box"><div className="portfolio__group">
                    {/* <img alt="ipad" className="portfolio__img" src={ipad} /> */}

                    <div className="portfolio__text-section">
                      <h1 className="portfolio__title hover-underline-animation"><a href="https://graphql-nextjs-blog-pink.vercel.app/" className="portfolio__link">ME →</a></h1><p className="portfolio__text">This open source blog pulls data from GraphCMS using GraphQL. It features posts written in Markdown, featured posts, related posts, categories, authors, user submitted comments, and a Tailwind styled layout.</p>
                        </div></div>
                        </div>
                        </div>


</div>



      <div className='perogative' style={paragraphStyle} >
      <div className='perogative'>
          <h1>My Perogative</h1>
          <br />
        </div>
        <div className='smallerInfo' style={smallFont} >
          <p>As a  coder and product designer, I am driven by a deep love for creating innovative and visually captivating experiences. My journey has been shaped by a  blend of emotional and educational experiences throughout my life, which have left me with a unique perspective that I attempt to bring to anything I create. By combining my knowledge of product development and design with my newfound coding skills, I strive to craft responsive and interesting designs that seamlessly blend form and function.
            My ultimate goal is to find fulfilling work that not only allows me to further develop my front-end development skillset, but also offers a nurturing environment where I can grow and learn from a reliable and positive company. I am so eager to contribute my perspective, dedication, and collaborative spirit to projects that push the boundaries of design and technology, and in doing so, make a meaningful impact in the digital and physical realm. </p>
          <br />


<div className="hardSkills">

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
        </div>
      </div>



    </React.Fragment>
  )

}
export default AboutMe;