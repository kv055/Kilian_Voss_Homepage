import { useEffect, useState } from "react";
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

export function fetchArticles() {
  const [blogs, setBlogs] = useState([]);

  const TOKEN =
    "22703350c0436e31a3cae24a454dd62d2a69c01b3b239c91da449a3a7e0a4aa75e789b26ff05b8c7bdc42347002b3702d87f0b941592f4a6137f3d118a2aa4dc7e746f4b0ea59e0a7c57deb09092e153d432616151fc76b8f33ab78ed5d1793a6fd46399efceb920a59aa2a452f2e5b3479142238b10efcb7c83e4cfa8a121e0";

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch(
          `https://container-service-420.g0bs5jf3dhe1s.us-east-1.cs.amazonlightsail.com/api/portfolio-articles?populate=*`,
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          }
        );
        const data = await response.json();

        // Transformation logic
        const transformedBlogs = data.data.map(item => {
          let newItem = { ...item };
          newItem = { ...newItem, ...newItem.attributes };
          delete newItem.attributes;
          return newItem;
        });

        setBlogs(transformedBlogs);
      } catch (error) {
        console.error(error);
      }
    }
    fetchApi();
  }, []);

  return blogs;
}
