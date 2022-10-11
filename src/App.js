
import './App.css';
import NavBar from "./components/NavBar"
import  Presentation from  "./components/Presentation"
import  About from  "./components/About"
import  ContactMeContainer from  "./components/contactComponents/ContactMeContainer"
import  PortfolioContainer from  "./components/portfolioComponents/PortfolioContainer"
import ScrollUp from './components/ScrollUp';

function App() {
  return (
    <>

    <NavBar/>
    <Presentation/>
    <About/>
    <PortfolioContainer/>
    <ContactMeContainer/>
    </>
  )
    
}

export default App;
