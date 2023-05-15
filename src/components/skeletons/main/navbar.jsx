import Search from "../../ui/search";
import classNames from "classnames";

export default function Navbar_Skeleton() {
  return (
    <nav class="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start">
      <div class="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <nav>
          <ol class="flex flex-wrap items-center pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
            <li class="leading-normal text-sm">
              <a
                class=" text-slate-700 dark:text-white pointer-evets-none text-transparent bg-gray-300 rounded-lg"
                href="#"
              >
                Russia
              </a>
            </li>
            <li className="px-2">/</li>
            <li class="text-sm capitalize leading-normal text-slate-700 dark:text-white text-transparent bg-gray-300 rounded-lg">
              samara
            </li>
          </ol>
          <h6 class="mb-0 font-bold dark:text-white text-transparent bg-gray-300 rounded-lg">
            2
          </h6>
        </nav>

        <div class="flex items-center grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
          <Search
            placeholder={"Найти город..."}
            classes={classNames(
              "md:mx-auto md:pr-4 w-full md:w-1/3"
            )}
          />
          <ul class="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
            <li class="flex items-center">
              <a
                href="#"
                class="opacity-50 pointer-events-none flex items-center px-0 py-2 font-semibold transition-all ease-nav-brand text-md text-slate-500"
              >
                <i class="ph-fill ph-user mr-1"></i>
                <span class=" sm:inline">Вход</span>
              </a>
            </li>
            <li class="flex items-center px-4 opacity-50 pointer-events-none">
              <button
                class="p-0 transition-all text-md ease-nav-brand text-slate-500"
              >
                <i class="ph-fill ph-gear-six"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
