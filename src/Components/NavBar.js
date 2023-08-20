import React from 'react';
import '../css/navStyle.css';


function NavBar () {
  return (
    <React.Fragment>
      <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
/>

      <div className='navContainer' id = 'headerLink'
>
      

        <ul>
        
   <a className="homeIcon" href="#headerLink">
            <i class="material-symbols-outlined">
              <p>home</p>
            </i>
          </a>
          {/* <a target="blank" href="https://www.instagram.com/bratstudio/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
            {'   '} <i class="material-symbols-outlined">
              <p >palette</p>
            </i>
          </a> */}
        <a href="#aboutLink"> <p>About</p> </a>

          <a href="#skillsLink">
  {' '}<p>
    Skills
  </p>{' '}
</a>

              <a href = '#projectsLink' ><p>Portfolio</p> </a>        
<a href="#contactLink"> <p>Contact</p> </a>

        </ul>
  
      </div>
    </React.Fragment>
  );
}

export default NavBar;
