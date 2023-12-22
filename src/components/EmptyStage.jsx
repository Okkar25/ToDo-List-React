import React from "react";
import saveSvg from "../img/save.svg";

const EmptyStage = () => {
  return (
    <div className="hidden last:flex flex-col items-center py-10">
      <img width={150} className="mb-5" src={saveSvg} alt="empty img" />
      <p className="text-md">There is no list.</p>
    </div>
  );
};

export default EmptyStage;
