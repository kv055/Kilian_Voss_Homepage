import React from "react";
import { Selected_Site_Context } from '../Context_Hub';
import Background from '../assets/giphy_2.gif'
import Header from '../components/navbar_header';

const Portfolio_Page_Component = () => {
    return (
      <div className="bg-no-repeat" style={{backgroundImage: `url(${Background})` , backgroundSize: 'cover'}}>
          <Header></Header>
          <h1 className="text-9xl text-lime-500 Orbitron">Portfolio</h1>
          <p>Section Contains Projects that are either currently hosted live or work i have done as a contrator for clients.
            Since the code for the Project cant be shown due to the proprietary nature of it i have made blog posts about it where i describe the work without revealing too much.
            
          </p>
          <h3 className="flex items-center justify-center Orbitron text-lime-500 m-10">Websites/Web-App's</h3>
          <h4>Jazzingers</h4>
          <h4>Abelian Capital Website</h4>
          <h4>Abelian Capital Frontend Prototype</h4>
          <h3 className="flex items-center justify-center Orbitron text-lime-500 m-10">Webserver Backend API's</h3>
          <h4>Abelian Capital Backtesting API Prototype</h4>
          <h3 className="flex items-center justify-center Orbitron text-lime-500 m-10">Database Architecture</h3>
          <h4>Abelian Capital Database Maintenance Prototype Demo</h4>
          <p>Code shown does not contain any SQL Statements due to security Reasons</p>
          <h3 className="flex items-center justify-center Orbitron text-lime-500 m-10">Independent Contracting Work</h3>
  
      </div>
    );
  };
  
  export default Portfolio_Page_Component;