import React from 'react';
import { Selected_Site_Context } from '../Context_Hub';
import Background from '../assets/Trippy_Space.gif'

const Landing_Page_Component = () => {
  const {Selected_Site, set_Selected_Site} = React.useContext(Selected_Site_Context)

  return (
    <div className="bg-no-repeat" style={{backgroundImage: `url(${Background})` , backgroundSize: 'cover'}}>
      <div className='p-36'>
      <h1 className='text-amber-300 text-8xl m-5 Orbitron'>Kilian Voss Development</h1>
 
        <section 
          onClick={() => set_Selected_Site('About_Me_Page')}
          className='Orbitron text-white text-6xl m-10 hover:text-9xl hover:text-lime-500'
          >
            About Me
        </section>
        
        <section 
          onClick={() => set_Selected_Site('Portfolio_Page')}
          className='Orbitron text-white text-6xl m-10 hover:text-9xl hover:text-rose-600'
          >
            Portfolio
        </section>
        
        <section 
          onClick={() => set_Selected_Site('Services_Page')}
          className='Orbitron text-white text-6xl m-10 hover:text-9xl hover:text-cyan-400'
          >
            Services
        </section>

        <section 
          onClick={() => set_Selected_Site('Contact_Me_Page')}
          className='Orbitron text-white text-6xl m-10 hover:text-9xl hover:text-orange-500'
          >
            Contact Me
        </section>

      </div>
      
    </div>
  );
};

export default Landing_Page_Component;