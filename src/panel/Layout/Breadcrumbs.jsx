import React from "react";

const Breadcrumbs = ({ current, currentIcon, prev, prevIcon, mid, midIcon }) => {
  return (
    <div className="flex justify-start items-center" style={{fontSize : "13px"}}>
      <div className="flex justify-center items-center gap-2 ">
        {currentIcon}
        <span>{current}</span> /
      </div>
    </div>
  );
};

export default Breadcrumbs;
