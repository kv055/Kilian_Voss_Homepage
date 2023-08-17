import React from 'react';
import Email from "../assets/icons/Email_icon.svg";
import Github from "../assets/icons/Github_icon.svg";
import LinkedIn from "../assets/icons/LinkedIn_icon.svg";
import Upwork from "../assets/icons/Upwork_icon.svg";
import EmailColor from "../assets/icons/Email_icon_color.svg";
import GithubColor from "../assets/icons/Github_icon_color.svg";
import LinkedInColor from "../assets/icons/LinkedIn_icon_color.svg";
import UpworkColor from "../assets/icons/Upwork_icon_color.svg";

const ContactMe = () => {
  return (
    <div className='my-8'>
      <h3 className='Orbitron p-3 tracking-widest'>Contact me:</h3>
      <ul className="flex flex-row gap-10 justify-center">
        <li>
          <a href="https://www.github.com/username" className="group">
            <p>Github</p>
            <div className="relative">
              <img src={Github} alt="Github" className="absolute top-0 left-0 w-16 h-16 group-hover:hidden" />
              <img src={GithubColor} alt="Github Color" className="w-16 h-16 hidden group-hover:block" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kilian-voss-784a5b157/" className="group">
            <p>LinkedIn</p>
            <div className="relative">
              <img src={LinkedIn} alt="LinkedIn" className="absolute top-0 left-0 w-16 h-16 group-hover:hidden" />
              <img src={LinkedInColor} alt="LinkedIn Color" className="w-16 h-16 hidden group-hover:block" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.upwork.com/freelancers/~019b30151dda4784ed" className="group">
            <p>Upwork</p>
            <div className="relative">
              <img src={Upwork} alt="Upwork" className="absolute top-0 left-0 w-16 h-16 group-hover:hidden" />
              <img src={UpworkColor} alt="Upwork Color" className="w-16 h-16 hidden group-hover:block" />
            </div>
          </a>
        </li>
        <li>
          <a href="mailto:kilian96@live.de" className="group">
            <p>Email</p>
            <div className="relative">
              <img src={Email} alt="Email" className="absolute top-0 left-0 w-16 h-16 group-hover:hidden" />
              <img src={EmailColor} alt="Email Color" className="w-16 h-16 hidden group-hover:block" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;

