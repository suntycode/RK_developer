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

function App() {
  return (
    <>
      <div className="grid sm:grid-cols-12">
        <div className="min-w-[10] sm:col-span-1 bg-bg_color">
          <img src={Line_media} 
          alt="Line-image" className="ml-[17px]"/>
          <img src={dots} alt="" className="ml-[-25px] mt-[1801px]"/>
          <img src={L_Rectangle} alt="" className="ml-[-10px] mt-[1221px]"/>
        </div>
        <div className="sm:col-span-10">
          <div className=" bg-bg_color flex justify-center items-center flex-col">
            <div className=" max-w-[1024px]">
              <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.CONTACT} element={<Contact />} />
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route path={ROUTES.PROJECTS} element={<Work />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </div>

            <footer className=" border border-t-[1px] border-light_gray  border-b-0 border-l-0 border-r-0  w-full flex justify-center items-center  my-4">
              <div className="  max-w-[1024px] my-7 ">
                <div className="flex justify-between  w-[1024px]  ">
                  <div className=" ">
                    <div className=" flex gap-x-3 mb-3">
                      <div className=" flex ">
                        {" "}
                        <img src={logo} />
                        <span className=" text-white font-semibold  ml-2">
                          Elies
                        </span>
                      </div>
                      <p className="  text-light_gray">elias@elias-dev.ml</p>
                    </div>
                    <p className=" text-white">
                      Web designer and front-end developer
                    </p>
                  </div>
                  <div>
                    <p className=" text-white text-subheading font-semibold">
                      Media
                    </p>
                    <div className=" flex gap-2">
                      <img src={gitImg} alt="github" loading="lazy" />
                      <img src={FigmaImg} alt="github" loading="lazy" />
                      <img src={discoedImg} alt="github" loading="lazy" />
                    </div>
                  </div>
                </div>
                <p className=" text-center text-light_gray">
                  © Copyright 2022. Made by Elias
                </p>
              </div>
            </footer>
          </div>
        </div>
        <div className="sm:col-span-1 bg-bg_color">
        <img src={R_Rectangle} alt="" className="mt-[256px] ml-[50px]"/>
        <img src={dots} alt="" className="mt-[1390px] ml-[45px]"/>
        </div>
      </div>
    </>
  );
}

export default App;
