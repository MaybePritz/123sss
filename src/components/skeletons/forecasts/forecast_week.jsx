export default function WeekForecast() {
  return (
    <div class="w-full max-w-full px-3 mt-6 md:w-4/12 md:flex-none select-none">
      <div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
        <div class="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
          <div class="flex flex-wrap -mx-3">
            <div class="max-w-full px-3 md:w-1/2 md:flex-none ">
              <h6 class="mb-0 dark:text-white text-transparent bg-gray-300 rounded-lg">
                Погода на 3 дня
              </h6>
            </div>
            <div class="flex items-center justify-end max-w-full px-3 md:w-1/2 md:flex-none text-transparent bg-gray-300 rounded-lg">
              <i class="mr-2 ph ph-calendar-blank" aria-hidden="true"></i>
              <small>0-0-0000</small>
            </div>
          </div>
        </div>
        <div class="flex-auto p-4 pt-6">
          <ul class="flex flex-col pl-0 mb-0 rounded-lg">
            <li class="flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
              <div class="flex items-center">
                <button class="leading-pro ease-soft-in bg-150 w-6 h-6 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-default items-center justify-center text-center align-middle font-bold uppercase transition-all hover:opacity-75 text-transparent bg-gray-300 ">
                  1
                </button>
                <div class="flex flex-col">
                  <h6 class="mb-1 leading-normal text-sm text-slate-700 dark:text-white capitalize text-transparent bg-gray-300 rounded-lg">
                    День недели
                  </h6>
                  <span class="leading-tight text-xs text-transparent bg-gray-300 rounded-lg">
                    0 январь 2000
                  </span>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center ">
                <p class="font-semibold leading-normal text-sm text-transparent bg-gray-300 rounded-lg mb-1">
                  15&#176;
                </p>
                <p class="m-0 font-semibold leading-normal text-xs  text-transparent bg-gray-300 rounded-lg">
                  чистата
                </p>
              </div>
            </li>
            <li class="flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
              <div class="flex items-center">
                <button class="leading-pro ease-soft-in bg-150 w-6 h-6 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-default items-center justify-center text-center align-middle font-bold uppercase transition-all hover:opacity-75 text-transparent bg-gray-300 ">
                  1
                </button>
                <div class="flex flex-col">
                  <h6 class="mb-1 leading-normal text-sm text-slate-700 dark:text-white capitalize text-transparent bg-gray-300 rounded-lg">
                    День недели
                  </h6>
                  <span class="leading-tight text-xs text-transparent bg-gray-300 rounded-lg">
                    0 январь 2000
                  </span>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center ">
                <p class="font-semibold leading-normal text-sm text-transparent bg-gray-300 rounded-lg mb-1">
                  15&#176;
                </p>
                <p class="m-0 font-semibold leading-normal text-xs  text-transparent bg-gray-300 rounded-lg">
                  чистата
                </p>
              </div>
            </li>
            <li class="flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
              <div class="flex items-center">
                <button class="leading-pro ease-soft-in bg-150 w-6 h-6 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-default items-center justify-center text-center align-middle font-bold uppercase transition-all hover:opacity-75 text-transparent bg-gray-300 ">
                  1
                </button>
                <div class="flex flex-col">
                  <h6 class="mb-1 leading-normal text-sm text-slate-700 dark:text-white capitalize text-transparent bg-gray-300 rounded-lg">
                    День недели
                  </h6>
                  <span class="leading-tight text-xs text-transparent bg-gray-300 rounded-lg">
                    0 январь 2000
                  </span>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center ">
                <p class="font-semibold leading-normal text-sm text-transparent bg-gray-300 rounded-lg mb-1">
                  15&#176;
                </p>
                <p class="m-0 font-semibold leading-normal text-xs  text-transparent bg-gray-300 rounded-lg">
                  чистата
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
