import React from "react";
import { Selected_Site_Context } from '../Context_Hub';

const Contact_Me_Page_Component = () => {
    return (
      <div className="bg-no-repeat" style={{backgroundImage: `url(${Background})` , backgroundSize: 'cover'}}>
  
        <h1 className="text-9xl text-lime-500 Orbitron">Contact Me</h1>

        <h4>LinkedIn</h4>
        <h4>UpWork</h4>
        <h4>Git-Hub</h4>
        <h4>Email</h4>
  
      </div>
    );
  };
  
  export default Contact_Me_Page_Component;