import React from 'react';
import { Selected_Site_Context } from '../Context_Hub';

const Landing_Page_Component = () => {
  const {Selected_Site, set_Selected_Site} = React.useContext(Selected_Site_Context)

  return (
    <div>

      <header>
        <h1 >Kilian Voss Development</h1>
      </header>
 
      <main>
        <section onClick={() => set_Selected_Site('About_Me_Page')}>About Me</section>
        <section onClick={() => set_Selected_Site('Portfolio_Page')}>Portfolio</section>
        <section onClick={() => set_Selected_Site('Services_Page')}>Services</section>
        <section onClick={() => set_Selected_Site('Contact_Me_Page')}>Contact Me</section>
      </main>

    </div>
  );
};

export default Landing_Page_Component;