import React from "react";
import Carousel from "./Carousel";
import "../css/imageCarousel.css";
import { data } from "./data";

// export const CarouselItem = ({ item, width }) => {
//   return (
//     <div className="carousel-item" style={{ width: width }}>
//       <div></div>
//       <img className="carousel-img" src={item.icon.default} />
//       <div className="carousel-item-text">{item.description}</div>
//     </div>
//   );
// };

export default function ImageCarouselApp() {
  return (
    <React.Fragment>
    <h1 className="title">CLIENT WORK</h1>
    <Carousel data={data} />
    </React.Fragment>
  )
}