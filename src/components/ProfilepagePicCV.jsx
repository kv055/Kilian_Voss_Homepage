import PDFViewer from "../components/pdf_viewer";
import CV from "../assets/CV23.pdf";
import ProfilePicture from "../assets/Kilian.jpg";

const PicCV = () => {
  return (

      <div className="flex flex-col xl:flex-row justify-evenly items-center">
        <img
          className="w-1/3 h-1/3 rounded-xl"
          src={ProfilePicture}
          alt=""
        />
        <div className="flex flex-col">
          <h3 className="Orbitron p-5 tracking-widest">CV:</h3>
          <PDFViewer PdfDoc={CV} />
        </div>
      </div>

  );
};

export default PicCV;
