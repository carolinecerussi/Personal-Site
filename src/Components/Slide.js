import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Rainbow from './Rainbow';

const spanStyle = {
  background: 'transparent',
  color: 'White',

}
const sideStyle = {
  fontSize: '15pt'
}
const divStyle = {
  display: 'block',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '375px',
  width: '450px',
  marginBottom :'5%',
  alignItems:'center',

}
const slideImages = [
  {
    url: 'https://freight.cargo.site/w/750/q/94/i/3ae97fffab276a0cb604018b95549f78d7d491c73b508b4b6118e5cb1cb105f1/cc2-11.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://freight.cargo.site/w/1224/q/94/i/28000b4a7f2c0c224b0f91d59586c3b92fce40bad7d248ee12dae4bbcdb33db8/chair-.jpeg',
    caption: 'Slide 2'
  },
  {
    url: 'https://freight.cargo.site/w/750/q/94/i/73ab02ec6bed4506df6a924db22184d35813f73fd7c57d12e67a31adcafcd211/cc2-20-1.jpg',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
  return (
    
    <div className="slide-container">
      <React.Fragment>
      <Rainbow />
        <div style={sideStyle} >
          <h2>Product Design</h2>
        </div>
      <Slide>

        {slideImages.map((slideImage, index) => (
          <div key={index}>

            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}

      </Slide>
        <Rainbow />
        </React.Fragment>

    </div>

  )
}

export default Slideshow;