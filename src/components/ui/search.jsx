import classNames from "classnames";



export default function Search({ placeholder, classes}) {
  return (
    <>
      <form
        id="search"
        className={classNames(classes) + " " + "flex items-center"}
      >
        <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
          <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
            <i className="ph ph-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="pl-9 text-sm focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg dark:border-0 border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-primary focus:outline-none focus:transition-shadow"
            placeholder={placeholder}
          />
        </div>
      </form>
    </>
  );
}