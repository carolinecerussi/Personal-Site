import React from "react";
import '../css/grid2.css';
import Fan from "./Fan";
import Finn from "../img/Finn.png"
function Grid2() {
    return (
      <React.Fragment>
          <div className="grid-container" >
          <div className="project" >1</div>
  <div className="project">
    <div className="project-header">
        <h1>Personal Site</h1>
        <div className="project-pictures">
         <div className="image-grid"> 
<img className="each-image" src={Finn} width={'100%'} ></img>
<img className="each-image" src={Finn} width={'100%'} ></img>
<img className="each-image" src={Finn} width={'100%'} ></img>
        </div>
        </div>
        <Fan />
        <div className="project-description">
            this is the description
        </div>
        <a href="https://github.com/carolinecerussi/Personal-Site" target="_blank"
                      className="portfolio__link">             <i class="fa fa-github"> </i></a>
    </div>
  </div>


  <div className="project">3</div>  
  <div className="project">4</div>
          </div>
        
      </React.Fragment>
    )
  }
  
  export default Grid2;