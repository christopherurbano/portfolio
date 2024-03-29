import React from "react";
import Typewriter from "./typewrite";
import avatar from '../../assets/avatar.png';
import btnImg from '../../assets/download.png';
import resume from '../../assets/chris-urbano-resume.pdf';
import './intro.css';
import { Link } from 'react-scroll';





function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
        
        <span className="hello"><Typewriter text="Hi my name is" delay={100} /></span>
        <span className="introName">Chris Urbano.</span>
        <span className="introText">I like to code stuff.</span>
        <p class="introPara">
            I'm a computer science student at Colorado State University and a software engineer specializing in crafting exceptional digital experiences. My current focus is on developing fluid websites and web apps with a strong emphasis on optimizing the user experience.
        </p>
        <a href={require('../../assets/chris-urbano-resume.pdf')} download="Chris-Urbano_Resume"><button className="btn"><img src={btnImg} alt="btnIMG" className="btnImg"/>resume/csv</button></a>
        </div>
        <img src={avatar} resizeMode="cover" alt="Profile" className="bg"/>
  



    </section>
    
  );
}

export default Intro;
