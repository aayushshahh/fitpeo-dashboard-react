import React from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import RadialChart from "./RadialChart";

const NetProfitCard = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center items-center justify-between">
      <div className="card-content mb-4 md:mb-0 w-full">
        <div className="card-title text-sm">Net Profit</div>
        <div className="xl:pt-6 md:pt-4 pt-2 total-profit font-bold md:text-4xl text-3xl">
          $ 6759.25
        </div>
        <div className="xl:pt-4 md:pt-2 pt-1 status-tag text-primaryGreen flex items-center gap-1">
          <ArrowUpCircleIcon className="size-4" />
          <div className="md:text-sm text-xs">3%</div>
        </div>
      </div>
      <div className="chart grow-0">
        <RadialChart />
      </div>
    </div>
  );
};

export default NetProfitCard;
