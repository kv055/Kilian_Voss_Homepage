import React from "react";
import Background from '../assets/giphy_1.gif'
import { Selected_Site_Context } from '../Context_Hub';
import Header from '../components/navbar_header';

const About_Me_Page_Component = () => {
    return (
      <div className="bg-no-repeat" style={{backgroundImage: `url(${Background})` , backgroundSize: 'cover'}}>
        <Header></Header>
        <div className="flex flex-col">
          <h3 className="flex items-center justify-center Orbitron text-lime-500 m-10">Introduction</h3>
            <p className="flex items-center justify-center Orbitron text-slate-800 px-28">

            </p>
          <h3 className="flex items-center justify-center Orbitron text-lime-500 m-10">My CV</h3>
            </div>
            
            <div>
          <h3 className="flex items-center justify-center Orbitron text-lime-500 m-10">Programming Education</h3>
            <p className="flex items-center justify-center Orbitron text-slate-800 px-28">
              I'm a self-taught programmer who began learning Java via the Processing framework in 2017 to develop games as a hobby. After graduating in 2019 in a different field, I devoted more time to practice and completed several web development courses in HTML/CSS, vanilla JavaScript, and NodeJS.
              Later on, I started working with ReactJS, which is now my preferred framework for most frontend applications. In 2021, I decided to expand my skills and began taking courses in Python, Flask, and SQL to build backend infrastructure.
              In Early in 2022, I joined a startup project called Abelian Capital, which aims to trade financial assets algorithmically. As a member of the team, I am responsible for building the infrastructure needed to fetch and store live and historical price data for a wide range of financial assets. 
              Additionally, I am developing a framework for backtesting trading strategies and creating the infrastructure for deploying the algorithms live. I am using Python for all of these tasks and would be happy to share the source code for those who are interested.
            </p>
          <h3 className="flex items-center justify-center Orbitron text-lime-500 m-10">Methodology of Skillset Expansion</h3>
            <p className="flex items-center justify-center Orbitron text-slate-800 px-28">

            </p>
          <h3 className="flex items-center justify-center Orbitron text-lime-500 m-10">Programming Skillset</h3>
            <p className="flex items-center justify-center Orbitron text-slate-800 px-28">

            </p>
        </div>

      </div>
    );
  };
  
  export default About_Me_Page_Component;

