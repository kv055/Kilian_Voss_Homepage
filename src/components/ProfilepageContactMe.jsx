import React from 'react';
import Email from "../assets/icons/Email_icon.svg";
import Github from "../assets/icons/Github_icon.svg";
import LinkedIn from "../assets/icons/LinkedIn_icon.svg";
import Upwork from "../assets/icons/Upwork_icon.svg";

const ContactMe = () => {
  return (
    <div>
      <h3>Contact me:</h3>
      <ul className="flex flex-row gap-10 justify-center">
        <li>
          <a href="https://www.github.com/username">
            <p>Github</p>
            <img src={Github} alt="Github" className="w-16 h-16" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kilian-voss-784a5b157/">
            <p>LinkedIn</p>
            <img src={LinkedIn} alt="LinkedIn" className="w-16 h-16" />
          </a>
        </li>
        <li>
          <a href="https://www.upwork.com/freelancers/~019b30151dda4784ed">
            <p>Upwork</p>
            <img src={Upwork} alt="Upwork" className="w-16 h-16" />
          </a>
        </li>
        <li>
          <a href="mailto:kilian96@live.de">
            <p>Email</p>
            <img src={Email} alt="Email" className="w-16 h-16" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;
