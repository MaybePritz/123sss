import Forecast_Skeleton from "../skeletons/forecasts/forecast";
export default function Forecast({ data, place }) {
if (JSON.stringify(data) === '{}') return <Forecast_Skeleton />;
  switch (data.current.condition.code) {
    case 1000:
      var weather_2d_icon = "ph-fill ph-sun ";
      var weather_3d_icon = "sun";
      if (data.current.is_day == "0") {
        var weather_2d_icon = "ph-fill ph-moon-stars";
        var weather_3d_icon = "moon-stars";
      }
      break;
    case 1003:
      var weather_2d_icon = "ph-fill ph-cloud-sun";
      var weather_3d_icon = "cloud-sun";
      if (data.current.is_day == "0") {
        var weather_2d_icon = "ph-fill ph-cloud-moon";
        var weather_3d_icon = "cloud-moon";
      }
      break;
    case 1006:
    case 1009:
      var weather_2d_icon = "ph-fill ph-cloud";
      var weather_3d_icon = "cloud";
      break;
    case 1030:
    case 1135:
    case 1147:
      var weather_2d_icon = "ph-fill ph-cloud-fog";
      var weather_3d_icon = "sun-cloud-fog";
      if (data.current.is_day == "0") {
        var weather_3d_icon = "moon-cloud-fog";
      }
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
      var weather_2d_icon = "ph-fill ph-cloud-rain";
      var weather_3d_icon = "cloud-rain";
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
      var weather_2d_icon = "ph-fill ph-cloud-snow";
      var weather_3d_icon = "cloud-snow";
      break;
    case 1087:
    case 1273:
    case 1276:
    case 1279:
    case 1282:
      var weather_2d_icon = "ph-fill ph-lightning";
      var weather_3d_icon = "lightning";
      break;
    case 1114:
    case 1117:
      var weather_2d_icon = "ph-fill ph-wind";
      var weather_3d_icon = "sun-wind";
      if (data.current.is_day == 0) {
        var weather_3d_icon = "moon-wind";
      }
      break;
    default:
      var weather_2d_icon = "ph-fill ph-question";
  };

  //last updated time const
  const weatherDate = new Date(Number(data.current.last_updated_epoch) * 1000);

  return (
    <>
      <div className="lg:w-4/12 px-3 mt-6 lg:mb-0 lg:flex-none">
        <div className="relative h-full flex flex-col min-w-0 break-words bg-white dark:bg-gray-950 rounded-3xl bg-clip-border ">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap -mx-3">
              <div className="max-w-full px-3 lg:flex-none">
                <div className="flex flex-col h-full">
                  <p className="pt-2 mb-4 font-semibol">
                    Погода на{" "}
                    {weatherDate.getHours() +
                      ":" +
                      (weatherDate.getMinutes() < 10 ? "0" : "") +
                      weatherDate.getMinutes()}
                  </p>
                  <h5 className="font-bold text-7xl my-4 dark:text-white">
                    {data.current.temp_c}&#176;
                  </h5>
                  <div className="mb-0  flex items-center group">
                    <i
                      className={`${weather_2d_icon} text-3xl group-hover:scale-110 ease-bounce leading-normal transition-all duration-200 mr-2`}
                    ></i>
                    <p className="text-lg font-medium m-0">
                      {data.current.condition.text}
                    </p>
                  </div>
                  <div class="w-full mx-auto mt-auto rounded-xl">
                    <div class="flex flex-wrap mt-0">
                      <div class="flex-none w-1/3 max-w-full py-4 pl-0 pr-3 mt-0">
                        <div class="flex mb-2">
                          <div class="flex items-center justify-center w-6 h-6 mr-2 text-center bg-center rounded  shadow-soft-2xl bg-gradient-to-tl from-[#1D976C] to-[#93F9B9]">
                            <i class="ph-fill ph-thermometer-hot text-white"></i>
                          </div>
                          <p class="mt-1 mb-0 font-semibold leading-tight text-xs">
                            Макс. Темп
                          </p>
                        </div>
                        <h4 class="font-bold dark:text-white">
                          {data.forecast.forecastday[0].day.maxtemp_c}&#176;
                        </h4>
                        <div class="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
                          <div
                            class="duration-600 ease-soft -mt-0.4 -ml-px flex h-1.5 w-9/10 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all"
                            role="progressbar"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div class="flex-none w-1/3 max-w-full py-4 pl-0 pr-3 mt-0">
                        <div class="flex mb-2">
                          <div class="flex items-center justify-center w-6 h-6 mr-2 text-center bg-center rounded  shadow-soft-2xl bg-gradient-to-tl from-[#1D976C] to-[#93F9B9]">
                            <i class="ph-fill ph-thermometer-cold text-white"></i>
                          </div>
                          <p class="mt-1 mb-0 font-semibold leading-tight text-xs">
                            Мин. Темп
                          </p>
                        </div>
                        <h4 class="font-bold dark:text-white">
                          {data.forecast.forecastday[0].day.mintemp_c}&#176;
                        </h4>
                        <div class="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
                          <div
                            class="duration-600 ease-soft -mt-0.4 w-3/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div class="flex-none w-1/3 max-w-full py-4 pl-0 pr-3 mt-0">
                        <div class="flex mb-2">
                          <div class="flex items-center justify-center w-6 h-6 mr-2 text-center bg-center rounded  shadow-soft-2xl bg-gradient-to-tl from-[#1D976C] to-[#93F9B9]">
                            <i class="ph-fill ph-ruler text-white"></i>
                          </div>
                          <p class="mt-1 mb-0 font-semibold leading-tight text-xs">
                            Давление
                          </p>
                        </div>
                        <h4 class="font-bold dark:text-white">
                          {Math.round(data.current.pressure_mb / 1.333)} мм{" "}
                        </h4>
                        <div class="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
                          <div
                            class="duration-600 ease-soft -mt-0.4 w-1/2 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all"
                            role="progressbar"
                            aria-valuenow="30"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
