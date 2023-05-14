export default function TempWeek() {
  return (
    <div className="w-full max-w-full px-3 mt-6 flex-0 lg:w-8/12">
      <div className=" flex flex-col min-w-0 overflow-hidden break-words h-full  bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="p-4 pb-0 border-black/12.5 rounded-t-2xl border-b-0 border-solid">
          <h5 className="font-bold dark:text-white text-transparent bg-gray-300 rounded-lg mb-1">
            Температура
          </h5>
          <p className="mb-0  font-semibold leading-normal capitalize text-sm text-transparent bg-gray-300 rounded-lg">
            Ср. температура Temp
          </p>
        </div>
        <div className="flex-auto p-0 w-full text-transparent bg-gray-300 rounded-lg m-3">
          Chart
        </div>
      </div>
    </div>
  );
}
