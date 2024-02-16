import React from "react";
import './skills.css'
import UIDesign from '../../assets/ui.png'
import ParagraphDropdown from "./paragraphdropdown";
import devLogo from "../../assets/devLogo.png";



function Skills() {
  return (
    <section id = 'skills'>
      <div className = "skillsContent">
        <h1 class = 'skillHeader'>My Skill Set</h1>
        <ParagraphDropdown />
        <img src={devLogo} resizeMode="cover" alt="Profile" className="bg"/>
        <h2 class = 'skill'>Full Stack Development</h2>
        <span className="fullStack">I love working on both front end and backend systems</span>
        <span className="languagesISpeak">Languages I speak</span>
        <span className="languages"> Java, JavaScript, C, C++. Python, HTML, CSS, React JS, Git </span>


        
        
      </div>
    </section>
  );
}

export default Skills;

// Add three sections below the paragraph section. Im thinking Web/App development, and Algorithms and Data Structures, Software Development and tools 
