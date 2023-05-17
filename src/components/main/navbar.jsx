import { useAppController, setFixedPluginStatus } from "@/context";

import Navbar_Skeleton from "../skeletons/main/navbar";

import Search from "../ui/search";
import Breadcrumbs from "../ui/breadcrumbs";
import classNames from "classnames";
import { useEffect, useState } from "react";

export default function Navbar({ data }) {
  const [isLoading, setIsloading] = useState(true);
  const [controller, dispatch] = useAppController();
  const { fixedStatus, weatherAlert, sidebarStatus } = controller;

  const halderFixed = () => {
    setFixedPluginStatus(dispatch, !fixedStatus || false);
  };


  useEffect(() => {
    if(data) {
      setIsloading(false)
    };
  }, []);

  if(isLoading) return <Navbar_Skeleton />;

   return (
    <nav class="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start">
      <div class="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <Breadcrumbs
          info={{
            country: data.location.country,
            city: data.location.name,
            adress: data.location.region,
          }}
        />

        <div class="flex items-center grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">

          <Search
            placeholder={"Найти город..."}
            classes={classNames(
              "md:mx-auto md:pr-4 w-full",
              { "md:w-1/3": !weatherAlert },
              { "md:w-1/2": weatherAlert }
            )}
          />
        </div>
      </div>
    </nav>
  );
}
