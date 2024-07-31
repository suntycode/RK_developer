import React from "react";

const Heading = ({Topheading, 
  Bottomheading,}) => {
  return (
    <div className="w-[183px] h-[77px]">
      <p className="pt-4 text-heading text-white">
        <span className=" text-light_pink">/</span>{Topheading}
      </p>
      <p className="text-light_gray mt-2">{Bottomheading}</p>
    </div>
  );
};

export default Heading;
