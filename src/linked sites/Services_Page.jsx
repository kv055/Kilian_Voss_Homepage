import React from "react";
import { Selected_Site_Context } from '../Context_Hub';
import Background from '../assets/giphy_2.gif'
import Header from '../components/navbar_header';

const Services_Page_Component = () => {
    return (
      <div className="bg-no-repeat" style={{backgroundImage: `url(${Background})` , backgroundSize: 'cover'}}>
        <Header></Header>
        <div className="flex flex-col">
          <h3 className="flex items-center justify-center Orbitron text-lime-500 m-10">Building Frontend Web-Pages/Web-Apps</h3>
          <p>
            My preferred tech stack for most frontend applications is React JS in combination with TailwindCSS.
            The reason I use react is because even though it is a little overkill for just simple websites, it can quickly scale (in case the initial project is growing) and is the defacto industry standard for frontend development.
          </p>
          <h3 className="flex items-center justify-center Orbitron text-lime-500 m-10">Building Backends/Web-Servers</h3>
          <p>
            My preferred tech stack for simple website/Web app backends is Python in combination with Flask.
            Although if preferred I am sufficient in NodeJS as well, but the reason I choose Python over node is that Python in general is faster to write and more reliable to run.
          </p>
          <h3 className="flex items-center justify-center Orbitron text-lime-500 m-10">Building Database Solutions</h3>
          <p>
            Database Solutions are application specific, so there is no general winner or looser here.
            I am both familiar with integrating SQL(MySQL) and NoSQL(Mongo DB) Databases.
          </p>
          <h3 className="flex items-center justify-center Orbitron text-lime-500 m-10">Hosting/Deployment</h3>
          <p>
            For deployment solutions i rely on Aws.
            The reason i chose AWS is because it is the defactor industry standard and market leader when it comes to deployment solutions.
            Everything can be done there from purchasing domain names, hosting website frontends via s3 buckets and deploying more complex backends on whatever service fits best.
          </p>
          <h3 className="flex items-center justify-center Orbitron text-lime-500 m-10">The Freelancing Process</h3>
          <p>
            There are two ways of how i start a project with a client.
            The first approach would be to use a freelancing work portal such as Upwork.com, it offers the benefit of third party conflict resolution via Upwork.
            The downside of working via a third party portal like upwork are its fees.
            The other approach would be to work via ABN number, it would be cheaper for the client but it would not bring the benefit of third party conflict resolution.
          </p>
          </div>
  
      </div>
    );
  };
  
  export default Services_Page_Component;