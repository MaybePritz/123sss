import { useState, useEffect } from "react";

export default function WeekForecast({ place }) {
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

  return (
    <div class="w-full max-w-full px-3 mt-6 md:w-4/12 md:flex-none">
      <div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
        <div class="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
          <div class="flex flex-wrap -mx-3">
            <div class="max-w-full px-3 md:w-1/2 md:flex-none">
              <h6 class="mb-0 dark:text-white">Погода на неделю</h6>
            </div>
            <div class="flex items-center justify-end max-w-full px-3 md:w-1/2 md:flex-none">
              <i class="mr-2 ph ph-calendar-blank" aria-hidden="true"></i>
              <small>10 - 17 мая 2023</small>
            </div>
          </div>
        </div>
        <div class="flex-auto p-4 pt-6">
          <ul class="flex flex-col pl-0 mb-0 rounded-lg">
            <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
              <div class="flex items-center">
                <button class="leading-pro ease-soft-in bg-150 w-6 h-6 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center text-center align-middle font-bold uppercase transition-all hover:opacity-75">
                  <i
                    class="ph ph-sun text-2xl text-yellow-500"
                    aria-hidden="true"
                  ></i>
                </button>
                <div class="flex flex-col">
                  <h6 class="mb-1 leading-normal text-sm text-slate-700 dark:text-white">
                    Среда
                  </h6>
                  <span class="leading-tight text-xs">10 мая 2023</span>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center">
                <p class="relative z-10 inline-block m-0 font-semibold leading-normal  text-sm bg-clip-text">
                  10°
                </p>
                <p class="relative z-10 inline-block m-0 font-semibold leading-normal text-xs bg-clip-text">
                  Ясно
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
