import React from "react";

const DashboardCard = ({ ...props }) => {
  return (
    <div>
      <div
        className={`${props.cardIconBg} xl:size-12 md:size-10 size-8 flex items-center justify-center rounded-lg`}
      >
        {props.mainIcon}
      </div>
      <div className="md:text-sm text-xs pt-2">{props.headline}</div>
      <div className="flex items-center justify-between md:pt-6 pt-4">
        <div className="xl:text-4xl md:text-3xl text-2xl font-bold">
          {props.number}
        </div>
        <div
          className={`${
            props.status === "up" ? "text-primaryGreen" : "text-primaryRed"
          } flex items-center gap-1 `}
        >
          {props.arrowIcon}
          <div className="md:text-sm text-xs">{`${props.arrowPercentage}%`}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
