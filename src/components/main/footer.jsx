export default function Footer() {
  return (
    <footer class="pt-6 pb-4">
          <div class="w-full px-6 mx-auto">
            <div class="flex flex-wrap items-center -mx-3 lg:justify-between">
              <div class="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                <div class="leading-normal text-center text-sm text-slate-500 lg:text-left">
                  {new Date().getFullYear()},
                  <a href="https://vk.ru/maybepritz" class="font-semibold text-slate-700" target="_blank"> MBPritz </a>
                </div>
              </div>
              <div class="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
                <ul class="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                  <li class="nav-item flex">
                    <a href="https://www.weatherapi.com/" class="block px-4 pt-0 pb-1 font-semibold transition-colors ease-soft-in-out text-sm text-slate-500" target="_blank">WeatherAPI</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
  );
}
