export default function Breadcrumbs({info}) {
  return (
      <nav>
        <ol class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
          <li class="leading-normal text-sm">
            <a class="opacity-50 text-slate-700 dark:text-white pointer-evets-none" href="#">
              {info.country}
            </a>
          </li>
          <li
            class="text-sm pl-2 capitalize leading-normal text-slate-700 dark:text-white before:float-left before:pr-2 before:text-gray-600 before:content-['/']"
          >
            {info.city}
          </li>
        </ol>
        <h6 class="mb-0 font-bold dark:text-white">{info.adress}</h6>
      </nav>
  );
}
