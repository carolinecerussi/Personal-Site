import React from 'react';
import "../css/footer.css";
import {useRef} from "react";
import emailjs from '@emailjs/browser';

function Footer () {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v0mqgdm', 'template_k2stezb', form.current, 'D6NB00vqk93W3TcK7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <React.Fragment>
      <div className='footContainer'>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
<h2> Contact Me</h2>
<form ref={form} onSubmit={sendEmail} className="--form-control --card --flex-center --dir-column">
<p>Name: 
<input placeholder="name" name="user_name" type="text" required />
<br />
Email:
<input placeholder="email" name="user_email" type="text" required />
<br />
Comment:
<input placeholder="comment" name="message" type="text" required />
</p>
<button className='button' type="submit" >Send</button>
<br />
</form>

  

          <a href="https://carolinecerussi.com">
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
