import WeekForecast_Skeleton from "../skeletons/forecasts/forecast_week";
export default function WeekForecast({ data }) {
if(!data) return <WeekForecast_Skeleton />;
  const WeatherItems = data.forecast.forecastday.map((day) => {
    switch (day.day.condition.code) {
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

    const dayTime = new Date(Number(day.date_epoch) * 1000);

    return (
      <li class="flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
        <div class="flex items-center">
          <button class="leading-pro ease-soft-in bg-150 w-6 h-6 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-default items-center justify-center text-center align-middle font-bold uppercase transition-all hover:opacity-75">
            <i class={`${icon} text-2xl`} aria-hidden="true"></i>
          </button>
          <div class="flex flex-col">
            <h6 class="mb-1 leading-normal text-sm text-slate-700 dark:text-white capitalize">
              {dayTime.toLocaleString("ru-Ru", { weekday: "long" })}
            </h6>
            <span class="leading-tight text-xs">
              {dayTime.getDate()}{" "}
              {dayTime.toLocaleString("ru-Ru", { month: "long" })}{" "}
              {dayTime.getFullYear()}
            </span>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center ">
          <p class="m-0 font-semibold leading-normal text-sm bg-clip-text">
            {Math.round(day.day.avgtemp_c)}&#176;
          </p>
          <p class="m-0 font-semibold leading-normal text-xs bg-clip-text">
            {day.day.condition.text}
          </p>
        </div>
      </li>
    );
  });
  return (
    <div class="w-full max-w-full px-3 mt-6 md:w-4/12 md:flex-none">
      <div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
        <div class="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
          <div class="flex flex-wrap -mx-3">
            <div class="max-w-full px-3 md:w-1/2 md:flex-none">
              <h6 class="mb-0 dark:text-white">Погода на 3 дня</h6>
            </div>
            <div class="flex items-center justify-end max-w-full px-3 md:w-1/2 md:flex-none">
              <i class="mr-2 ph ph-calendar-blank" aria-hidden="true"></i>
              <small>
                {new Date().getDate()} -{" "}
                {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).getDate()}{" "}
                {new Date().toLocaleString("ru-Ru", { month: "long" })}{" "}
                {new Date().getFullYear()}
              </small>
            </div>
          </div>
        </div>
        <div class="flex-auto p-4 pt-6">
          <ul class="flex flex-col pl-0 mb-0 rounded-lg">{WeatherItems}</ul>
        </div>
      </div>
    </div>
  );
}
