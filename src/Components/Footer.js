import React from 'react';
import "../css/footer.css";

function Footer () {
  return (
    <React.Fragment>
      <div className='footContainer'>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />


        <ul>
          {/* <a href="https://carolinecerussi.com/">
            <i class="material-symbols-outlined">
              <p>home</p>
            </i>
          </a> */}
          {/* <a target="blank" href="https://www.instagram.com/bratstudio/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
            {'   '} <i class="material-symbols-outlined">
              <p >palette</p>
            </i>
          </a> */}

          <a href="#headerLink">
            {' '} {'   '}

            <i class="fa">  &#xf106;</i>

          </a>

        </ul>

        {/* <div className="slide-container">
          <div className="footerImages" style={footerImage}> */}

        {/* <Slide>

              {slideImages.map ((slideImage, index) => (
                <div key={index}>
                  <div
                    style={{
                      ...divStyle,
                      backgroundImage: `url(${slideImage.url})`,
                    }}
                  />
                </div>
              ))}

            </Slide> */}
        {/* </div>;
        </div> */}
      </div>
    </React.Fragment>
  );
}

export default Footer;
