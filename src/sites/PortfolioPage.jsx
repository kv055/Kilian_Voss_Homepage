import React from "react";
import Background from "../assets/backgrounds/shooting_stars.gif";
import "../index.css";
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
import TailwindIcon from "../assets/icons/Tailwind_icon.svg";
import TypescriptIcon from "../assets/icons/Typescript_icon.svg";
export default function Portfolio_Page() {
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
          <Header PageName="Portfolio" />
          {/* Layer 4: Each Project */}
          <div className="m-5 md:m-10 bg-white rounded-xl overflow-y-scroll h-3/4">
            <h3 className="Orbitron font-bold text-lg tracking-wide m-5">
              Abelian Capital Website
            </h3>

            <div className="flex flex-row flex-wrap justify-evenly">
              <div className="flex flex-row ">
                <h4 className="Orbitron text-lg tracking-wide font-bold col-span-1">
                  Visit:{" "}
                </h4>
                <a
                  href="https://abelianwebpagehosting.s3-website-us-east-1.amazonaws.com/"
                  className="col-span-2"
                >
                  abelian.capital
                </a>
              </div>

              <div className="flex flex-row flex-wrap justify-evenly">
                <h4 className="Orbitron text-lg tracking-wide font-bold col-span-1">
                  Timeframe:{" "}
                </h4>
                <time dateTime="2022--09-02" className="col-span-2">
                  09/2022 - 12/2022
                </time>
              </div>

              <div className="flex flex-row justify-evenly">
                <h4 className="Orbitron text-lg tracking-wide font-bold">
                  Stack:{" "}
                </h4>
                <img src={ReactIcon} alt="ReactJS" className=" w-16 h-16" />
                <img src={TailwindIcon} alt="Tailwind" className=" w-16 h-16" />
                <img src={AWSIcon} alt="Tailwind" className=" w-16 h-16" />
                <img src={DockerIcon} alt="Tailwind" className=" w-16 h-16" />
              </div>
            </div>

            <h4 className="Orbitron text-lg tracking-wide font-bold">
              The Process:
            </h4>
            <p className="p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              maiores eum. Id sint optio, quo quis laborum vero? Non
              reprehenderit animi expedita commodi ducimus tenetur architecto
              dignissimos, soluta ullam voluptatem! At necessitatibus adipisci
              harum doloribus, commodi quod magni est veniam illum pariatur sed
              maxime deserunt, voluptatibus iste laboriosam aliquid debitis?
              Laudantium, possimus? Accusamus nostrum quis nulla autem iste
              dolor sapiente. Minima corporis dolorum architecto libero
              explicabo! Iste officiis rem tempora consequuntur quia quasi,
              iusto maxime eaque expedita exercitationem quos doloremque, illo
              ullam quam ipsam consequatur ratione cumque veritatis est?
              Laborum. Nemo fugit, earum odit, mollitia cum iure similique
              eveniet amet dolorem voluptate iste quaerat deleniti eaque fugiat
              praesentium neque consequuntur, ipsa qui? Eaque consequuntur autem
              dolore eligendi quas laudantium dolorem. Nihil nemo voluptatibus
              nisi ea, nam optio deleniti corporis cum consequuntur hic nulla
              beatae illum vero accusantium modi minima ducimus necessitatibus
              temporibus suscipit architecto blanditiis tempore. Numquam dolorum
              deleniti odit. Provident ipsum ullam nesciunt! Aliquid omnis quis
              error odit distinctio non eos veritatis ex. Dolore doloremque
              itaque fugiat? A ut sequi enim atque temporibus harum sint? Quo
              animi facere deserunt! Cupiditate, dolore velit fugiat tempore
              ducimus repellendus deleniti, molestias, eaque id facere quasi
              aliquam repellat necessitatibus mollitia excepturi aut voluptate
              soluta omnis dolorem. Labore distinctio ab voluptates vel est.
              Quas. Eligendi ducimus expedita doloribus. Perferendis optio
              commodi dignissimos temporibus aut excepturi quo nihil dolor
              doloribus a reiciendis itaque minus quod vitae quae sunt officiis,
              illo repellendus placeat maiores voluptates dicta! Quidem commodi
              reprehenderit nisi error laudantium qui perferendis laborum,
              expedita ullam labore obcaecati accusamus aliquid exercitationem
              officia. Minima aut, aperiam error fuga dignissimos nihil
              recusandae totam atque repellendus alias nobis. Laudantium saepe
              maxime rerum quia odio veritatis doloribus reprehenderit autem
              ducimus! Voluptatum nisi perspiciatis et veritatis deserunt
              aspernatur autem, ipsam porro cum nostrum repudiandae ullam
              voluptas sunt atque sit eius. Minus voluptatum explicabo suscipit
              reiciendis quod commodi dignissimos ea porro, eos rerum quam
              consectetur repudiandae inventore magnam itaque vitae ipsam cumque
              eligendi hic, sint dicta labore! Nemo ad ea atque. Ea ipsa officia
              est quia ab porro, iste minima voluptate numquam facilis dolore
              quibusdam, modi dicta recusandae. Dolorum distinctio repudiandae,
              reiciendis error commodi sunt, voluptas eum praesentium obcaecati,
              aspernatur laudantium. Odit modi harum corrupti voluptatem ratione
              iste reiciendis. Repudiandae eius corrupti non blanditiis,
              obcaecati corporis provident? Provident in deserunt cupiditate
              autem natus consequuntur eos amet. Incidunt non assumenda iure et!
              Nam, architecto officia? Dolorum fugit totam dolores voluptatum
              architecto voluptatem ipsa deleniti, error, quod, nulla sapiente
              fugiat porro perspiciatis labore libero mollitia cumque neque
              deserunt ipsam beatae blanditiis laborum. Asperiores. Consequatur
              repellat delectus esse qui sequi veniam dignissimos quisquam.
              Natus sapiente vero veritatis rerum similique. Totam laboriosam
              iste esse possimus doloribus porro eaque delectus vero! Obcaecati
              quod officia minus nostrum. Laudantium inventore tempora
              repellendus incidunt, exercitationem ipsa! Magnam sunt a veniam
              itaque expedita cum modi nesciunt quae voluptatem quasi
              perspiciatis vel eius, illum beatae commodi ab soluta quia
              laboriosam! Nam? Esse mollitia deserunt magnam exercitationem enim
              earum numquam eos debitis! Dignissimos, a eligendi nemo omnis sint
              aliquid, fuga natus nulla quos iure quod necessitatibus iste odio
              minus qui dolor nihil. Ipsum qui totam harum eum quos perspiciatis
              doloribus corporis odio. Aut vitae ad iste odit, minus, quo
              doloremque est perspiciatis, ex non saepe accusantium assumenda
              maxime adipisci quidem accusamus amet. Voluptatibus, eos
              aspernatur voluptate recusandae reprehenderit, dignissimos, ea
              blanditiis quibusdam dolorum tempore deleniti. Consectetur autem
              dolor ipsam velit quasi. Recusandae, odio doloremque. Pariatur,
              ullam. Illum dolore unde quae? Accusamus, facilis! Non maxime id
              eos consequuntur! Nihil sint deserunt perferendis, voluptate
              debitis cum! Tenetur earum eius distinctio! Quam facere
              perspiciatis ullam consequatur magnam, nam rerum, nesciunt saepe
              iste blanditiis ducimus nostrum!
            </p>
            <h4 className="Orbitron text-lg tracking-wide font-bold">
              The Code:
            </h4>
          
          </div>
          {/* <ContactMe /> */}
        </div>
      </div>
    </>
  );
}
