import React from "react";
import Background from "../assets/backgrounds/krieg.gif";
import Header from "../components/navbar_header";
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
import TailwindIcon from "../assets/icons/Tailwind_icon.svg";
import TypescriptIcon from "../assets/icons/Typescript_icon.svg";

export default function Skills_Page() {
  return (
    <>
      {/* Layer 1: background gif */}
      <div
        className="bg-no-repeat min-h-screen p-5 sm:p-10 xl:p-28"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
        }}
      >
        {/* Layer 2: the white transparent board with rounded corners */}
        <div className="m-5 md:m-10 xl:m-28 bg-slate-300 max-h-screen rounded-xl opacity-60 justify-center">
          {/* Layer 3: */}
          <Header PageName="Technical Skills" />
          <div className="mx-5 md:mx-10 xl:mx-28 bg-white max-h-screen rounded-xl justify-center">
            <h3>Languages</h3>
            <ul>
              <li className="grid grid-cols-5 grid-rows-3">
                
                <div className="row-span-2 col-span-2">
                  <img src={HtmlIcon} alt="HTML" className="w-16 h-16" />
                  <img src={CSSIcon} alt="CSS" className="w-16 h-16" />
                  <h4 className="row-span-1 col-span-1">HTML/CSS</h4>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  culpa repellat ad laudantium iste sunt fuga eligendi aut
                  dolores veniam ullam harum itaque delectus, mollitia vero quod
                  consectetur quis a.
                </p>
              </li>

              <li className="grid grid-cols-5 grid-rows-3">
                
                <img
                  src={JavascriptIcon}
                  alt="JavaScript"
                  className="row-span-2 col-span-2 w-16 h-16"
                />
                <h4 className="row-span-1 col-span-1">Javascript</h4>
                
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  culpa repellat ad laudantium iste sunt fuga eligendi aut
                  dolores veniam ullam harum itaque delectus, mollitia vero quod
                  consectetur quis a.
                </p>
              </li>

              <li className="grid grid-cols-5 grid-rows-3">
                <h4 className="row-span-1 col-span-1">TypeScript</h4>
                <img
                  src={TypescriptIcon}
                  alt="Typescript"
                  className="row-span-2 col-span-2 w-16 h-16"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  culpa repellat ad laudantium iste sunt fuga eligendi aut
                  dolores veniam ullam harum itaque delectus, mollitia vero quod
                  consectetur quis a.
                </p>
              </li>

              <li className="grid grid-cols-5 grid-rows-3">
                <h4 className="row-span-1 col-span-1">Python</h4>
                <img
                  src={PythonIcon}
                  alt="Python"
                  className="row-span-2 col-span-2 w-16 h-16"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  culpa repellat ad laudantium iste sunt fuga eligendi aut
                  dolores veniam ullam harum itaque delectus, mollitia vero quod
                  consectetur quis a.
                </p>
              </li>
            </ul>

            <h3>Front-end</h3>
            <ul>
              <li className="grid grid-cols-5 grid-rows-3">
                <h4 className="row-span-1 col-span-1">React</h4>
                <img
                  src={ReactIcon}
                  alt="ReactJS"
                  className="row-span-2 col-span-2 w-16 h-16"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  culpa repellat ad laudantium iste sunt fuga eligendi aut
                  dolores veniam ullam harum itaque delectus, mollitia vero quod
                  consectetur quis a.
                </p>
              </li>

              <li className="grid grid-cols-5 grid-rows-3">
                <h4 className="row-span-1 col-span-1">Tailwind CSS</h4>
                <img
                  src={TailwindIcon}
                  alt="Tailwind"
                  className="row-span-2 col-span-2 w-16 h-16"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  culpa repellat ad laudantium iste sunt fuga eligendi aut
                  dolores veniam ullam harum itaque delectus, mollitia vero quod
                  consectetur quis a.
                </p>
              </li>
            </ul>

            <h3>Back-end</h3>
            <ul>
              <li className="grid grid-cols-5 grid-rows-3">
                <h4 className="row-span-1 col-span-1">Flask</h4>
                <img
                  src={FlaskIcon}
                  alt="Flask"
                  className="row-span-2 col-span-2 w-16 h-16"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  culpa repellat ad laudantium iste sunt fuga eligendi aut
                  dolores veniam ullam harum itaque delectus, mollitia vero quod
                  consectetur quis a.
                </p>
              </li>

              <li className="grid grid-cols-5 grid-rows-3">
                <h4 className="row-span-1 col-span-1">Express JS</h4>
                <img
                  src={NodeJSIcon}
                  alt="NodeJS"
                  className="row-span-2 col-span-2 w-16 h-16"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  culpa repellat ad laudantium iste sunt fuga eligendi aut
                  dolores veniam ullam harum itaque delectus, mollitia vero quod
                  consectetur quis a.
                </p>
              </li>

              <li className="grid grid-cols-5 grid-rows-3">
                <h4 className="row-span-1 col-span-1">Next JS</h4>
                <img
                  src={NextJSIcon}
                  alt="NextJS"
                  className="row-span-2 col-span-2 w-16 h-16"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  culpa repellat ad laudantium iste sunt fuga eligendi aut
                  dolores veniam ullam harum itaque delectus, mollitia vero quod
                  consectetur quis a.
                </p>
              </li>

              <li className="grid grid-cols-5 grid-rows-3">
                <h4 className="row-span-1 col-span-1">MySQL</h4>
                <img
                  src={MysqlIcon}
                  alt="Mysql"
                  className="row-span-2 col-span-2 w-16 h-16"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  culpa repellat ad laudantium iste sunt fuga eligendi aut
                  dolores veniam ullam harum itaque delectus, mollitia vero quod
                  consectetur quis a.
                </p>
              </li>

              <li className="grid grid-cols-5 grid-rows-3">
                <h4 className="row-span-1 col-span-1">AWS SQS</h4>
                <img
                  src={AWSIcon}
                  alt="AWS SQS"
                  className="row-span-2 col-span-2 w-16 h-16"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  culpa repellat ad laudantium iste sunt fuga eligendi aut
                  dolores veniam ullam harum itaque delectus, mollitia vero quod
                  consectetur quis a.
                </p>
              </li>
            </ul>

            <h3>Deployment</h3>
            <ul>
              <li className="grid grid-cols-5 grid-rows-3">
                <h4 className="row-span-1 col-span-1">Linux Server</h4>
                <img
                  src={LinuxIcon}
                  alt="Linux Server"
                  className="row-span-2 col-span-2 w-16 h-16"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  culpa repellat ad laudantium iste sunt fuga eligendi aut
                  dolores veniam ullam harum itaque delectus, mollitia vero quod
                  consectetur quis a.
                </p>
              </li>

              <li className="grid grid-cols-5 grid-rows-3">
                <h4 className="row-span-1 col-span-1">AWS S3</h4>
                <div className="row-span-2 col-span-2">
                  <img
                    src={AWSS3Icon}
                    alt="AWS S3"
                    className="row-span-2 col-span-2 w-16 h-16"
                  />
                  <img
                    src={DockerIcon}
                    alt="Docker"
                    className="row-span-2 col-span-2 w-16 h-16"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  culpa repellat ad laudantium iste sunt fuga eligendi aut
                  dolores veniam ullam harum itaque delectus, mollitia vero quod
                  consectetur quis a.
                </p>
              </li>

              <li className="grid grid-cols-5 grid-rows-3">
                <h4 className="row-span-1 col-span-1">AWS AppRunner</h4>
                <div className="row-span-2 col-span-2">
                  <img
                    src={AWSIcon}
                    alt="AWS Apprunner"
                    className="row-span-2 col-span-2 w-16 h-16"
                  />
                  <img
                    src={DockerIcon}
                    alt="Docker"
                    className="row-span-2 col-span-2 w-16 h-16"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  culpa repellat ad laudantium iste sunt fuga eligendi aut
                  dolores veniam ullam harum itaque delectus, mollitia vero quod
                  consectetur quis a.
                </p>
              </li>

              <li className="grid grid-cols-5 grid-rows-3">
                <h4 className="row-span-1 col-span-1">
                  AWS Docker on Lightsail
                </h4>
                <img
                  src={AWSIcon}
                  alt="AWS Lightsail"
                  className="row-span-2 col-span-2 w-16 h-16"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  culpa repellat ad laudantium iste sunt fuga eligendi aut
                  dolores veniam ullam harum itaque delectus, mollitia vero quod
                  consectetur quis a.
                </p>
              </li>
            </ul>

            <h3>Dev Tools</h3>
            <ul>
              <li className="grid grid-cols-5 grid-rows-3">
                <h4 className="row-span-1 col-span-1">Git + GitHub</h4>
                <div className="row-span-2 col-span-2">
                  <img
                    src={GitIcon}
                    alt="Git"
                    className="row-span-2 col-span-2 w-16 h-16"
                  />
                  <img
                    src={GithubIcon}
                    alt="Github"
                    className="row-span-2 col-span-2 w-16 h-16"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  culpa repellat ad laudantium iste sunt fuga eligendi aut
                  dolores veniam ullam harum itaque delectus, mollitia vero quod
                  consectetur quis a.
                </p>
              </li>

              <li className="grid grid-cols-5 grid-rows-3">
                <h4 className="row-span-1 col-span-1">Docker</h4>
                <img
                  src={DockerIcon}
                  alt="Docker"
                  className="row-span-2 col-span-2 w-16 h-16"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  culpa repellat ad laudantium iste sunt fuga eligendi aut
                  dolores veniam ullam harum itaque delectus, mollitia vero quod
                  consectetur quis a.
                </p>
              </li>

              <li className="grid grid-cols-5 grid-rows-3">
                <h4 className="row-span-1 col-span-1">Testing</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  culpa repellat ad laudantium iste sunt fuga eligendi aut
                  dolores veniam ullam harum itaque delectus, mollitia vero quod
                  consectetur quis a.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
