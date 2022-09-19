import "./presentation.css";
import Yo from "../assets/yo.gif";
import Github from "../assets/github.png";
import LinkedinIcon from "../assets/linkedinIcon.png";

const Presentation = () => {
  return (
    <section className="section-presentation-container">

    <div className="presentation-container" id="home">
      <div className="presentation-description">
        <h1>Hola, soy Luis :) </h1>
        <h3>FrontEnd Developer</h3>
        <h4>
          Gracias por ver mi Portfolio, espero que
          podamos hablar pronto. 
        </h4>
        <div>
          <a href="https://github.com/Luismorandi" target="_blank" rel="noreferrer">
            <img src={Github} alt="" className="icon-presentation" />
          </a>
          <a href="https://www.linkedin.com/in/luismorandi/" target="_blank" rel="noreferrer">
            <img src={LinkedinIcon} alt="" className="icon-presentation" />
          </a>
        </div>
      </div>
      <div className="presentation-emoji">
        <img src={Yo} alt="" className="presentation-emoji-size" />
      </div>
    </div>
    </section>
  );
};

export default Presentation;
