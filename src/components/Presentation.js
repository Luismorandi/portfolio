import "./presentation.css";
import Yo from "../assets/yo.gif";
import Github from "../assets/github.png";
import LinkedinIcon from "../assets/linkedinIcon.png";

const Presentation = () => {
  return (
    <div className="presentation-container" id="home">
      <div className="presentation-description">
        <h1>Hola, Soy Luis :) </h1>
        <h3>FrontEnd Developer</h3>
        <h4>
          Soy desarrollador FrontEnd. Gracias por ver mi Portfolio, espero que
          podamos hablar pronto!
        </h4>
        <div>
          <a href="https://github.com/Luismorandi" target="_blank">
            <img src={Github} alt="" className="icon-presentation" />
          </a>
          <a href="https://www.linkedin.com/in/luismorandi/" target="_blank">
            <img src={LinkedinIcon} alt="" className="icon-presentation" />
          </a>
        </div>
      </div>
      <div className="presentation-emoji">
        <img src={Yo} alt="" className="presentation-emoji-size" />
      </div>
    </div>
  );
};

export default Presentation;
