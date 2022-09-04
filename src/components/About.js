import "./about.css";
import ImageAbout from "../assets/fotoyo.gif";
import DownloadIcon from "../assets/iconDownload.png";

const About = () => {
  return (
    <div className="container-about" id="about">
      <div className="photo-about">
        <img src={ImageAbout} alt="" />
      </div>
      <div className="description-about">
        <h1>Sobre mi</h1>
        <h3>
          Esta es la parte donde me tengo que presentar o suplicar que me
          contraten, aunque la segunda opción es tentadora, prefiero contarles
          sobre mi. Despues de ser 7 años reclutador en tech, me di cuenta que
          era la hora de un cambio de área. Exploré varias cosas, hasta que
          llegué a la programación y rapidamente me di cuenta que quería
          trabajar todos los días de esto.
        </h3>
        <h3>
          Soy de Venezuela pero estoy en Buenos Aires hace unos 8 años. Desde el
          2021 vengo estudiando programación y mis skills principales hoy son
          en: Javascript, typescript, HTML, CSS y React.
        </h3>
        <h3>
          Puedes ver más sobre mi, mis skills y los cursos que hice en la
          carrera de FrontEnd que estudie en Coderhouse en mi CV.
        </h3>
        <div className="button-about-container">
          <button className="button-about">
            {" "}
            Descarga mi CV{" "}
            <img src={DownloadIcon} alt="" className="icon-download" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
