import React from "react";

const PanelHeading = ({ title, para }) => {
  return (
    <div className="mt-5 mb-2">
      <h1 className="font-bold ">{title}</h1>
      <small>{para}</small>
    </div>
  );
};

export default PanelHeading;
