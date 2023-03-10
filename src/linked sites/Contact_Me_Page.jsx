import React from "react";
import { Selected_Site_Context } from '../Context_Hub';
import Background from '../assets/giphy_2.gif'
import Header from '../components/navbar_header';

const Contact_Me_Page_Component = () => {
    return (
      <div className="bg-no-repeat" style={{backgroundImage: `url(${Background})` , backgroundSize: 'cover'}}>
        <Header></Header>
        <div className="flex flex-col">
          <h3 className="flex items-center justify-center Orbitron text-lime-500 m-10">LinkedIn</h3>
          <h3 className="flex items-center justify-center Orbitron text-lime-500 m-10">UpWork</h3>
          <h3 className="flex items-center justify-center Orbitron text-lime-500 m-10">Git-Hub</h3>
          <h3 className="flex items-center justify-center Orbitron text-lime-500 m-10">Email</h3>
        </div>
  
      </div>
    );
  };
  
  export default Contact_Me_Page_Component;