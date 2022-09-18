import "./navbar.css";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";
import Menu from "../assets/menu.png";
import { useState } from "react";

const NavBar = () => {
  const sections = [
    { name: "Home", id: "home" },
    { name: "Sobre mi", id: "about" },
    { name: "Proyectos", id: "projects" },
    { name: "Contacto", id: "contact" },
  ];

  const [activeMenu, setActiveMenu]= useState (true)

  const hiddenMenu = () =>{
    if(activeMenu === true) {
      setActiveMenu(false)

    }

    else{
      setActiveMenu(true)
    }
    
  }

  return (

    <header className="header-navbar">
      <div className="menu-navbar-container">

    <Link to="/" className="logo-navbar">
      <img src={Logo} alt="" id="logo" />{" "}
    </Link>
    <div>
    <img src={Menu} alt="" className="menu-logo" onClick={hiddenMenu}/>

      <ul className={
        activeMenu ===true ? "submenu-navbar" : " submenu-navbar2"
      }>
       

        {sections.map((section, index) => (
          
          <li key={index} className="li-navbar">
           
              <Link
                to={section.id}
                spy={true}
                hashSpy={true}
                smooth={true}
                offset={-80}
                duration={600}
                spyThrottle={100}
                className="a-navbar"
                onClick={ () => hiddenMenu() }
                >
                {section.name}
              </Link>
              <label htmlFor="check2">
              </label>
              <input type="checkbox" id="check2" />
            </li>
          ))}
      </ul>
    </div>
 
          </div>
  </header>
/*     <div className="navbar-container">
      <div className="menu-navbar-container">
        <Link to="/" className="logo-container">
          <img src={Logo} alt="" className="logo" />
        </Link>
        <label htmlFor="check">
        <Link to="/" className="logo-container">
          <img src={Menu} alt="" className="menu-logo" />
        </Link>
        </label>
        <input type="checkbox" id="check" />
      
        <ul className="menu-list">
          {sections.map((section, index) => (
            <li key={index} className="li-navbar">
              <Link
                to={section.id}
                spy={true}
                smooth={true}
                offset={-120}
                duration={800}
                className="a-navbar"
                >
                {section.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div> */
  );
};

export default NavBar;
