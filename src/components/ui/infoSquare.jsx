export default function infoSquare({ title, text, icon, progress }) {
  return (
    <>
      <div className="flex-none w-1/3 max-w-full py-4 pl-0 pr-3 mt-0">
        <div className="flex mb-2">
          <div className="flex items-center justify-center w-6 h-6 mr-2 text-center bg-center rounded  shadow-soft-2xl bg-gradient-to-tl from-[#1D976C] to-[#93F9B9]">
            <i className="ph-fill ph-thermometer-hot text-white"></i>
          </div>
          <p className="mt-1 mb-0 font-semibold leading-tight text-xs">
            {title}
          </p>
        </div>
        <h4 className="font-bold">{text}</h4>
        <div className="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
          <div
            className="duration-600 ease-soft -mt-0.4 -ml-px flex h-1.5 w-5/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all"
            role="progressbar"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </>
  );
}
