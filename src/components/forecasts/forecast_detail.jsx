import { useState, useEffect } from "react";

export default function ForecastDetail({
  title,
  subtitle,
  info,
  width,
  place,
}) {
  const [weather, setWeather] = useState(null);
  const [weatherDate, setWeatherDate] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`../api/weather`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ place: place }),
    })
      .then((res) => res.json())
      .then((weather) => {
        console.log(weather);
        setWeather(weather);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div class={`w-full max-w-full px-3 md:flex-0 shrink-0 md:w-${width}`}>
        <div class="border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white dark:bg-gray-900 bg-clip-border">
          <div class="flex-auto p-6 text-center select-none animate-pulse">
            <h1 class="relative z-10 text-transparent bg-gray-300 rounded-lg">
              21
            </h1>
            <h6 class="mb-0 font-bold text-transparent bg-gray-300 rounded-lg">
              temp
            </h6>
            <p class="mb-0 text-sm leading-normal opacity-80 text-transparent ">
              Temperature
            </p>
          </div>
        </div>
      </div>
    );

  if (!weather)
    return (
      <div class={`w-full max-w-full px-3 md:flex-0 shrink-0 ${width}`}>
        <div class="border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-900 relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div class="flex-auto p-6 text-center">
            <h1 class="relative z-10 ">Нет данных</h1>
            <h6 class="mb-0 font-bold dark:text-white">{title}</h6>
            <p class="mb-0 text-sm leading-normal opacity-80">{subtitle}</p>
          </div>
        </div>
      </div>
    );

  return (
    <>
      <div
        class={`w-full max-w-full px-3 mt-6 md:flex-0 shrink-0 md:mt-0 md:w-${width}`}
      >
        <div class="border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div class="flex-auto p-6 text-center">
            <h1 class="relative z-10 dark:text-white">
              {weather.current[info] ? weather.current[info] : "Нет данных"}
            </h1>
            <h6 class="mb-0 font-bold dark:text-white">{title}</h6>
            <p class="mb-0 text-sm leading-normal opacity-80 ">{subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
}
