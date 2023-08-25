import React, { useState } from "react";
import Background from "../assets/backgrounds/shooting_stars.gif";
import "../index.css";
import { fetchArticles } from "../api/fetchArticles";
import Header from "../components/navbar_header";
import ArticleCard from "../components/articleCard";
// import ContactMe from "../components/contactMeFooter";

export default function Portfolio_Page() {
  const allArticles = fetchArticles();
  console.log(allArticles);
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
        <div className="bg-slate-300-60 h-auto md:w-3/4 max-w-screen-xl rounded-xl justify-center text-center p-2 overflow-y-scroll">
          {/* Layer 3: */}
          <Header PageName="Portfolio" />
          {/* <div className="flex flex-row flex-wrap justify-around"> */}
          <div className="grid grid-cols-2 gap-5">
            {/* Layer 4: Each Project */}
            {allArticles.map((article) => (
              <ArticleCard
                key={article.id}
                Id={article.id}
                Title={article.Title}
                Description={article.Description}
                Icons={article.Icons}
                Article={article.Article}
                Url={article.DeployedURL}
                GitHubUrl={article.GithubURL}
                Background={article.ArticleBackground}
                isExpanded={expandedArticleId === article.id}
                onExpand={() => handleExpansion(article.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
