import {Menu, MenuItem, MenuButton} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import {useState} from 'react';
import React from 'react';
import "../css/dropdown.css";
export default function Dropdown () {
  const [selected, changeSelected] = useState (null);

const menuButton ={
  backgroundColor:'transparent',
borderColor:'transparent',
display:'inline',
fontSize:'12pt',
width:'15%'

}

  function handleClicked (event) {
    //changing the selected value
    changeSelected (event.value);
  }
  return (
    <div className="wholeContainer">
      <Menu  menuButton={<button style = {menuButton}
> <div className="MenuIcon">
  <div id="bar" />
  <div id="bar" />
  <div id="bar" />
</div>

 </button>} transition>
        <MenuItem value="About Me" onClick={handleClicked}>
          <a href="#aboutLink">About Me</a> 
        </MenuItem>
        <MenuItem value="Item 2" onClick={handleClicked}>
        <a href="#projectsLink">Portfolio</a>

        </MenuItem>
        <MenuItem value="Item 3" onClick={handleClicked}>
          <a href="#skillsLink">Skills</a>
        </MenuItem>
        <MenuItem value="Item 4" onClick={handleClicked}>
          <a href="#contactLink">Contact Me</a>

        </MenuItem>
      </Menu>
      <div> <br /></div>
    </div>
  );
}
