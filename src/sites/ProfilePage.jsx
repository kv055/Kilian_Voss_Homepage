import React from "react";
import Background from "../assets/backgrounds/space_purp.gif";
import Email from "../assets/icons/Email_icon.svg";
import Github from "../assets/icons/Github_icon.svg";
import LinkedIn from "../assets/icons/LinkedIn_icon.svg";
import Upwork from "../assets/icons/Upwork_icon.svg";
import ProfilePicture from "../assets/Kilian.jpg";
import Header from "../components/navbar_header";
import PDFViewer from "../components/pdf_viewer";
import CV from "../assets/Coding_CV_23.pdf";

export default function Profile_Page() {
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
        <div className="m-5 md:m-10 xl:m-28 bg-slate-300 max-h-screen rounded-xl opacity-60 justify-center scrollable-content">
          {/* Layer 3: */}
          <div className="flex p-10 flex-col text-center">
            <Header PageName="Profile" />
            <div className="m-5 md:m-10 xl:m-28 bg-white max-h-screen rounded-xl justify-center ">
              <h3>Introduction</h3>
              <div className="grid grid-cols-2 grid-rows-2">
                <img className="row-span-2 col-span-1" src={ProfilePicture} alt="" />
                <h3>CV:</h3>
                <PDFViewer
                  Document={"https://www.fao.org/3/ca5644en/ca5644en.pdf"}
                />
                <p className="row-span-1 col-span-2 scrollable-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, maiores eum. Id sint optio, quo quis laborum vero? Non
                  reprehenderit animi expedita commodi ducimus tenetur
                  architecto dignissimos, soluta ullam voluptatem! At
                  necessitatibus adipisci harum doloribus, commodi quod magni
                  est veniam illum pariatur sed maxime deserunt, voluptatibus
                  iste laboriosam aliquid debitis? Laudantium, possimus?
                  Accusamus nostrum quis nulla autem iste dolor sapiente. Minima
                  corporis dolorum architecto libero explicabo! Iste officiis
                  rem tempora consequuntur quia quasi, iusto maxime eaque
                  expedita exercitationem quos doloremque, illo ullam quam ipsam
                  consequatur ratione cumque veritatis est? Laborum. Nemo fugit,
                  earum odit, mollitia cum iure similique eveniet amet dolorem
                  voluptate iste quaerat deleniti eaque fugiat praesentium neque
                  consequuntur, ipsa qui? Eaque consequuntur autem dolore
                  eligendi quas laudantium dolorem. Nihil nemo voluptatibus nisi
                  ea, nam optio deleniti corporis cum consequuntur hic nulla
                  beatae illum vero accusantium modi minima ducimus
                  necessitatibus temporibus suscipit architecto blanditiis
                  tempore. Numquam dolorum deleniti odit. Provident ipsum ullam
                  nesciunt! Aliquid omnis quis error odit distinctio non eos
                  veritatis ex. Dolore doloremque itaque fugiat? A ut sequi enim
                  atque temporibus harum sint? Quo animi facere deserunt!
                  Cupiditate, dolore velit fugiat tempore ducimus repellendus
                  deleniti, molestias, eaque id facere quasi aliquam repellat
                  necessitatibus mollitia excepturi aut voluptate soluta omnis
                  dolorem. Labore distinctio ab voluptates vel est. Quas.
                  Eligendi ducimus expedita doloribus. Perferendis optio commodi
                  dignissimos temporibus aut excepturi quo nihil dolor doloribus
                  a reiciendis itaque minus quod vitae quae sunt officiis, illo
                  repellendus placeat maiores voluptates dicta! Quidem commodi
                  reprehenderit nisi error laudantium qui perferendis laborum,
                  expedita ullam labore obcaecati accusamus aliquid
                  exercitationem officia. Minima aut, aperiam error fuga
                  dignissimos nihil recusandae totam atque repellendus alias
                  nobis. Laudantium saepe maxime rerum quia odio veritatis
                  doloribus reprehenderit autem ducimus! Voluptatum nisi
                  perspiciatis et veritatis deserunt aspernatur autem, ipsam
                  porro cum nostrum repudiandae ullam voluptas sunt atque sit
                  eius. Minus voluptatum explicabo suscipit reiciendis quod
                  commodi dignissimos ea porro, eos rerum quam consectetur
                  repudiandae inventore magnam itaque vitae ipsam cumque
                  eligendi hic, sint dicta labore! Nemo ad ea atque. Ea ipsa
                  officia est quia ab porro, iste minima voluptate numquam
                  facilis dolore quibusdam, modi dicta recusandae. Dolorum
                  distinctio repudiandae, reiciendis error commodi sunt,
                  voluptas eum praesentium obcaecati, aspernatur laudantium.
                  Odit modi harum corrupti voluptatem ratione iste reiciendis.
                  Repudiandae eius corrupti non blanditiis, obcaecati corporis
                  provident? Provident in deserunt cupiditate autem natus
                  consequuntur eos amet. Incidunt non assumenda iure et! Nam,
                  architecto officia? Dolorum fugit totam dolores voluptatum
                  architecto voluptatem ipsa deleniti, error, quod, nulla
                  sapiente fugiat porro perspiciatis labore libero mollitia
                  cumque neque deserunt ipsam beatae blanditiis laborum.
                  Asperiores. Consequatur repellat delectus esse qui sequi
                  veniam dignissimos quisquam. Natus sapiente vero veritatis
                  rerum similique. Totam laboriosam iste esse possimus doloribus
                  porro eaque delectus vero! Obcaecati quod officia minus
                  nostrum. Laudantium inventore tempora repellendus incidunt,
                  exercitationem ipsa! Magnam sunt a veniam itaque expedita cum
                  modi nesciunt quae voluptatem quasi perspiciatis vel eius,
                  illum beatae commodi ab soluta quia laboriosam! Nam? Esse
                  mollitia deserunt magnam exercitationem enim earum numquam eos
                  debitis! Dignissimos, a eligendi nemo omnis sint aliquid, fuga
                  natus nulla quos iure quod necessitatibus iste odio minus qui
                  dolor nihil. Ipsum qui totam harum eum quos perspiciatis
                  doloribus corporis odio. Aut vitae ad iste odit, minus, quo
                  doloremque est perspiciatis, ex non saepe accusantium
                  assumenda maxime adipisci quidem accusamus amet. Voluptatibus,
                  eos aspernatur voluptate recusandae reprehenderit,
                  dignissimos, ea blanditiis quibusdam dolorum tempore deleniti.
                  Consectetur autem dolor ipsam velit quasi. Recusandae, odio
                  doloremque. Pariatur, ullam. Illum dolore unde quae?
                  Accusamus, facilis! Non maxime id eos consequuntur! Nihil sint
                  deserunt perferendis, voluptate debitis cum! Tenetur earum
                  eius distinctio! Quam facere perspiciatis ullam consequatur
                  magnam, nam rerum, nesciunt saepe iste blanditiis ducimus
                  nostrum!
                </p>
              </div>

              <h3>Contact me:</h3>
              {/* <div className=""> */}
              <ul className="flex flex-row gap-10 justify-center">
                <li>
                  <a href="https://www.linkedin.com/in/kilian-voss-784a5b157/">
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
              {/* </div>    */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
