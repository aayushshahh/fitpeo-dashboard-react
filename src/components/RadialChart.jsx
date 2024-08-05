import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const RadialChart = () => {
  const data = {
    labels: ["Completed"],
    datasets: [
      {
        label: "Goal Completion",
        data: [70],
        backgroundColor: ["#7893F7"],
        borderColor: ["#7893F7"],
        borderWidth: 1,
        borderRadius: [10],
        circumference: 270,
      },
    ],
  };

  const options = {
    cutout: "80%",
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };

  const BackgroundCircle = {
    id: "BackgroundCircle",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx } = chart;
      const xCoord = chart.getDatasetMeta(0).data[0].x;
      const yCoord = chart.getDatasetMeta(0).data[0].y;
      const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
      const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
      const angle = Math.PI / 180;
      const width = outerRadius - innerRadius;
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.strokeStyle = "#2B3065";
      ctx.arc(xCoord, yCoord, outerRadius - width / 2, 0, angle * 360, false);
      ctx.stroke();
    },
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <Doughnut data={data} options={options} plugins={[BackgroundCircle]} />
        <div className="chartLabel absolute top-8 right-8 flex flex-col items-center">
          <div className="percent text-xl font-bold">70%</div>
          <div className="goalText text-xs">Goal</div>
          <div className="goalText text-xs">Completed</div>
        </div>
      </div>
      <div className="lowerText text-xs pt-1">
        * The values here have been rounded off.
      </div>
    </div>
  );
};

export default RadialChart;
