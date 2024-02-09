import React, {useState, useEffect} from "react";
import "../css/imageCarousel.css";


export default function Carousel({data}){

  const [currentIndex, setCurrentIndex] =useState(0);
  const [fade, setFade] = useState(false);
const [pauseAutoplay, setPauseAutoPlay] = useState(false)

  //auto play
useEffect(()=>{
  const interval = setInterval(() =>{
    !pauseAutoplay &&
  setCurrentIndex((prevIndex) => (prevIndex +1 ) % data.length);
  setFade(true);
}, 2500);

return() => clearInterval(interval);
})

//next and prev func 

const handleNext=()=> {
  setCurrentIndex((prevIndex) => (prevIndex +1) % data.length);
  setPauseAutoPlay(true)
}

const handlePrev=()=> {
  setCurrentIndex((prevIndex) => (prevIndex -1) % data.length);
  setPauseAutoPlay(true)

}

  return (
    <React.Fragment>
  <img src={data[currentIndex].img} width="400px" className={"carousel-img " + (fade && 'fade')} />
<div className="carousel-detail">
  <h2 className="carousel-title">{data[currentIndex].title ? data[currentIndex].title : "Title"}</h2>
  <p className="carousel-text">{data[currentIndex].text ? data[currentIndex].text : "Text"} blah</p>
  {/* <a className="start-button" target="_blank" href={data[currentIndex].link}>Start Learning</a> */}
</div>
<button className="carousel-button prev-button" onClick={handlePrev}>Prev</button>
<button className="carousel-button next-button" onClick={handleNext}>Next</button>

    </React.Fragment>
  )
}