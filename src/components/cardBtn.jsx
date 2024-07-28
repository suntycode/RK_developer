import React from "react";
import { Link } from "react-router-dom";

const Live = ({ btn }) => {
  return (
    <Link to={btn.href}>
      <button
        className={` font-medium hover:scale-105 p-2 border border-${btn.border_color}  text-${btn.text_color}`}
      >
        {btn.text}
        <span className="ml-2">{btn.icon}</span>
      </button>
    </Link>
  );
};

export default Live;
