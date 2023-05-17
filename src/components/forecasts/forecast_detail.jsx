import { useEffect, useState } from "react";
import ForecastDetail_Skeleton from "../skeletons/forecasts/forecast_detail";

export default function ForecastDetail({
  data,
  title,
  subtitle,
  info,
  width,
}) {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsloading(false)
    };
  }, []);

  if (isLoading) return <ForecastDetail_Skeleton />;
  return (
    <>
      <div
        class={`w-full max-w-full px-3 mt-6 md:flex-0 shrink-0 md:mt-0 md:w-${width}`}
      >
        <div class="border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div class="flex-auto p-6 text-center">
            <h1 class="relative z-10 dark:text-white">
              {data.current[info] ? data.current[info] : info}
            </h1>
            <h6 class="mb-0 font-bold dark:text-white">{title}</h6>
            <p class="mb-0 text-sm leading-normal opacity-80 ">{subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
}
