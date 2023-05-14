import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import TempWeek_Skeleton from "../skeletons/forecasts/temp_week";

export default function TempWeek({ data, place }) {

  if(JSON.stringify(data) === '{}') return <TempWeek_Skeleton />;

  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  const ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5],
        },
        ticks: {
          display: true,
          padding: 10,
          color: "#9ca2b7",
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: true,
          drawTicks: true,
        },
        ticks: {
          display: true,
          color: "#9ca2b7",
          padding: 10,
        },
      },
    },
  };

  let ChartLabels = [];
  let ChartData = [];
  let avg_temp = 0;

  data.forecast.forecastday.map((day) => {
    avg_temp += day.day.avgtemp_c;
    const weekday = new Date(Number(day.date_epoch) * 1000).toLocaleString(
      "ru-Ru",
      { weekday: "long" }
    );
    ChartLabels.push(weekday.charAt(0).toUpperCase() + weekday.slice(1));
    ChartData.push(day.day.avgtemp_c);
  });

  const Chartdata = {
    labels: ChartLabels,
    datasets: [
      {
        label: "Температура",
        weight: 5,
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: "#3A416F",
        data: ChartData,
        fill: false,
        maxBarThickness: 25,
      },
    ],
  };

  return (
    <>
      <div className="w-full max-w-full px-3 mt-6 flex-0 lg:w-8/12">
        <div className="relative flex flex-col min-w-0 overflow-hidden break-words h-full  bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
          <div className="p-4 pb-0 border-black/12.5 rounded-t-2xl border-b-0 border-solid">
            <h5 className="mb-0 font-bold dark:text-white">Температура</h5>
            <p className="mb-0  font-semibold leading-normal capitalize text-sm">
              Ср. температура{" "}
              {Math.round(avg_temp / data.forecast.forecastday.length)}
            </p>
          </div>
          <div className="flex-auto p-0 w-full">
            <Bar
              options={ChartOptions}
              data={Chartdata}
              className="chart-canvas box-border"
            />
          </div>
        </div>
      </div>
    </>
  );
}
