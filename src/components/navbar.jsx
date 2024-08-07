import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import logoImg from "../assets/images/Logo2.png";

const Navbar = () => {
  return (
    <nav className="   flex  justify-between   pt-[32px] pb-[8px] px-6    bg-bg_color">
      <Link to={ROUTES.HOME}>
        {" "}
        <div className="flex justify-center items-center gap-x-3">
          <img src={logoImg} alt=" logo not load" loading=" lazy" />
          <p className=" text-subheadings text-white font-bold">Elies</p>
        </div>{" "}
      </Link>
      <div className=" flex   gap-x-8">
        <Link to={ROUTES.HOME}>
          {" "}
          <p className=" text-white">
            <span className=" text-light_pink">#</span>home
          </p>
        </Link>
        <Link to={ROUTES.PROJECTS}>
          {" "}
          <p className=" text-white">
            <span className=" text-light_pink">#</span>projects
          </p>
        </Link>
        <Link to={ROUTES.CONTACT}>
          {" "}
          <p className=" text-white">
            <span className=" text-light_pink">#</span>contact
          </p>
        </Link>
        <Link to={ROUTES.ABOUT}>
          {" "}
          <p className=" text-white">
            <span className=" text-light_pink">#</span>about
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
