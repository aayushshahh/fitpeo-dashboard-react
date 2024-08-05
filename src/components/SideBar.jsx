import React from "react";
import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import {
  HomeIcon,
  ChartBarSquareIcon,
  ClipboardDocumentCheckIcon,
  WalletIcon,
  ShoppingBagIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import {
  EnvelopeIcon,
  Cog6ToothIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import IconCircle from "./IconCircle";
import headshotProfile from "../headshot-profile.jpg";

const Paths = {
  home: "/",
  analytics: "/analytics",
  performance: "/performance",
  wallet: "/wallet",
  shop: "/shop",
};

const SideBar = () => {
  const Location = useLocation();
  const baseClassSidebarItemStyle = "w-full flex justify-center";
  const activeSidebarItemStyle = "border-l-4 border-primaryBlue";
  const { pathname } = Location;
  return (
    <div className="bg-backgroundLight relative">
      <div className="xl:px-8 xl:py-4 md:px-6 md:py-6 px-4 py-6">
        <BuildingStorefrontIcon className="xl:size-10 md:size-8 size-6 text-primaryBlue" />
      </div>
      <div className="flex flex-col items-center gap-10 py-10">
        <div
          className={`${
            Paths.home === pathname && activeSidebarItemStyle
          } ${baseClassSidebarItemStyle}`}
        >
          <a href={Paths.home}>
            <HomeIcon
              className={`${
                Paths.home === pathname
                  ? "text-primaryBlue"
                  : "text-lightestGrey"
              } md:size-8 size-6`}
            />
          </a>
        </div>
        <div
          className={`${
            Paths.analytics === pathname && activeSidebarItemStyle
          } ${baseClassSidebarItemStyle}`}
        >
          <a href={Paths.analytics}>
            <ChartBarSquareIcon
              className={`${
                Paths.analytics === pathname
                  ? "text-primaryBlue"
                  : "text-lightestGrey"
              } md:size-8 size-6`}
            />
          </a>
        </div>
        <div
          className={`${
            Paths.performance === pathname && activeSidebarItemStyle
          } ${baseClassSidebarItemStyle}`}
        >
          <a href={Paths.performance}>
            <ClipboardDocumentCheckIcon
              className={`${
                Paths.performance === pathname
                  ? "text-primaryBlue"
                  : "text-lightestGrey"
              } md:size-8 size-6`}
            />
          </a>
        </div>
        <div
          className={`${
            Paths.wallet === pathname && activeSidebarItemStyle
          } ${baseClassSidebarItemStyle}`}
        >
          <a href={Paths.wallet}>
            <WalletIcon
              className={`${
                Paths.wallet === pathname
                  ? "text-primaryBlue"
                  : "text-lightestGrey"
              } md:size-8 size-6`}
            />
          </a>
        </div>
        <div
          className={`${
            Paths.shop === pathname && activeSidebarItemStyle
          } ${baseClassSidebarItemStyle}`}
        >
          <a href={Paths.shop}>
            <ShoppingBagIcon
              className={`${
                Paths.shop === pathname
                  ? "text-primaryBlue"
                  : "text-lightestGrey"
              } md:size-8 size-6`}
            />
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center absolute z-40 bottom-10 gap-10">
        <IconCircle
          componentToRender={
            <EnvelopeIcon className="size-6 text-lightestGrey" />
          }
          className="md:hidden"
        />
        <IconCircle
          componentToRender={
            <Cog6ToothIcon className="size-6 text-lightestGrey" />
          }
          className="md:hidden"
        />
        <IconCircle
          componentToRender={<BellIcon className="size-6 text-lightestGrey" />}
          className="md:hidden"
        />
        <IconCircle
          componentToRender={
            <img src={headshotProfile} alt="profile" className="rounded-full" />
          }
          className="md:hidden"
        />
        <ArrowRightStartOnRectangleIcon className="md:size-8 size-6 text-lightestGrey" />
      </div>
    </div>
  );
};

export default SideBar;
