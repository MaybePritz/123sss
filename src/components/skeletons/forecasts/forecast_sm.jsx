export default function SMForecast() {
    return (
      <>
        <div className="w-full max-w-full px-3 shrink-0 sm:flex-0 sm:w-4/12 mt-6">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="relative flex-auto p-4">
              <div className="flex flex-wrap -mx-3 ">
                <div className="w-7/12 max-w-full px-3 text-left flex-0 ">
                  <span className="mb-1 font-semibold leading-normal capitalize text-sm text-transparent rounded select-none bg-gray-300">
                    No data
                  </span>
                  <h5 className="mb-0 font-bold dark:text-white text-transparent rounded select-none bg-gray-300">
                    No data
                  </h5>
                  <span className="mt-auto mb-0 font-bold leading-normal text-right text-sm"></span>
                </div>
                <div className="w-5/12 max-w-full px-3 flex-0">
                  <div className="relative text-right">
                    <span className="leading-tight text-xs text-slate-400 text-transparent rounded select-none bg-gray-300">
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
}
