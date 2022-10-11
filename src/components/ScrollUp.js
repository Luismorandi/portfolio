import { Link } from "react-scroll"
import "../components/scrollUp.css"




const ScrollUp = () => {



    
    return (
    <Link
    to="home"
    spy={true}
    hashSpy={true}
    smooth={true}
    offset={-80}
    duration={600}
    spyThrottle={100}
    className={ y => 560 ? "mostrar" : "nomostrar"}
    >
      <button className="button-top">
        Pa arriba
      </button>
    </Link>
    )
}

export default ScrollUp