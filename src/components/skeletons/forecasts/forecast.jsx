export default function Forecast_Skeleton() {
    return (
      <div className="lg:w-4/12 px-3 mt-6 lg:mb-0 lg:flex-none select-none animate-pulse">
        <div className="relative h-full flex flex-col min-w-0 break-words bg-white dark:bg-gray-950 rounded-3xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap -mx-3">
              <div className="max-w-full px-3 w-full lg:flex-none">
                <div className="flex flex-col h-full">
                  <p className="py-1 mb-4 font-semibold text-transparent bg-gray-300 rounded-lg">
                    Погода на 00:00
                  </p>
                  <h5 className="font-bold text-7xl my-4 text-transparent bg-gray-300 rounded-lg">
                    00&#176;
                  </h5>
                  <div className="mb-0  flex items-center group text-transparent bg-gray-300 rounded-lg">
                    <p className="text-lg font-medium m-0">Погода</p>
                  </div>
                  <div class="w-full mx-auto mt-auto rounded-xl ">
                    <div class="flex  mt-1 gap-1">
                      <div class="flex-none w-1/3 max-w-full py-4 pl-0 pr-3 mt-0 text-transparent bg-gray-300 rounded-lg ">
                        <div class="flex mb-2">
                          <div class="flex items-center justify-center w-6 h-6 mr-2 text-center bg-center rounded">
                            <i class="ph-fill ph-thermometer-hot text-transparent"></i>
                          </div>
                          <p class="mt-1 mb-0 font-semibold leading-tight text-xs">
                            Макс. Темп
                          </p>
                        </div>
                        <h4 class="font-bold text-transparent">11</h4>
                        <div class="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg ">
                          <div
                            class="duration-600 ease-soft -mt-0.4 -ml-px flex h-1.5 w-9/10 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg text-center text-white transition-all"
                            role="progressbar"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div class="flex-none w-1/3 max-w-full py-4 pl-0 pr-3 mt-0 text-transparent bg-gray-300 rounded-lg ">
                        <div class="flex mb-2 ">
                          <div class="flex items-center justify-center w-6 h-6 mr-2 text-center bg-center rounded">
                            <i class="ph-fill ph-thermometer-hot text-transparent"></i>
                          </div>
                          <p class="mt-1 mb-0 font-semibold leading-tight text-xs">
                            Макс. Темп
                          </p>
                        </div>
                        <h4 class="font-bold text-transparent">11</h4>
                        <div class="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg ">
                          <div
                            class="duration-600 ease-soft -mt-0.4 -ml-px flex h-1.5 w-9/10 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg text-center text-white transition-all"
                            role="progressbar"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div class="flex-none w-1/3 max-w-full py-4 pl-0 pr-3 mt-0 text-transparent bg-gray-300 rounded-lg">
                        <div class="flex mb-2 ">
                          <div class="flex items-center justify-center w-6 h-6 mr-2 text-center bg-center rounded">
                            <i class="ph-fill ph-thermometer-hot text-transparent"></i>
                          </div>
                          <p class="mt-1 mb-0 font-semibold leading-tight text-xs">
                            Макс. Темп
                          </p>
                        </div>
                        <h4 class="font-bold text-transparent">11</h4>
                        <div class="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg ">
                          <div
                            class="duration-600 ease-soft -mt-0.4 -ml-px flex h-1.5 w-9/10 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg text-center text-white transition-all"
                            role="progressbar"
                            aria-valuenow="60"
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
    );
}
