import React from "react";
import Background from '../assets/giphy_1.gif'
import { Selected_Site_Context } from '../Context_Hub';

const About_Me_Page_Component = () => {
    return (
      <div className="bg-no-repeat" style={{backgroundImage: `url(${Background})` , backgroundSize: 'cover'}}>
  
        <h1 className="text-9xl text-lime-500 Orbitron">About Me</h1>
        <div>
          <h3>Introduction</h3>
          <p></p>
          <h3>My CV</h3>
        </div>
        
        <div>
          <h3>Programming Education</h3>
          <p>
            I'm a self-taught programmer who began learning Java via the Processing framework in 2017 to develop games as a hobby. After graduating in 2019 in a different field, I devoted more time to practice and completed several web development courses in HTML/CSS, vanilla JavaScript, and NodeJS.
            Later on, I started working with ReactJS, which is now my preferred framework for most frontend applications. In 2021, I decided to expand my skills and began taking courses in Python, Flask, and SQL to build backend infrastructure.
            In Early in 2022, I joined a startup project called Abelian Capital, which aims to trade financial assets algorithmically. As a member of the team, I am responsible for building the infrastructure needed to fetch and store live and historical price data for a wide range of financial assets. 
            Additionally, I am developing a framework for backtesting trading strategies and creating the infrastructure for deploying the algorithms live. I am using Python for all of these tasks and would be happy to share the source code for those who are interested.
          </p>
          <h3>Methodology of Skillset Expansion</h3>
          <p></p>
          <h3>Programming Skillset</h3>
          <p></p>
        </div>

      </div>
    );
  };
  
  export default About_Me_Page_Component;

