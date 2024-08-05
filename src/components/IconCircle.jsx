import React from "react";

const IconCircle = ({ componentToRender, className }) => {
  return (
    <div
      className={`md:size-10 size-8 rounded-full bg-lightGrey aspect-square flex items-center justify-center overflow-hidden ${className}`}
    >
      {componentToRender}
    </div>
  );
};

export default IconCircle;
