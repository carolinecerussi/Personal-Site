import '../css/lightUp.css';
import React from 'react';

import ipad from "../img/ipad.png";
function LightUp() {
    return (
<React.Fragment>

<div id="background"></div>

<div id="cards">
  <div class="card">
    <div class="card-content">
      <img src={ipad}></img>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <i class="card-icon fa-regular fa-croissant"></i>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <i class="card-icon fa-regular fa-fish-bones"></i>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <i class="card-icon fa-regular fa-pickleball"></i>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <i class="card-icon fa-regular fa-poo"></i>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <i class="card-icon fa-regular fa-tree-palm"></i>
    </div>
  </div>
</div>

<a id="youtube-link" class="link" href="https://www.youtube.com/shorts/qzZ0iQKoUQ0" target="_blank">
  <i class="fa-brands fa-youtube"></i>
  <span class="roboto-mono">48s Tutorial</span>
</a>


    </React.Fragment>    )
}

export default LightUp;