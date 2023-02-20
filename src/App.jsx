import React from "react";

import { Selected_Site_Context } from "./Context_Hub";

// Linked Sites
import Landing_Page_Component from "./linked sites/Landing_Page";
import About_Me_Page_Component from "./linked sites/About_Me_Page";
import Contact_Me_Page_Component from "./linked sites/Contact_Me_Page";
import Portfolio_Page_Component from "./linked sites/Portfolio_Page";
import Services_Page_Component from "./linked sites/Services_Page";


function App() {
  const [Selected_Site, set_Selected_Site] = React.useState('Landing_Page')

  function Rendering_function(Site_Name){
    switch (Site_Name) {
      case 'Landing_Page':
        console.log('Landing_Page');
        return Landing_Page_Component
        break;
      case 'About_Me_Page':
        console.log('About_Page');
        return About_Me_Page_Component
        break;
      case 'Contact_Me_Page': 
        console.log('Methology_Vision_Page'); 
        return Contact_Me_Page_Component
        break;
      case 'Portfolio_Page':
        console.log('User_Login_Page');
        return Portfolio_Page_Component
        break;
      case 'Services_Page':
        console.log('Terminal_Demo_Page');
        return Services_Page_Component
        break;
      default:
        return Landing_Page_Component
    }
  }
  
  let To_Render = Rendering_function(Selected_Site)

  return (
    <Selected_Site_Context.Provider value={{Selected_Site, set_Selected_Site}}>
      <To_Render />
    </Selected_Site_Context.Provider>
  );
}

export default App;

