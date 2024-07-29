import React from "react";
import CardBtn from "./cardBtn";
const SmallProjectCard = ({ Data }) => {

  console.log("data", Data)

  return (
    <div className=" border border-light_gray text-light_gray w-[331px] h-fit font-semibold">
      <p className="  p-2 border border-light_gray border-b-1  border-r-0 border-l-0  border-t-0">
        {Data.skills.map((skill, index) => (
          <span className="font-normal p-2" key={index}>
            {skill}
          </span>
        ))}
      </p>
      <div className=" border-light_gray p-4 flex flex-col gap-y-2">
        <h3 className="text-subheading text-white font-medium">{Data.title}</h3>
        <p className="font-normal">{Data.subheading}</p>
        <div className=" flex gap-2">
          {Data.buttons.map((btn, index) => (
            <CardBtn key={index} btn={btn} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallProjectCard;
