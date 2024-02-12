import React from 'react';
import "../css/footer.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Map from './Map';
import ImageCarouselApp from './ImageCarouselApp';

function Footer() {
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
      <div className='footContainer' id="contactLink">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <h2> Questions? Comments? </h2>

        <form ref={form} onSubmit={sendEmail} className="--form-control --card --flex-center --dir-column">

          <p>Name:
            <input name="user_name" type="text" required />
            <br />
            Email:
            <input name="user_email" type="text" required />
            </p>

            <br />

            Message:
            <input id="message" name="message" type="text" required />
          <button className='button' type="submit" >Send</button>
        </form>
        
      </div>

      <div id="arrow">
      <a href="#homeLink">
        {' '} {'   '}

        <i class="fa" >  &#xf106;</i>



      </a>
      </div>
    </React.Fragment>

);
}

export default Footer;
