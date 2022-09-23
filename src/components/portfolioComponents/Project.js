import "./project.css";
import Github from "../../assets/githubLine.png"
import LinkIcon from "../../assets/link.png"

const Project = ({ name, id, description, linkGithub, linkDemo }) => {
  return (
    <div className="portfolio-content grid">
       <a href={linkDemo} target="_blank" rel=" noreferrer" className="linkto">
      
      <img
        src={require(`../../assets/image${id}.png`)}
        alt=""
        className="portfolio-img"
        />
        </a>
      <div className="portfolio-data">
      <a href={linkDemo} target="_blank" rel=" noreferrer">
        <h3 className="portfolio-title">{name}</h3>
  </a>
        <p className="portfolio-description">{description}</p>

        <div>
          <a href={linkGithub} target="_blank" rel="noreferrer">
            <img src={Github} alt=""  />
          </a>
          <a href={linkDemo} target="_blank" rel=" noreferrer">
            <img src={LinkIcon} alt=""  />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
