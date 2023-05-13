import classNames from "classnames";

import {
  useAppController,
  setFixedPluginStatus,
  setWeatherAlertStatus,
} from "@/context";

import Checkbox from "../ui/checkbox";

export default function FixedPlugin() {
  const [controller, dispatch] = useAppController();
  const { fixedStatus, weatherAlert } = controller;

  const CloseFixed = () => {
    setFixedPluginStatus(dispatch, false);
  };

  const handleAlert = () => {
    setWeatherAlertStatus(dispatch, !weatherAlert || false);
  };

  return (
    <div
      className={classNames(
        "fixed",
        "top-0",
        "h-screen",
        "z-sticky",
        { "-right-90": !fixedStatus },
        { "right-0": fixedStatus }
      )}
    >
      <button
        onClick={CloseFixed}
        className={classNames(
          "top-7.5",
          "right-7.5",
          "text-xl",
          "z-sticky",
          "absolute",
          "cursor-pointer",
          "m-0",
          "text-slate-700",
          "w-8",
          "h-8"
        )}
      >
        <i class=" pointer-events-none ph-fill ph-x-circle"></i>
      </button>
      <div
        className={classNames(
          "dark:bg-gray-950/80",
          "z-990",
          "shadow-soft-3xl",
          "w-90",
          "ease-soft",
          "top-0",
          "left-auto",
          "flex",
          "h-full",
          "min-w-0",
          "flex-col",
          "break-words",
          "rounded-none",
          "border-0",
          "bg-white/80",
          "bg-clip-border",
          "px-2.5",
          "backdrop-blur-2xl",
          "backdrop-saturate-200",
          "duration-200"
        )}
      >
        <div class="px-6 pt-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
          <div class="float-left">
            <h5 class="mt-4 mb-0">Настройки</h5>
            <p>Настройки цветов и тд.</p>
          </div>
          <div class="float-right mt-6">
            <button class="inline-block p-0 mb-4 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 active:opacity-85 text-slate-700">
              <i class="fa fa-close"></i>
            </button>
          </div>
        </div>
        <hr class="h-px mx-0 my-1 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
        <div class="flex-auto p-6 pt-0 sm:pt-4">
          <Checkbox
            title={"weather_alert"}
            classes={"mb-4"}
            checked={weatherAlert}
            Action={handleAlert}
          />
          <hr class="h-px bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent sm:my-6" />
          {/* <a
            class="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer leading-pro text-xs ease-soft-in hover:shadow-soft-xs hover:scale-102 active:opacity-85 tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800"
            href="https://www.creative-tim.com/product/soft-ui-dashboard-tailwind"
            target="_blank"
          >
            Free Download
          </a> */}
        </div>
      </div>
    </div>
  );
}
