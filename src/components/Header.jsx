import React from "react";
import {
  EnvelopeIcon,
  Cog6ToothIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";
import IconCircle from "./IconCircle";
import headshotProfile from "../headshot-profile.jpg";

const Header = () => {
  return (
    <div className="bg-backgroundLight p-6 flex items-center justify-between">
      <SearchBar />
      <div className="icons-list md:flex items-center gap-4 hidden">
        <IconCircle
          componentToRender={
            <EnvelopeIcon className="size-6 text-lightestGrey" />
          }
        />
        <IconCircle
          componentToRender={
            <Cog6ToothIcon className="size-6 text-lightestGrey" />
          }
        />
        <IconCircle
          componentToRender={<BellIcon className="size-6 text-lightestGrey" />}
        />
        <IconCircle
          componentToRender={
            <img src={headshotProfile} alt="profile" className="rounded-full" />
          }
        />
      </div>
    </div>
  );
};

export default Header;
