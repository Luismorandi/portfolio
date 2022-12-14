import FormMessage from "../contactComponents/FormMessage";
import "./contactMeContainer.css";
import whatsapp from "../../assets/ws1.png";
import linkedin from "../../assets/linkedin.png";

const ContactMeContainer = () => {
  return (
    <section className="section-contact-container" >
      <div id="contact">
        <div className="title-contact" >
          Contáctame
        </div>

        <div className="container-contact">
          <div className="options-contact">
            <div>Puedes enviarme un mensaje a:</div>
            <div>
              <a href="https://wa.me/541167232714">
                <img src={whatsapp} alt="" className="whatsapp-icon" />
              </a>
              <a href="https://www.linkedin.com/in/luismorandi/">
                <img src={linkedin} alt="" className="whatsapp-icon" />
              </a>
            </div>
          </div>

          <div className="form-contact">
            <FormMessage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMeContainer;
