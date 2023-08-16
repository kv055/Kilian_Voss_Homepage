import React from "react";
import Background from "../assets/backgrounds/space_purp.gif";
import Header from "../components/navbar_header";
import PicCV from "../components/ProfilepagePicCV";
import ContactMe from "../components/contactMeFooter";

export default function Profile_Page() {
  return (
    <>
      {/* Layer 1: background gif */}
      <div
        className="flex bg-no-repeat h-screen p-1 justify-center"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
        }}
      >
        {/* Layer 2: the white transparent board with rounded corners */}
        <div className="bg-slate-300-60 h-auto md:w-3/4 max-w-screen-xl rounded-xl justify-center text-center p-2 overflow-y-scroll">
          <Header PageName="Profile" />
          <PicCV />
          {/* Layer 3: */}
          <h3 className="Orbitron p-5 tracking-widest">Introduction</h3>
          <div className="md:m-5 bg-slate-300 rounded-xl justify-center">
            <p className="row-span-1 col-span-2 p-5 leading-9 tracking-wide text-lg text-left">
              I am a dedicated and innovative Software Engineer with
              comprehensive experience in front-end and back-end development. I
              have a proven track record of delivering top-tier projects to a
              global clientele. My proficiency in an array of programming
              languages, frameworks, and databases allows me to employ them
              effectively in delivering robust software solutions. One of my key
              strengths is my ability to handle remote work and collaborate
              effectively with teams to ensure timely project delivery. I have
              successfully spearheaded the development and deployment of
              infrastructure supporting trading algorithms for various financial
              assets. Additionally, I engineered a comprehensive database for
              storing and updating historical price data of over 15,000
              financial assets. My expertise also extends to designing and
              implementing scalable backtesting programs for generating
              historical trade signals. I have utilized libraries such as
              vectorBT for trade signal profitability assessments and
              comprehensive statistical analyses. Furthermore, I have
              successfully deployed and tested trading strategies for live
              trading on platforms like Alpaca, Binance, and Kraken. In my
              freelance work, I have led both front-end and back-end software
              development, providing robust full-stack solutions for
              international clients. Notably, I developed a configuration portal
              for a leading electrical engineering firm. As a coding instructor,
              I have overseen the instruction of fundamental programming
              concepts for high school students, utilizing interactive
              methodologies. I have also delivered structured, part-time Python
              lessons tailored to the high school education level. During my
              tenure as a Frontend Developer at CampusM21, I managed CMS
              integration and homepage maintenance, improving responsiveness and
              overall user experience. I led the system migration from Joomla to
              Strapi and integrated analytics software into the homepage,
              building a custom dashboard for real-time trend tracking.
              Additionally, I assisted in the creation of new UI components to
              enhance website aesthetics and usability. I hold a Bachelor of
              Science in Computer Science from the Technical University of
              Munich and a Fachabitur in Art Installations from the Technical
              College of Bavaria. My technical skills include proficiency in
              front-end technologies such as HTML/CSS, Tailwind CSS, Bootstrap
              CSS, JavaScript, React.js, D3.js, and Plotly.js. On the back-end,
              I am skilled in Node.js, Express.js, MongoDB, Python, Flask,
              Pandas, SciPy, MySQL, and Strapi CMS. I am also experienced in
              using tools like Docker and Git + Github for version control, and
              I have deployment experience with AWS services such as EC2 (Bare
              metal Linux) and Lightsail.
            </p>
          </div>
          <ContactMe />
        </div>
      </div>
    </>
  );
}
