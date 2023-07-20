import React from "react";
import { Selected_Site_Context } from '../Context_Hub';
import Background from '../assets/shooting_stars.gif'
import Header from '../components/navbar_header';
import Footer from '../components/footer'

const Contact_Me_Page_Component = () => {
    return (
      <div className="bg-no-repeat min-h-screen" style={{backgroundImage: `url(${Background})` , backgroundSize: 'cover'}}>
        <Header></Header>
        <div className="flex flex-row items-center justify-center">
          
          <div className="ring-2 m-10">
            <h3 className="flex items-center justify-center Orbitron text-orange-500 m-20">LinkedIn</h3>
          </div>
            
          <div className="ring-2 m-10">
            <h3 className="flex items-center justify-center Orbitron text-orange-500 m-20">UpWork</h3>
          </div>

          <div className="ring-2 m-10 ">
            <h3 className="flex items-center justify-center Orbitron text-orange-500 m-20">Git-Hub</h3>
          </div>

          <div className="ring-2 m-10">
            <h3 className="flex items-center justify-center Orbitron text-orange-500 m-20">Email</h3>
          </div>

        </div>
        <Footer></Footer>
      </div>
    );
  };
  
  export default Contact_Me_Page_Component;