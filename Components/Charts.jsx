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
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Charts = ({ chartData, height }) => {
  const limitedChartData2 = chartData.slice(-7); // Limit the chartData array to the last 7 data points

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      elements: {
        line: {
          tension: 0,
          borderWidth: 1,
          borderColor: "rgba(47,97,68,.3)",
          fill: "start",
        },
        point: {
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "#fff",
          border: 1,
          hoverRadius: 5,
          hoverBackgroundColor: "rgba(75,192,192,1)",
          hoverBorderColor: "rgba(220,220,220,1)",
          hoverBorderWidth: 2,
          radius: 1,
          hitRadius: 10,
        },
      },
      scales: { xAxis: { display: true }, yAxis: { display: true } },
    },
  };

  const data = {
    datasets: [
      {
        label: "MSA",
        data: limitedChartData2.map((item) => item.MSA),
        tension: 0,
        borderWidth: 1,
        borderColor: "rgba(47,97,68,.3)",
        fill: "start",
        backgroundColor: "rgba(83,62,31,.5)",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
      {
        label: "SAS",
        data: limitedChartData2.map((item) => item.SAS),
        tension: 0,
        borderWidth: 1,
        borderColor: "rgba(47,97,68,.3)",
        fill: "start",
        backgroundColor: "rgba(29,153,153,.4)",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
      {
        label: "RSI",
        data: limitedChartData2.map((item) => item.RSI),
        tension: 0,
        borderWidth: 1,
        borderColor: "rgba(47,97,68,.3)",
        fill: "start",
        backgroundColor: "rgba(241,178,91,.3)",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    ],
    labels: limitedChartData2.map((item) =>
      daysOfWeek[new Date(item.Date).getDay()].slice(0, 3)
    ),
  };

  return (
    <div className='w-80 md:w-96  flex justify-center'>
      <Line data={data} height={height} options={options} />
    </div>
  );
};

export default Charts;
