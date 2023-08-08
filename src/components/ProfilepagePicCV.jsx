import PDFViewer from "../components/pdf_viewer";
import CV from "../assets/CV23.pdf";
import ProfilePicture from "../assets/Kilian.jpg";

const PicCV = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-evenly align-middle">
        <img
          className="m-8 w-1/3 h-2/3 rounded-xl "
          src={ProfilePicture}
          alt=""
        />
        <div className="flex flex-col mx-auto">
          <h3 className="Orbitron p-5 tracking-widest">CV:</h3>
          <PDFViewer PdfDoc={CV} />
        </div>
      </div>
    </div>
  );
};

export default PicCV;
