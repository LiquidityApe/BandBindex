import React from "react";
import { useSelector } from "react-redux";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

const options = {
  cutout: "70%",
};

export default ({ sentiment }) => {
  const { theme } = useSelector((state) => state.Theme);
  const textTheme = theme ? "text-slate-950" : "text-slate-400";
  const data = {
     labels: ["Hope", "Fear"],
    datasets: [
      {
        data: [sentiment, 100 - sentiment],
        backgroundColor: ["#ee9220ff", "#474c53ff"],
        hoverBackgroundColor: ["#04bd64ff", "#c0041dff"],
      },
    ],
  };

  return (
    <>
      <div className='relative bottom-1'>
        <Doughnut data={data} width={200} height={200} options={options} />
      </div>
      <div className={textTheme}>
      <p className='relative bottom-5 font-extrabold text-xl self-center mx-auto'>
        {sentiment <= 39 ? "Fearful" : "Hopeful"}
      </p></div>
    </>
  );
};
