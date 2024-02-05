'use client'
import LandingText from "./components/landingtext";
import React from "react";

export default function Home() {

  React.useEffect(() => {
    // window is accessible here.
    console.log("window.innerHeight", window.innerHeight);
  }, []);
  
  if (typeof window !== "undefined") {

    console.log("Hello....")

    function lerpScroll(start, end) {
      var unclamped = (scrollY - start) / (end - start)
      return Math.min(Math.max(unclamped, 0), 0.999)
    }
  
  
    window.addEventListener('scroll', () => {
      document.body.style.setProperty('--scroll1', lerpScroll(0, 1000));
    }, false);
  }

  

  return (
    <div style={{height: '300vh'}}>
      <LandingText></LandingText>
    </div>
  );
}
