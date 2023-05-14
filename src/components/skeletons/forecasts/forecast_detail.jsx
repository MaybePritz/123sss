export default function ForecastDetail_Skeleton({ width }) {
  return (
    <div class={`w-full max-w-full px-3 md:flex-0 shrink-0 md:w-${width}`}>
      <div class="border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xlrelative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white dark:bg-gray-900 bg-clip-border">
        <div class="flex-auto p-6 text-center select-none animate-pulse">
          <h1 class="relative z-10 text-transparent bg-gray-300 rounded-lg">
            21
          </h1>
          <h6 class="mb-0 font-bold text-transparent bg-gray-300 rounded-lg">
            temp
          </h6>
          <p class="mb-0 text-sm leading-normal opacity-80 text-transparent ">
            Temperature
          </p>
        </div>
      </div>
    </div>
  );
}
