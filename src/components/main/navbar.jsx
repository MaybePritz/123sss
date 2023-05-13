import { useState, useEffect } from "react";
import { useAppController, setFixedPluginStatus } from "@/context";

import Search from "../ui/search";
import NavbarAlert from "../ui/NavbarAlert";
import Breadcrumbs from "../ui/breadcrumbs";
import classNames from "classnames";

export default function Navbar({ place }) {
  const [controller, dispatch] = useAppController();
  const { fixedStatus, weatherAlert, sidebarStatus } = controller;
  
  const [weather, setWeather] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("../api/weather/", {method: 'POST', body: JSON.stringify({place: place})})
      .then((res) => res.json())
      .then((weather) => {
        setWeather(weather);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    );
    
  if (!weather) return <p>No weather data</p>;

  const halderFixed = () => {
    setFixedPluginStatus(dispatch, !fixedStatus || false);
  };

  return (
    <nav
      class="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
    >
      <div class="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <Breadcrumbs
          info={{ country: weather.location.country, city: weather.location.name , adress: weather.location.region }}
        />

        <div class="flex items-center grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
          <NavbarAlert>
            Завтра +23&#176;, на 3&#176; теплее, чем сегодня. Слабый ветер 3-5
            м/с
          </NavbarAlert>
          <Search
            placeholder={"Найти город..."}
            classes={classNames("md:mx-auto md:pr-4 w-full", {"md:w-1/3": !weatherAlert}, {"md:w-1/2": weatherAlert})}
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
            <li
              class={`flex items-center pl-4 ${
                sidebarStatus ? "xl:hidden" : "hidden"
              }`}
            >
              <a
                href="javascript:;"
                class="block p-0 transition-all ease-nav-brand text-sm text-slate-500"
              >
                <div class="w-4.5 overflow-hidden">
                  <i class="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                  <i class="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                  <i class="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                </div>
              </a>
            </li>
            <li class="flex items-center px-4">
              <button
                onClick={halderFixed}
                class="p-0 transition-all text-md ease-nav-brand text-slate-500"
              >
                <i class="ph-fill ph-gear-six"></i>
              </button>
            </li>

            {/* <li class="relative flex items-center pr-2 z-40">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="">
                    <a
                      href="javascript:;"
                      class="block p-0 transition-all text-md ease-nav-brand text-slate-500"
                      dropdown-trigger
                      aria-expanded="false"
                    >
                      <i class="cursor-pointer ph-fill ph-bell"></i>
                    </a>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2  origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className="relative ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700"
                            href="javascript:;"
                          >
                            <div className="flex py-1">
                              <div className="inline-flex items-center justify-center my-auto mr-4 text-white transition-all duration-200 ease-nav-brand text-sm bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl">
                                <i class="ph-fill ph-test-tube"></i>
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="mb-1 font-normal leading-normal text-sm">
                                  Тест
                                </h6>
                                <p className="mb-0 leading-tight text-xs text-slate-400">
                                  <i className="mr-1 ph-fill ph-clock"></i>2 дня
                                  назад
                                </p>
                              </div>
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
