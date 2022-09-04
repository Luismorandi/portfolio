import "./navbar.css";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";

const NavBar = () => {
  const sections = [
    { name: "Home", id: "home" },
    { name: "Sobre mi", id: "about" },
    { name: "Proyectos", id: "projects" },
    { name: "Contacto", id: "contact" },
  ];

  return (
    <div className="navbar-container">
      <div className="menu-navbar-container">
        <Link to="/" className="logo-container">
          <img src={Logo} alt="" className="logo" />
        </Link>
        <ul className="menu-list">
          {sections.map((section, index) => (
            <li key={index} className="li-navbar">
              <Link
                to={section.id}
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
                className="a-navbar"
              >
                {section.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
