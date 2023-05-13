import { useState, useEffect } from "react";
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

export default function TempWeek({ place }) {
  const [weather, setWeather] = useState(null);
  const [weatherDate, setWeatherDate] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("../api/weather", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ place: place }),
    })
      .then((res) => res.json())
      .then((weather) => {
        setWeather(weather);
        setWeatherDate(
          new Date(Number(weather.current.last_updated_epoch) * 1000)
        );
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    );
  if (!weather) return <p>No weather data</p>;
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

  const Chartdata = {
    labels: [
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
      "Понедельник",
      "Вторник",
    ],
    datasets: [
      {
        label: "Температура",
        weight: 5,
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: "#3A416F",
        data: [18, 18, 13, 20, 19, 21, 23],
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
            <h5 className="mb-0 font-bold dark:text-white">Темепература</h5>
            <p className="mb-0  font-semibold leading-normal capitalize text-sm">
              Ср. температура 25
            </p>
          </div>
          <div className="flex-auto p-0 w-full">
            <Bar
              options={ChartOptions}
              data={Chartdata}
              className="chart-canvas box-border "
            />
          </div>
        </div>
      </div>
    </>
  );
}
