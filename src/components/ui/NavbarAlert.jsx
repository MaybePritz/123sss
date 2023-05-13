import classNames from "classnames";
import { useCallback } from "react";
import { useAppController } from "@/context";

export default function NavbarAlert({ children }) {
  const [controller] = useAppController();
  const { weatherAlert } = controller;

  const handleAlert = useCallback(() => {
    const alertBody = document.querySelector("#alert");
    const Search = document.querySelector("#search");
    const closeStyles = ["hidden"];
    const SearchStyles = ["md:w-1/2"];
    const RemoveSearchStyles = ["md:w-1/3"];
    if (alertBody) {
      closeStyles.forEach((style) => {
        alertBody.classList.add(style);
        alertBody.classList.remove("md:block");
      });
      SearchStyles.forEach((style) => {
        Search.classList.add(style);
      });
      RemoveSearchStyles.forEach((style) => {
        Search.classList.remove(style);
      });
    } else {
      console.error(alertBody);
    }
  });

  return (
    <>
      <div
        id="alert"
        className={classNames("relative hidden text-white p-2 pr-7 rounded-lg bg-gradient-to-tl from-[#1D976C] to-[#93F9B9] mx-2", {'md:block' : !weatherAlert})}
      >
        {children}
        <button
          type="button"
          onClick={handleAlert}
          class="box-content absolute top-0 right-0 p-2 text-sm text-white bg-transparent border-0 rounded w-4 h-4 z-2"
        >
          <span class="text-center cursor-pointer">
            &#10005;
          </span>
        </button>
      </div>
    </>
  );
}
