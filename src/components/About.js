import "./about.css";
import ImageAbout from "../assets/fotoyo.png";
import DownloadIcon from "../assets/iconDownload.png";

const About = () => {
  return (
    
    <section className="section-about-container" id="about">
      <div>


    <div className="tittle-about" >
        <h1>Sobre mi</h1>
    </div> 
    <div className="container-about" >
    <div className="description-about">
        <h3>
        Despues de ser 7 años Reclutador IT, me di cuenta que
          era la hora de un cambio de área. Exploré varias cosas, hasta que
          llegué a la programación y rapidamente entendí que quería
          trabajar todos los días de esto.
        </h3>
        <h3>
          Soy de Venezuela pero estoy en Buenos Aires hace unos 8 años. En el 2022
          culmine la carrerra FrontEnd dev y mis skills técnicos principales son: Javascript, typescript, HTML, CSS y React. Como añadido tengo conocimiento en UX.
        </h3>
        <h3>
          Puedes ver más sobre mi, mis skills y los certificados de mis cursos en mi CV.
        </h3>
        <div className="button-about-container">
        <a href="https://drive.google.com/file/d/1HwKXiFJ7BUVWdvd1sMDgb6UaXzxd_L9b/view?usp=sharing" className="link-about" target="_blank" rel=" noreferrer">

          <button className="button-about">
            {" "}
            Descarga mi CV{" "}
            <img src={DownloadIcon} alt="" className="icon-download" />
          </button>
        </a>
        </div>
        </div>
      <div className="photo-about">
        <img src={ImageAbout} alt="" />
      </div>
     
      
    </div>
      </div>
    </section>
  
  );
};

export default About;
