import "./project.css";
import Github from "../../assets/githubLine.png"
import LinkIcon from "../../assets/link.png"

const Project = ({ name, id, description, linkGithub, linkDemo }) => {
  return (
    <div className="portfolio-content grid">
      <img
        src={require(`../../assets/image${id}.png`)}
        alt=""
        className="portfolio-img"
      />
      <div className="portfolio-data">
        <h3 className="portfolio-title">{name}</h3>
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
