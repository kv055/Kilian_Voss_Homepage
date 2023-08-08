import React from "react";
import Background from "../assets/backgrounds/space_purp.gif";
import Header from "../components/navbar_header";
import PicCV from "../components/ProfilepagePicCV";
import ContactMe from "../components/ProfilepageContactMe";

export default function Profile_Page() {
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
        <div className="m-2 md:m-8 bg-slate-300 max-h-screen max-w-screen-xl rounded-xl opacity-60 justify-center text-center p-2 xl:p-10">
          {/* Layer 3: */}
          <Header PageName="Profile" />
          <PicCV />
          <h3 className="Orbitron p-5 tracking-widest">Introduction</h3>
          <div className="md:m-5 bg-white max-h-screen rounded-xl justify-center ">
            <div className="grid grid-cols-2 grid-rows-2">
              <p className="row-span-1 col-span-2 Orbitron p-5 leading-6 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                maiores eum. Id sint optio, quo quis laborum vero? Non
                reprehenderit animi expedita commodi ducimus tenetur architecto
                dignissimos, soluta ullam voluptatem! At necessitatibus adipisci
                harum doloribus, commodi quod magni est veniam illum pariatur
                sed maxime deserunt, voluptatibus iste laboriosam aliquid
                debitis? Laudantium, possimus? Accusamus nostrum quis nulla
                autem iste dolor sapiente. Minima corporis dolorum architecto
                libero explicabo! Iste officiis rem tempora consequuntur quia
                quasi, iusto maxime eaque expedita exercitationem quos
                doloremque, illo ullam quam ipsam consequatur ratione cumque
                veritatis est? Laborum. Nemo fugit, earum odit, mollitia cum
                iure similique eveniet amet dolorem voluptate iste quaerat
                deleniti eaque fugiat praesentium neque consequuntur, ipsa qui?
                Eaque consequuntur autem dolore eligendi quas laudantium
                dolorem. Nihil nemo voluptatibus nisi ea, nam optio deleniti
                corporis cum consequuntur hic nulla beatae illum vero
                accusantium modi minima ducimus necessitatibus temporibus
                suscipit architecto blanditiis tempore. Numquam dolorum deleniti
                odit. Provident ipsum ullam nesciunt! Aliquid omnis quis error
                odit distinctio non eos veritatis ex. Dolore doloremque itaque
                fugiat? A ut sequi enim atque temporibus harum sint? Quo animi
                facere deserunt! Cupiditate, dolore velit fugiat tempore ducimus
                repellendus deleniti, molestias, eaque id facere quasi aliquam
                repellat necessitatibus mollitia excepturi aut voluptate soluta
                omnis dolorem. Labore distinctio ab voluptates vel est. Quas.
                Eligendi ducimus expedita doloribus. Perferendis optio commodi
                dignissimos temporibus aut excepturi quo nihil dolor doloribus a
                reiciendis itaque minus quod vitae quae sunt officiis, illo
                repellendus placeat maiores voluptates dicta! Quidem commodi
                reprehenderit nisi error laudantium qui perferendis laborum,
                expedita ullam labore obcaecati accusamus aliquid exercitationem
                officia. Minima aut, aperiam error fuga dignissimos nihil
                recusandae totam atque repellendus alias nobis. Laudantium saepe
                maxime rerum quia odio veritatis doloribus reprehenderit autem
                ducimus! Voluptatum nisi perspiciatis et veritatis deserunt
                aspernatur autem, ipsam porro cum nostrum repudiandae ullam
                voluptas sunt atque sit eius. Minus voluptatum explicabo
                suscipit reiciendis quod commodi dignissimos ea porro, eos rerum
                quam consectetur repudiandae inventore magnam itaque vitae ipsam
                cumque eligendi hic, sint dicta labore! Nemo ad ea atque. Ea
                ipsa officia est quia ab porro, iste minima voluptate numquam
                facilis dolore quibusdam, modi dicta recusandae. Dolorum
                distinctio repudiandae, reiciendis error commodi sunt, voluptas
                eum praesentium obcaecati, aspernatur laudantium. Odit modi
                harum corrupti voluptatem ratione iste reiciendis. Repudiandae
                eius corrupti non blanditiis, obcaecati corporis provident?
                Provident in deserunt cupiditate autem natus consequuntur eos
                amet. Incidunt non assumenda iure et! Nam, architecto officia?
                Dolorum fugit totam dolores voluptatum architecto voluptatem
                ipsa deleniti, error, quod, nulla sapiente fugiat porro
                perspiciatis labore libero mollitia cumque neque deserunt ipsam
                beatae blanditiis laborum. Asperiores. Consequatur repellat
                delectus esse qui sequi veniam dignissimos quisquam. Natus
                sapiente vero veritatis rerum similique. Totam laboriosam iste
                esse possimus doloribus porro eaque delectus vero! Obcaecati
                quod officia minus nostrum. Laudantium inventore tempora
                repellendus incidunt, exercitationem ipsa! Magnam sunt a veniam
                itaque expedita cum modi nesciunt quae voluptatem quasi
                perspiciatis vel eius, illum beatae commodi ab soluta quia
                laboriosam! Nam? Esse mollitia deserunt magnam exercitationem
                enim earum numquam eos debitis! Dignissimos, a eligendi nemo
                omnis sint aliquid, fuga natus nulla quos iure quod
                necessitatibus iste odio minus qui dolor nihil. Ipsum qui totam
                harum eum quos perspiciatis doloribus corporis odio. Aut vitae
                ad iste odit, minus, quo doloremque est perspiciatis, ex non
                saepe accusantium assumenda maxime adipisci quidem accusamus
                amet. Voluptatibus, eos aspernatur voluptate recusandae
                reprehenderit, dignissimos, ea blanditiis quibusdam dolorum
                tempore deleniti. Consectetur autem dolor ipsam velit quasi.
                Recusandae, odio doloremque. Pariatur, ullam. Illum dolore unde
                quae? Accusamus, facilis! Non maxime id eos consequuntur! Nihil
                sint deserunt perferendis, voluptate debitis cum! Tenetur earum
                eius distinctio! Quam facere perspiciatis ullam consequatur
                magnam, nam rerum, nesciunt saepe iste blanditiis ducimus
                nostrum!
              </p>
            </div>
          </div>
          <ContactMe />
        </div>
      </div>
    </>
  );
}
