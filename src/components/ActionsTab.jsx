import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const ActionsTab = ({ ...props }) => {
  return (
    <div className="outer-flex flex items-center justify-between">
      <div className="inner-flex flex items-center xl:gap-5 gap-3">
        <div
          className={`${props.iconColor} ${props.iconBg} xl:size-20 md:size-16 size-12 rounded-full flex items-center justify-center`}
        >
          {props.icon}
        </div>
        <div className="action-text md:text-2xl text-lg">
          {props.actionTitle}
        </div>
      </div>
      <div className="chevron-circle size-8 bg-lightGrey rounded-full flex items-center justify-center">
        <ChevronRightIcon className="size-4 stroke-2" />
      </div>
    </div>
  );
};

export default ActionsTab;
