import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside class="max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-4 xl:translate-x-0 xl:bg-white">
      <div class="h-19.5">
        <i
          class="absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden"
          sidenav-close
        ></i>
        <a
          class="block px-8 py-6 m-0 text-lg whitespace-nowrap text-slate-700 text-center"
          href="javascript:;"
          target="_blank"
        >
          {/* <img src="/logo.png" class="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8" alt="main_logo" /> */}
          <span class="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
            Супер-Пупер Погода
          </span>
        </a>
      </div>

      <hr class="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />

      <div class="items-center block w-auto max-h-screen overflow-auto grow basis-full">
        <ul class="flex flex-col pl-0 mb-0">
          <li class="mt-0.5 w-full">
            <a
              class="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors"
              href="./pages/dashboard.html"
            >
              <div class="bg-gradient-to-tl from-[#1D976C] to-[#93F9B9] shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12px"
                  height="12px"
                  fill="#fff"
                  viewBox="0 0 256 256"
                  className="scale-150"
                >
                  <path d="M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"></path>
                </svg>
              </div>
              <span class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                Погода
              </span>
            </a>
          </li>

          {/* <li class="w-full mt-4">
            <h6 class="pl-6 ml-2 font-bold leading-tight uppercase text-xs opacity-60">
              Account pages
            </h6>
          </li> */}
        </ul>
      </div>
    </aside>
  );
}
