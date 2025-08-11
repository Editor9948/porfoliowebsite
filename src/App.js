import "./App.css"
import Home from "./PortfolioContainer/Home/Home";
import Navbar from "./components/Nav/Navbar";
import About from "./components/About Me/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Service from "./components/Services/Service";
import Qualification from "./components/Qualification/Qualification";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact"; 
import Footer from "./components/Footer/Footer";
import Scrollup from "./components/Scrollup/Scrollup";
function App() {
  return (
    <div className="App">
      <Home/>
      <Navbar/>
      <About/>
      <Experience/>
      <Projects/>
      <Service/>
      <Qualification/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <Scrollup/>
       </div>
  );
  
}

export default App;

