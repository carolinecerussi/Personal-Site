import React from "react";
import { useEffect } from "react";
import { useState } from "react";



export const Screen = () => {
const [windowWidth, setWindowWidth] = useState(window.innerWidth)
const [windowHeight, setWindowHeight] = useState(window.innerHeight)
const setWindowDimensions = () => {
  setWindowWidth(window.innerWidth)
  setWindowHeight(window.innerHeight)
}
useEffect(() => {
  window.addEventListener('resize', setWindowDimensions);
  return () => {
    window.removeEventListener('resize', setWindowDimensions)
  }
}, [])
return(
  <div>Width: {windowWidth} Height: {windowHeight}</div>
 )
}
export default Screen;