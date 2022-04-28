import React from "react";
import { FaDiscord } from "react-icons/fa";
import { IoMdCompass } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";

export default function Sidebar() {
  const python_ico =
    "https://cdn.discordapp.com/icons/267624335836053506/a_721ee08d5cbc3d0a8506c3b61dacacb6.webp";
  const rythem_ico =
    "https://cdn.discordapp.com/icons/231471142685245440/ebb16cb944c07a8b4b4371a6d7607601.webp";
  const nvidia_ico =
    "https://cdn.discordapp.com/icons/185647255028629505/a_f830ba3ba453ab63ad73d04dc0e20f78.webp";
  return (
    <div className="sidebar-container">
      <SidebarMainIcon icon={<FaDiscord size="28" />} />
      <SidebarSep />
      <SidebarIconImg img={python_ico} />
      <SidebarIconImg img={rythem_ico} />
      <SidebarIconImg img={nvidia_ico} />
      <SidebarIcon icon={<IoAddSharp size="25" />} />
      <SidebarIcon icon={<IoMdCompass size="23" />} />
      <SidebarSep />
      <SidebarIcon icon={<DownloadIcon />} />
    </div>
  );
}
const SidebarMainIcon = ({ icon }) => (
  <div className="sidebar-wrap">
    <div class="absolute top-0 left-0 flex items-center w-2 h-12">
      <span class="item-2LIpTv"></span>
    </div>
    <div className="sidebar-main-icon">{icon}</div>
  </div>
);

const SidebarIcon = ({ icon }) => (
  <div className="sidebar-wrap">
    <div className="sidebar-icon">{icon}</div>
  </div>
);

const SidebarIconImg = ({ img }) => (
  <div className="sidebar-wrap">
    <img class="sidebar-img" src={img} alt="Distinct.inc" />
  </div>
);

const SidebarSep = () => (
  <div className="sidebar-wrap">
    <div class="guildSeparator"></div>
  </div>
);

const DownloadIcon = () => (
  <svg
    class="circleIcon-3489FI"
    aria-hidden="false"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z"
    ></path>
  </svg>
);
