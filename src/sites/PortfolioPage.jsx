import React, { useState } from "react";
import Background from "../assets/backgrounds/shooting_stars.gif";
import "../index.css";
import Header from "../components/navbar_header";
import ExpandedArticle from "../components/expandedArticle";
import ArticleCard from "../components/articleCard";
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
import StrapiIcon from "../assets/icons/Strapi_icon.svg";
import SupabaseIcon from "../assets/icons/Supabase_icon.svg";
import TailwindIcon from "../assets/icons/Tailwind_icon.svg";
import TypescriptIcon from "../assets/icons/Typescript_icon.svg";
export default function Portfolio_Page() {
  let [isExpanded, setIsExpanded] = useState(false);
  const handleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      {/* Layer 1: background gif */}
      <div
        className="flex bg-no-repeat h-screen py-2 justify-center"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
        }}
      >
        {/* Layer 2: the white transparent board with rounded corners */}
        <div className="bg-slate-300 h-auto md:w-3/4 max-w-screen-xl rounded-xl opacity-60 justify-center text-center p-2 overflow-scroll">
          {/* Layer 3: */}
          <Header PageName="Portfolio" />
          <div className="flex flex-row flex-wrap justify-evenly">
            {/* Layer 4: Each Project */}

            <ArticleCard
              Title={"Website for Abelian Capital"}
              Description={""}
              Icons={[
                ReactIcon,
                TailwindIcon,
                StrapiIcon,
                AWSIcon,
                DockerIcon,
                AWSS3Icon,
              ]}
              Article={"WV"}
              Url={"abelian.capital"}
            />
            <ArticleCard
              Title={"Backtesting Dashboard"}
              Description={"bt,bürnh.rnh"}
              Icons={[]}
              Article={"WV"}
              Url={"sbmjbmj"}
            />
            <ArticleCard
              Title={"Kilian Voss Homepage (yes, this page)"}
              Description={"bt,bürnh.rnh"}
              Icons={[]}
              Article={"WV"}
              Url={"sbmjbmj"}
            />
            <ArticleCard
              Title={"Switchboard Configurator"}
              Description={"bt,bürnh.rnh"}
              Icons={[]}
              Article={"WV"}
              Url={"sbmjbmj"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
