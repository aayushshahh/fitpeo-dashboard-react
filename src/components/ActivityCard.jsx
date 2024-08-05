import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: [
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
  ],
  datasets: [
    {
      label: "activity",
      data: [
        4, 10, 5, 4, 7, 7, 6, 6.5, 4.9, 2, 7.3, 7.8, 6.8, 10.5, 16.5, 12, 10.2,
        8.4, 4.8, 5.5, 11, 7, 5.5,
      ],
      backgroundColor: "#7893F7",
      borderRadius: 100,
      borderSkipped: false,
      barPercentage: 0.8,
    },
  ],
};
const options = {
  scales: {
    y: {
      min: 0,
      max: 20,
      ticks: {
        stepSize: 5,
      },
    },
    x: {},
  },
  plugins: {
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
    },
  },
};

const ActivityCard = () => {
  return (
    <div>
      <div className="top-content flex items-start justify-between">
        <div className="title xl:text-2xl text-xl font-bold">Activity</div>
        <div className="side-button">
          <div
            type="button"
            className="bg-lightGrey px-4 py-2 rounded-full flex items-center gap-2"
          >
            <div className="md:text-sm text-xs">Weekly</div>
            <PlayIcon className="size-3 rotate-90" />
          </div>
        </div>
      </div>
      <div className="bar-chart">
        <Bar data={data} options={options} className="" />
      </div>
    </div>
  );
};

export default ActivityCard;
