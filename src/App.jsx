import "./App.css";

import "./assets/css/style.css";
import "./assets/css/responsive.css";
import { Route, Router, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Work from "./pages/work";
import logo from "./assets/images/Logo2.png";
import gitImg from "./assets/images/Github.png";
import FigmaImg from "./assets/images/Figma.png";
import discoedImg from "./assets/images/Discord.png";
import Line_media from "./assets/images/Line_media.png";
import dots from "./assets/images/Dots.png";
import R_Rectangle from "./assets/images/R_Rectangle_25.png";
import L_Rectangle from "./assets/images/L_Rectangle_25.png";
import "./assets/css/responsive.css";

function App() {
  return (
    <>
    
       
      
          <div className="  bg-bg_color mx-auto ">
          
              <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.CONTACT} element={<Contact />} />
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route path={ROUTES.PROJECTS} element={<Work />} />
                <Route path="*" element={<Home />} />
              </Routes>
        

          </div>
     
      
 
    </>
  );
}

export default App;




