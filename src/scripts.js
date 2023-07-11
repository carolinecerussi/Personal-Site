import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";

export const useWindowSize = (): number[] => {
  const [windowSize, setWindowSize] = useState ([0, 0]);
  const updateWindowSize = () => {
    setWindowSize ([window.innerWidth, window.innerHeight]);
  };
  useLayoutEffect (() => {
    window.addEventListener ('resize', updateWindowSize);
    updateWindowSize ();
    return () => window.removeEventListener ('resize', updateWindowSize);
  }, []);
  return [windowSize[0], windowSize[1]];
};


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