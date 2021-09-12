import React from 'react';
import AboutImg from './about/AboutImg';
import AboutInfo from './about/AboutInfo';
import './About.css';

function About() {
  return (
    <div className="about">
      <AboutImg />
      {/* <br /><br /> */}
      <AboutInfo />
    </div>
  )
}

export default About
