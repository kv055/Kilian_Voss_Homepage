import React, { useState } from "react";
import Background from "../assets/backgrounds/shooting_stars.gif";
import "../index.css";
import { fetchArticles } from "../api/fetchArticles";
import Header from "../components/navbar_header";
import ArticleCard from "../components/articleCard";
// import ContactMe from "../components/contactMeFooter";
import AbelianWebpageBackground from "../assets/portfolio/Abelian_webpage_background.png";
import BacktestingDashboardBackground from "../assets/portfolio/Backtesting_dashboard_background.png";
import KilianWebpageBackground from "../assets/portfolio/Kilian_webpage_background.png";
import SwitchboardConfiguratorBackground from "../assets/portfolio/Curntly_configurator_background.png";
import StockpriceDatabaseBackground from "../assets/portfolio/Stockprice_database_background.png";
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
  const allArticles = fetchArticles();
  const [expandedArticleId, setExpandedArticleId] = useState(null);

  const handleExpansion = (id) => {
    setExpandedArticleId(id !== expandedArticleId ? id : null);
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
        <div className="bg-slate-300 h-auto md:w-3/4 max-w-screen-xl rounded-xl opacity-60 justify-center text-center p-2 overflow-y-scroll">
          {/* Layer 3: */}
          <Header PageName="Portfolio" />
          {/* <div className="flex flex-row flex-wrap justify-around"> */}
          <div className="grid grid-cols-2 gap-5">
            {/* Layer 4: Each Project */}
            {allArticles.map((article) => (
              <ArticleCard
                key={article.Id}
                Id={article.Id}
                Title={article.Title}
                Description={article.Description}
                Icons={article.Icons}
                Article={article.Article}
                Url={article.Url}
                Background={article.Background}
                isExpanded={expandedArticleId === article.Id}
                onExpand={() => handleExpansion(article.Id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
