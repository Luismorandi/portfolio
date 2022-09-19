import PortfolioList from "../portfolioComponents/PortfolioList"
import "./portfolioContainer.css";

const projects = [
  {
    name: "Cub Consultora",
    img: "../assets/cubconsultora.png",
    id: 1,
    description:
      "Cub Consultora fue mi pirmer proyecto. Fue hecho con HTML5, CSS3 y Bootstrap. Es una página de presentación de una consultora con información sobre sus servicios. ",
    linkGithub:"https://github.com/Luismorandi/proyectoFinalCoderhouse",
    linkDemo:"https://6313f44f7f1ade040c6d82ab--glistening-starburst-69d848.netlify.app/index.html",
  },
  {
    name: "Cuadritos",
    img: "../assets/yo2.png",
    id: 2,
    description:
      "Cuadritos es un eCommerce hecho con Javascript Vanilla. Tiene como funcionalidad extra un realizador de precio automatico que se va modificando mientras el stock se va reduciendo.",
      linkGithub:"https://github.com/Luismorandi/ecommerceCuadritos/tree/master",
      linkDemo:"https://splendid-empanada-8ca625.netlify.app/index.html",
  },
  {
    name: "AllStore",
    img: "../assets/yo3.png",
    id: 3,
    description:
      "AllStore es un  eCommerce hecho con React, utilizando Firestore para los datos. Puedes hacer una compra completa, con 3 funcionalidades principales.",
      linkGithub:"https://github.com/Luismorandi/superapp",
      linkDemo:"https://kaleidoscopic-puppy-671b33.netlify.app/",
  },
  {
    name: "Portfolio LM",
    img: "../assets/yo3.png",
    id: 4,
    description:
      "AllStore es un  eCommerce hecho con React, utilizando Firestore para los datos. Puedes hacer una compra completa, con 3 funcionalidades principales.",
      linkGithub:"https://github.com/Luismorandi/portfolio.git",
      linkDemo:"https://kaleidoscopic-puppy-671b33.netlify.app/",
  },
];

const PortfolioContainer = () => {
  return (
    
    <section className="section-portfolio-container" id="projects">
      <div className="maxwidth">


      <div className="portfolio-title-container" id="projects">Portfolio</div>
      <div className="portfolio-container" >
        <PortfolioList projects={projects} />
      </div>
      </div>
    </section>
    
  );
};

export default PortfolioContainer;
