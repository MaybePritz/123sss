import { useState, useEffect } from "react";

export default function SMForecast({ title, date, place }) {
  const [weather, setWeather] = useState(null);
  const [weatherDate, setWeatherDate] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`../api/weather/date/${date}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ location: place }),
    })
      .then((res) => res.json())
      .then((weather) => {
        setWeather(weather);
        setWeatherDate(new Date(Number(weather.date_epoch) * 1000));
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <>
        <div class="w-full max-w-full px-3 shrink-0 sm:flex-0 sm:w-4/12 mt-6">
          <div class="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
            <div class="relative flex-auto p-4">
              <div class="flex flex-wrap -mx-3 ">
                <div class="w-7/12 max-w-full px-3 text-left flex-0 ">
                  <span class="mb-1 font-semibold leading-normal capitalize text-sm text-transparent rounded select-none bg-gray-300">
                    No data
                  </span>
                  <h5 class="mb-0 font-bold dark:text-white text-transparent rounded select-none bg-gray-300">
                    No data
                  </h5>
                  <span class="mt-auto mb-0 font-bold leading-normal text-right text-sm"></span>
                </div>
                <div class="w-5/12 max-w-full px-3 flex-0">
                  <div class="relative text-right">
                    <span class="leading-tight text-xs text-slate-400 text-transparent rounded select-none bg-gray-300">
                      No data
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

  if (!weather)
    return (
      <>
        <div class="w-full max-w-full px-3 shrink-0 sm:flex-0 sm:w-4/12 mt-6">
          <div class="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
            <div class="relative flex-auto p-4">
              <div class="flex flex-wrap -mx-3 ">
                <div class="w-7/12 max-w-full px-3 text-left flex-0">
                  <p class="mb-1 font-semibold leading-normal capitalize text-sm">
                    No data
                  </p>
                  <h5 class="mb-0 font-bold dark:text-white flex items-center">
                    No data
                  </h5>
                  <span class="mt-auto mb-0 font-bold leading-normal text-right text-sm"></span>
                </div>
                <div class="w-5/12 max-w-full px-3 flex-0">
                  <div class="relative text-right">
                    <span class="leading-tight text-xs text-slate-400">
                      No data
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

  switch (weather.day.condition.code) {
    case 1000:
      var icon = "ph-fill ph-sun text-yellow-500";
      break;
    case 1003:
      var icon = "ph-fill ph-cloud-sun text-slate-500";
      break;
    case 1006:
    case 1009:
      var icon = "ph-fill ph-cloud text-slate-500";
      break;
    case 1030:
    case 1135:
    case 1147:
      var icon = "ph-fill ph-cloud-fog text-slate-500";
      break;
    case 1063:
    case 1072:
    case 1150:
    case 1153:
    case 1168:
    case 1171:
    case 1180:
    case 1183:
    case 1186:
    case 1189:
    case 1192:
    case 1195:
    case 1198:
    case 1201:
      var icon = "ph-fill ph-cloud-rain text-blue-500";
      break;
    case 1066:
    case 1069:
    case 1204:
    case 1207:
    case 1210:
    case 1213:
    case 1216:
    case 1222:
    case 1237:
    case 1240:
    case 1243:
    case 1246:
    case 1249:
    case 1252:
    case 1255:
    case 1261:
    case 1264:
      var icon = "ph-fill ph-cloud-snow text-slate-500";
      break;
    case 1087:
    case 1273:
    case 1276:
    case 1279:
    case 1282:
      var icon = "ph-fill ph-lightning text-yellow-500";
      break;
    case 1114:
    case 1117:
      var icon = "ph-fill ph-wind text-blue-500";
      break;
    default:
      var icon = "ph-fill ph-question";
  }

  return (
    <>
      <div class="w-full max-w-full px-3 shrink-0 sm:flex-0 sm:w-4/12 mt-6">
        <div class="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
          <div class="relative flex-auto p-4">
            <div class="flex flex-wrap -mx-3 ">
              <div class="w-7/12 max-w-full px-3 text-left flex-0">
                <p class="mb-1 font-semibold leading-normal capitalize text-sm">
                  {weatherDate.toLocaleDateString("ru-Ru", { weekday: "long" })}
                </p>
                <h5 class="mb-0 font-bold dark:text-white flex items-center">
                  <i class={`${icon} mr-1`}></i> +{weather.day.maxtemp_c}&#176;
                  / +{weather.day.mintemp_c}&#176;
                </h5>
                <span class="mt-auto mb-0 font-bold leading-normal text-right text-sm"></span>
              </div>
              <div class="w-5/12 max-w-full px-3 flex-0">
                <div class="relative text-right">
                  <span class="leading-tight text-xs text-slate-400 capitalize">
                    {weatherDate.getDate()}{" "}
                    {weatherDate.toLocaleString("ru-Ru", { month: "long" })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
