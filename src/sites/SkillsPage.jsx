import React from "react";
import Background from "../assets/backgrounds/krieg.gif";
import Header from "../components/navbar_header";
// import ContactMe from "../components/contactMeFooter";
import AWSIcon from "../assets/icons/AWS_icon.svg";
import AWSS3Icon from "../assets/icons/AWS_S3_icon.svg";
import CSSIcon from "../assets/icons/CSS_icon.svg";
import DockerIcon from "../assets/icons/Docker_icon.svg";
import FlaskIcon from "../assets/icons/Flask_icon.svg";
import GitIcon from "../assets/icons/Git_icon.svg";
import GithubIcon from "../assets/icons/Github_icon.svg";
import HtmlIcon from "../assets/icons/Html_icon.svg";
import JavascriptIcon from "../assets/icons/Javascript_icon.svg";
import LinuxIcon from "../assets/icons/Linux_icon.svg";
import MysqlIcon from "../assets/icons/Mysql_icon.svg";
import NextJSIcon from "../assets/icons/NextJS_icon.svg";
import NodeJSIcon from "../assets/icons/NodeJS_icon.svg";
import PythonIcon from "../assets/icons/Python_icon.svg";
import ReactIcon from "../assets/icons/React_icon.svg";
import StrapiIcon from "../assets/icons/Strapi_icon.svg"
import SupabaseIcon from "../assets/icons/Supabase_icon.svg"
import TailwindIcon from "../assets/icons/Tailwind_icon.svg";
import TypescriptIcon from "../assets/icons/Typescript_icon.svg";

export default function Skills_Page() {
  return (
    <>
      {/* Layer 1: background gif */}
      <div
        className="flex bg-no-repeat min-h-screen p-1 justify-center"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
        }}
      >
        {/* Layer 2: the white transparent board with rounded corners */}
        <div className="m-2 md:m-8 bg-slate-300 h-screen max-w-screen-xl rounded-xl opacity-60 justify-center text-center p-2 xl:p-10">
          {/* Layer 3: */}
          <Header PageName="Technical Skills" />
          {/* Layer 4:  */}
          <div className="my-10 overflow-y-scroll h-3/4">
            <div className="my-10">
              <h3 className="text-center text-xl Orbitron tracking-widest">
                Languages
              </h3>
              <div className="mx-5 md:mx-10 xl:mx-28 bg-white max-h-screen rounded-xl p-5 flex flex-row justify-evenly flex-wrap">
                <div className="m-5 flex flex-col items-center">
                  <div className="flex flex-row">
                  <img src={HtmlIcon} alt="HTML" className="w-16 h-16" />
                    <img src={CSSIcon} alt="CSS" className="w-16 h-16" />
                  </div>
                  <p>HTML + CSS</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <img
                    src={JavascriptIcon}
                    alt="JavaScript"
                    className=" w-16 h-16"
                  />
                  <p>JavaScript</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <img
                    src={TypescriptIcon}
                    alt="Typescript"
                    className=" w-16 h-16"
                  />
                  <p>Typescript</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <img src={PythonIcon} alt="Python" className="w-16 h-16" />
                  <p className="">Python</p>
                </div>
              </div>
            </div>

            <div className="my-10">
              <h3 className="text-center text-xl Orbitron tracking-widest">
                Front-end
              </h3>
              <div className="mx-5 md:mx-10 xl:mx-28 bg-white max-h-screen rounded-xl p-5 flex flex-row justify-evenly">
                <div className="m-5 flex flex-col items-center">
                  <img
                    src={ReactIcon}
                    alt="ReactJS"
                    className="hover:shadow-2xl hover:shadow-red-700 w-16 h-16"
                  />
                  <p>ReactJS</p>
                </div>
                <div className="m-5 flex flex-col items-center">
                  <img
                    src={TailwindIcon}
                    alt="Tailwind"
                    className="hover:shadow-2xl hover:shadow-red-700 w-16 h-16"
                  />
                  <p>Tailwind CSS</p>
                </div>
              </div>
            </div>

            <div className="my-10">
              <h3 className="text-center text-xl Orbitron tracking-widest">
                Back-end
              </h3>
              <div className="mx-5 md:mx-10 xl:mx-28 bg-white max-h-screen rounded-xl p-5 flex flex-row justify-evenly flex-wrap">
                <div className="m-5 flex flex-col items-center">
                  <img src={FlaskIcon} alt="Flask" className="w-16 h-16" />
                  <p>Flask</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <img src={NodeJSIcon} alt="NodeJS" className="w-16 h-16" />
                  <p>NodeJS</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <img src={NextJSIcon} alt="NextJS" className="w-16 h-16" />
                  <p>NextJS</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <img src={MysqlIcon} alt="Mysql" className="w-16 h-16" />
                  <p>Mysql</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <img src={AWSIcon} alt="AWS SQS" className="w-16 h-16" />
                  <p>AWS SQS</p>
                </div>
              </div>
            </div>

            <div className="my-10">
              <h3 className="text-center text-xl Orbitron tracking-widest">
                Back-end CMS systems
              </h3>
              <div className="mx-5 md:mx-10 xl:mx-28 bg-white max-h-screen rounded-xl p-5 flex flex-row justify-evenly flex-wrap">
                
                <div className="m-5 flex flex-col items-center">
                  <img src={StrapiIcon} alt="Strapi" className="w-16 h-16" />
                  <p>Strapi</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <img src={SupabaseIcon} alt="Supabase" className="w-16 h-16" />
                  <p>Supabase</p>
                </div>

              </div>
            </div>

            <div className="my-10">
              <h3 className="text-center text-xl Orbitron tracking-widest">
                Deployment
              </h3>
              <div className="mx-5 md:mx-10 xl:mx-28 bg-white max-h-screen rounded-xl p-5 flex flex-row justify-evenly flex-wrap">
                <div className="m-5 flex flex-col items-center">
                  <img
                    src={LinuxIcon}
                    alt="Linux Server"
                    className="w-16 h-16"
                  />
                  <p>Linux Server</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <img src={AWSS3Icon} alt="AWS S3" className="w-16 h-16" />
                  <p>AWS S3</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <div className="flex flex-row">
                    <img
                      src={AWSIcon}
                      alt="AWS Apprunner"
                      className="w-16 h-16 mx-3"
                    />
                    <img src={DockerIcon} alt="Docker" className="w-16 h-16 mx-3" />
                  </div>
                  <p>AWS Apprunner + Docker</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <div className="flex flex-row">
                    <img
                      src={AWSIcon}
                      alt="AWS Lightsail"
                      className="w-16 h-16 mx-3"
                    />
                    <img src={DockerIcon} alt="Docker" className="w-16 h-16 mx-3" />
                  </div>
                  <p>AWS Lightsail + Docker</p>
                </div>
              </div>
            </div>

            <div className="my-10">
              <h3 className="text-center text-xl Orbitron tracking-widest">
                Dev Tools
              </h3>
              <div className="mx-5 md:mx-10 xl:mx-28 bg-white max-h-screen rounded-xl p-5 flex flex-row justify-evenly flex-wrap">
                <div className="m-5 flex flex-col items-center">
                  <div className="flex flex-row">
                    <img src={GitIcon} alt="Git" className="w-16 h-16 mx-3" />
                    <img src={GithubIcon} alt="Github" className="w-16 h-16 mx-3" />
                  </div>
                  <p>Git + Github</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <img src={DockerIcon} alt="Docker" className="w-16 h-16" />
                  <p>Docker</p>
                </div>
              </div>
            </div>
          </div>
          {/* <ContactMe /> */}
        </div>
      </div>
    </>
  );
}
