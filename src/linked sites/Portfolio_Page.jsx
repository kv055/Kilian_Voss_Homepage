import React from "react";
import { Selected_Site_Context } from '../Context_Hub';
import Background from '../assets/krieg.gif'
import Header from '../components/navbar_header';
import Footer from '../components/footer'

const Portfolio_Page_Component = () => {
    return (
      <div className="bg-no-repeat min-h-screen" style={{backgroundImage: `url(${Background})` , backgroundSize: 'cover'}}>
        
        <Header></Header>
        
        <div className="flex flex-row">

          <div className="ring-2 m-10 w-1/2">
            <h3 className="flex items-center justify-center Orbitron text-2xl text-rose-600 m-10">Websites/Web-App's</h3>
            <h4 className="flex items-center justify-center Orbitron text-lg text-lime-500 m-10">Jazzingers</h4>
            <h4 className="flex items-center justify-center Orbitron text-lg text-lime-500 m-10">Abelian Capital Website</h4>
            <h4 className="flex items-center justify-center Orbitron text-lg text-lime-500 m-10">Abelian Capital Frontend Prototype</h4> 
          </div>

          <div className="ring-2 m-10 w-1/2">
            <h3 className="flex items-center justify-center Orbitron text-2xl text-rose-600 m-10">Webserver Backend API's</h3>
            <h4 className="flex items-center justify-center Orbitron text-lg text-lime-500 m-10">Abelian Capital Backtesting API Prototype</h4>
          </div>

          <div className="ring-2 m-10 w-1/2">
            <h3 className="flex items-center justify-center Orbitron text-2xl text-rose-600 m-10">Database Architecture</h3>
            <h4 className="flex items-center justify-center Orbitron text-lg text-lime-500 m-10">Abelian Capital Database Maintenance Prototype Demo</h4>
            <p className="flex items-center justify-center Orbitron text-slate-800 px-28">Code shown does not contain any SQL Statements due to security Reasons</p>
          </div>

          <div className="ring-2 m-10 w-1/2">
            <h3 className="flex items-center justify-center Orbitron text-2xl text-rose-600 m-10">Independent Contracting Work</h3>
          </div>
     
        </div>

        <Footer></Footer>
        
      </div>
    );
  };
  
  export default Portfolio_Page_Component;