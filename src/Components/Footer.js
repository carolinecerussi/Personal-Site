import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import {Slide} from 'react-slideshow-image';

const spanStyle = {
  backgroundColor: 'transparent',
  color: 'black',
  fontSize: '18pt',
  textDecoration: 'normal',
  float: 'left',
justifyContent:'center',
paddingRight:'5pt ',

};

const container = {
    width: '100%',
    backgroundColor:'rgba(5, 90, 246, 0.611)',
}

// const divStyle = {
//   alignItems: 'center',
//   display: 'block',
//   justifyContent: 'center',
//   backgroundSize: 'contain',
//   width: '95%',
//   height: '300px',
//   alignItems: 'center',
// };

const slideImages = [
  {
    url: 'https://freight.cargo.site/w/300/i/5129e25bcc693a9d6182f130c2535700b0010e30756ef637dce777cfe293445f/worker3.png',
  },
  {
    url: 'https://freight.cargo.site/w/450/i/f533ec4552572e258ce3a409eeb2f85a0677e350601d90f014b24171dc1834c7/Caroline_Cerussi_SheHer_sanitation_worker_riding_the_subway_new_8e14c8bf-390c-49d7-8946-523c8527437b.png',
  },
  {
    url: 'https://freight.cargo.site/w/300/i/c9052a7dce433954be1b8683dd5885b3f5dceff2c9bc605f52708d925cf35402/worker2.png',
  },
  {
    url: 'https://freight.cargo.site/w/450/i/4a6884062a8b843c5dfd790420e28384a347a8845b7b43451faa24d6ce679e0c/Caroline_Cerussi_SheHer_sanitation_worker_riding_the_subway_new_d9e99e04-a864-48dc-b62f-8d60ef9e6b3d.png',
  },
];

// const footerImage = {
//   display: 'block',
//   width: '100%',
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: 'transparent',
//   scale: '.9',
// };

// const footerStyle = {
//   width: '100%',
//   display: 'block',
//   backgroundColor: 'transparent',
//   alignItems: 'center',
// };

function Footer () {
  return (
    <React.Fragment>
      <div style={container}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />

      <div className="footer">

        <span>
          <a href="https://carolinecerussi.com/">
            <i class="material-symbols-outlined">
              <p style={spanStyle}>home</p>
            </i>
          </a>
          <a target="blank" href="https://www.instagram.com/bratstudio/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
            {'   '} <i class="material-symbols-outlined">
              <p style={spanStyle}>palette</p>
            </i>
          </a>

          <a target="blank" href="https://www.instagram.com">
            {' '} {'   '}

            <i class="fa">  <p style={spanStyle}> &#xf106;</p></i>

          </a>

        </span>

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
</div>
    </React.Fragment>
  );
}

export default Footer;
