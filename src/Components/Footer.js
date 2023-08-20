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
<h2> Questions?</h2>
<p>Name: 
<input id="name" type="text"></input>
<br />
Email:
<input id="email" type="text"></input>
</p>
<br />
<button className='button' type="submit">Send</button>
<br />

  

          <a href="#headerLink">
            {' '} {'   '}

            <i class="fa">  &#xf106;</i>

          </a>

  
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
