import React from "react";
import Background from "../assets/backgrounds/krieg.gif";
import Header from "../components/navbar_header";
// import ContactMe from "../components/contactMeFooter";
import AWSIcon from "../assets/icons/AWS_icon.svg";
import AWSIconColor from "../assets/icons/AWS_icon_color.svg";
import AWSS3Icon from "../assets/icons/AWS_S3_icon.svg";
import AWSS3IconColor from "../assets/icons/AWS_S3_icon_color.svg";
import CSSIcon from "../assets/icons/CSS_icon.svg";
import CSSIconColor from "../assets/icons/CSS_icon_color.svg";
import DockerIcon from "../assets/icons/Docker_icon.svg";
import DockerIconColor from "../assets/icons/Docker_icon_color.svg";
import FlaskIcon from "../assets/icons/Flask_icon.svg";
import FlaskIconColor from "../assets/icons/Flask_icon_color.svg";
import GitIcon from "../assets/icons/Git_icon.svg";
import GitIconColor from "../assets/icons/Git_icon_color.svg";
import GithubIcon from "../assets/icons/Github_icon.svg";
import GithubIconColor from "../assets/icons/Github_icon_color.svg";
import HtmlIcon from "../assets/icons/Html_icon.svg";
import HtmlIconColor from "../assets/icons/Html_icon_color.svg";
import JavascriptIcon from "../assets/icons/Javascript_icon.svg";
import JavascriptIconColor from "../assets/icons/Javascript_icon_color.svg";
import LinuxIcon from "../assets/icons/Linux_icon.svg";
import LinuxIconColor from "../assets/icons/Linux_icon_color.svg";
import MysqlIcon from "../assets/icons/Mysql_icon.svg";
import MysqlIconColor from "../assets/icons/Mysql_icon_color.svg";
import NextJSIcon from "../assets/icons/NextJS_icon.svg";
import NextJSIconColor from "../assets/icons/NextJS_icon_color.svg";
import NodeJSIcon from "../assets/icons/NodeJS_icon.svg";
import NodeJSIconColor from "../assets/icons/NodeJS_icon_color.svg";
import PythonIcon from "../assets/icons/Python_icon.svg";
import PythonIconColor from "../assets/icons/Python_icon_color.svg";
import ReactIcon from "../assets/icons/React_icon.svg";
import ReactIconColor from "../assets/icons/React_icon_color.svg";
import StrapiIcon from "../assets/icons/Strapi_icon.svg";
import StrapiIconColor from "../assets/icons/Strapi_icon_color.svg";
import SupabaseIcon from "../assets/icons/Supabase_icon.svg";
import SupabaseIconColor from "../assets/icons/Supabase_icon_color.svg";
import TailwindIcon from "../assets/icons/Tailwind_icon.svg";
import TailwindIconColor from "../assets/icons/Tailwind_icon_color.svg";
import TypescriptIcon from "../assets/icons/Typescript_icon.svg";
import TypescriptIconColor from "../assets/icons/Typescript_icon_color.svg";
export default function Skills_Page() {
  return (
    <>
      <div
        className="flex bg-no-repeat h-screen p-1 justify-center"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
        }}
      >
        <div className="bg-slate-300 h-auto md:w-3/4 max-w-screen-xl rounded-xl opacity-60 justify-center text-center p-2">
          <Header PageName="Technical Skills" />
          <div className="my-10 overflow-y-scroll h-3/4">
            <div className="my-10">
              <h3 className="text-center text-xl Orbitron tracking-widest">
                Languages
              </h3>
              <div className="mx-5 md:mx-10 xl:mx-28 bg-white max-h-screen rounded-xl p-5 flex flex-row justify-evenly flex-wrap">
                <div className="flex flex-col m-5">
                  <div className="flex flex-row items-center">
                    <div className="relative w-16 h-16">
                      <img
                        src={HtmlIcon}
                        alt="HTML"
                        className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                      />
                      <img
                        src={HtmlIconColor}
                        alt="HTML"
                        className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                      />
                    </div>
                    <div className="relative w-16 h-16">
                      <img
                        src={CSSIcon}
                        alt="CSS"
                        className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                      />
                      <img
                        src={CSSIconColor}
                        alt="CSS"
                        className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                      />
                    </div>
                  </div>
                  <p>HTML+CSS</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <div className="relative w-16 h-16">
                    <img
                      src={JavascriptIcon}
                      alt="JavaScript"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <img
                      src={JavascriptIconColor}
                      alt="JavaScript"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                    />
                  </div>
                  <p>JavaScript</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <div className="relative w-16 h-16">
                    <img
                      src={TypescriptIcon}
                      alt="Typescript"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <img
                      src={TypescriptIconColor}
                      alt="Typescript"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                    />
                  </div>
                  <p>Typescript</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <div className="relative w-16 h-16">
                    <img
                      src={PythonIcon}
                      alt="Python"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <img
                      src={PythonIconColor}
                      alt="Python"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                    />
                  </div>
                  <p>Python</p>
                </div>
              </div>
            </div>

            <div className="my-10">
              <h3 className="text-center text-xl Orbitron tracking-widest">
                Front-end
              </h3>
              <div className="mx-5 md:mx-10 xl:mx-28 bg-white max-h-screen rounded-xl p-5 flex flex-row justify-evenly">
                <div className="m-5 flex flex-col items-center">
                  <div className="relative w-16 h-16">
                    <img
                      src={ReactIcon}
                      alt="ReactJS"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <img
                      src={ReactIconColor}
                      alt="ReactJS"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                    />
                  </div>
                  <p>ReactJS</p>
                </div>
                <div className="m-5 flex flex-col items-center">
                  <div className="relative w-16 h-16">
                    <img
                      src={TailwindIcon}
                      alt="Tailwind"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <img
                      src={TailwindIconColor}
                      alt="Tailwind"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                    />
                  </div>
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
                  <div className="relative w-16 h-16">
                    <img
                      src={FlaskIcon}
                      alt="Flask"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <img
                      src={FlaskIconColor}
                      alt="Flask"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                    />
                  </div>
                  <p>Flask</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <div className="relative w-16 h-16">
                    <img
                      src={NodeJSIcon}
                      alt="NodeJS"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <img
                      src={NodeJSIconColor}
                      alt="NodeJS"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                    />
                  </div>
                  <p>NodeJS</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <div className="relative w-16 h-16">
                    <img
                      src={NextJSIcon}
                      alt="NextJS"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <img
                      src={NextJSIconColor}
                      alt="NextJS"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                    />
                  </div>
                  <p>NextJS</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <div className="relative w-16 h-16">
                    <img
                      src={MysqlIcon}
                      alt="Mysql"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <img
                      src={MysqlIconColor}
                      alt="Mysql"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                    />
                  </div>
                  <p>Mysql</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <div className="relative w-16 h-16">
                    <img
                      src={AWSIcon}
                      alt="AWS SQS"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <img
                      src={AWSIconColor}
                      alt="AWS SQS"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                    />
                  </div>
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
                  <div className="relative w-16 h-16">
                    <img
                      src={StrapiIcon}
                      alt="Strapi"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <img
                      src={StrapiIconColor}
                      alt="Strapi"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                    />
                  </div>
                  <p>Strapi</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <div className="relative w-16 h-16">
                    <img
                      src={SupabaseIcon}
                      alt="Supabase"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <img
                      src={SupabaseIconColor}
                      alt="Supabase"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                    />
                  </div>
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
                  <div className="relative w-16 h-16">
                    <img
                      src={LinuxIcon}
                      alt="Linux Server"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <img
                      src={LinuxIconColor}
                      alt="Linux Server"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                    />
                  </div>
                  <p>Linux Server</p>
                </div>
                <div className="m-5 flex flex-col items-center">
                  <div className="relative w-16 h-16">
                    <img
                      src={AWSS3Icon}
                      alt="AWS S3"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <img
                      src={AWSS3IconColor}
                      alt="AWS S3"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                    />
                  </div>
                  <p>AWS S3</p>
                </div>
                <div className="m-5 flex flex-col">
                  <div className="flex flex-row items-center">
                    <div className="relative w-16 h-16 mx-2">
                      <img
                        src={AWSIcon}
                        alt="AWS Apprunner"
                        className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                      />
                      <img
                        src={AWSIconColor}
                        alt="AWS Apprunner"
                        className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                      />
                    </div>
                    <div className="relative w-16 h-16">
                      <img
                        src={DockerIcon}
                        alt="Docker"
                        className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                      />
                      <img
                        src={DockerIconColor}
                        alt="Docker"
                        className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                      />
                    </div>
                  </div>
                  <p>AWS Apprunner</p>
                </div>{" "}
                <div className="m-5 flex flex-col">
                  <div className="flex flex-row items-center">
                    <div className="relative w-16 h-16 mx-2">
                      <img
                        src={AWSIcon}
                        alt="AWS Apprunner"
                        className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                      />
                      <img
                        src={AWSIconColor}
                        alt="AWS Apprunner"
                        className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                      />
                    </div>
                    <div className="relative w-16 h-16">
                      <img
                        src={DockerIcon}
                        alt="Docker"
                        className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                      />
                      <img
                        src={DockerIconColor}
                        alt="Docker"
                        className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                      />
                    </div>
                  </div>
                  <p>AWS Lightsail</p>
                </div>
              </div>
            </div>

            <div className="my-10">
              <h3 className="text-center text-xl Orbitron tracking-widest">
                Dev Tools
              </h3>
              <div className="mx-5 md:mx-10 xl:mx-28 bg-white max-h-screen rounded-xl p-5 flex flex-row justify-evenly flex-wrap">
                <div className="m-5 flex flex-col">
                  <div className="flex flex-row items-center">
                    <div className="relative w-16 h-16 mx-2">
                      <img
                        src={GitIcon}
                        alt="Git"
                        className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                      />
                      <img
                        src={GitIconColor}
                        alt="Git"
                        className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                      />
                    </div>
                    <div className="relative w-16 h-16">
                      <img
                        src={GithubIcon}
                        alt="Github"
                        className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                      />
                      <img
                        src={GithubIconColor}
                        alt="Github"
                        className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                      />
                    </div>
                  </div>
                  <p>Git + Github</p>
                </div>

                <div className="m-5 flex flex-col items-center">
                  <div className="relative w-16 h-16">
                    <img
                      src={DockerIcon}
                      alt="Docker"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-0"
                    />
                    <img
                      src={DockerIconColor}
                      alt="Docker"
                      className="absolute w-full h-full transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100"
                    />
                  </div>
                  <p>Docker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
