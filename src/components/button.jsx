import React from "react";
import { Link } from "react-router-dom";

const Button = ({ data, item, square }) => {
  return (
    <Link to={data.path}>
      {" "}
      <button
        className={`text-subheading  hover:scale-105   text-white px-[16px] py-[8px] border ${data.border}  ${data.width} flex  items-center justify-center font-bold   `}
      >
        {" "}
        {square} {item} {data.text}{" "}
      </button>
    </Link>
  );
};

export default Button;
