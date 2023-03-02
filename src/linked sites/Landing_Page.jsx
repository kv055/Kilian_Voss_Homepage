import React from 'react';
import { Selected_Site_Context } from '../Context_Hub';
import Background from '../assets/giphy.gif'

const Landing_Page_Component = () => {
  const {Selected_Site, set_Selected_Site} = React.useContext(Selected_Site_Context)

  return (
    <div className="bg-no-repeat" style={{backgroundImage: `url(${Background})`}}>
      <div className='p-36'>
      <h1 className='text-amber-300 text-5xl'>Kilian Voss Development</h1>
 
        <section onClick={() => set_Selected_Site('About_Me_Page')}>About Me</section>
        <section onClick={() => set_Selected_Site('Portfolio_Page')}>Portfolio</section>
        <section onClick={() => set_Selected_Site('Services_Page')}>Services</section>
        <section onClick={() => set_Selected_Site('Contact_Me_Page')}>Contact Me</section>

      </div>
      
    </div>
  );
};

export default Landing_Page_Component;