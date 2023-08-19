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
  const limitedChartData2 = chartData.slice(-7); // Limit the chartData array to the desired number of data points

  const options = {
    plugins: {
      legend: { display: true },
      elements: {
        line: {
          tension: 0,
          borderWidth: 2,
          borderColor: "rgba(47,97,68,1)",
          fill: "start",
          backgroundColor: "rgba(47,97,68,1)",
        },
        point: { radius: 0, hitRadius: 0 },
      },
      scales: { xAxis: { display: true }, yAxis: { display: true } },
      tooltip: {
        callbacks: {
          title: function (tooltipItem) {
            // Format the tooltip title as the full date
            const index = tooltipItem[0].dataIndex;
            const item = limitedChartData2[index];
            return item.Date;
          },
        },
      },
    },
  };
  const day =
    limitedChartData2 &&
    limitedChartData2.map((item, index) => {
      const date = new Date(item.Date);
      const dayOfWeek = daysOfWeek[date.getDay()];

      //   return { x: item.Date, y: item.RSI };
      return item.RSI;
    });
  const dayMSA =
    limitedChartData2 &&
    limitedChartData2.map((item, index) => {
      const date = new Date(item.Date);
      const dayOfWeek = daysOfWeek[date.getDay()];

      //   return { x: item.Date, y: item.RSI };
      return item.MSA;
    });
  const daySAS =
    limitedChartData2 &&
    limitedChartData2.map((item, index) => {
      const date = new Date(item.Date);
      const dayOfWeek = daysOfWeek[date.getDay()];

      //   return { x: item.Date, y: item.RSI };
      return item.SAS;
    });

  const data = {
    datasets: [
      {
        label: "MSA",
        data: dayMSA,

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
        data: daySAS,

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
        data: day,

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
    labels:
      limitedChartData2 &&
      limitedChartData2.map((item) => {
        const date = new Date(item.Date);
        return daysOfWeek[date.getDay()].slice(0, 3);
      }),
  };

  return (
    <div className='max-w-full'>
      <Line data={data} width={400} height={height} options={options} />
    </div>
  );
};

export default Charts;
