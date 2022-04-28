import React from "react";
import SidebarIcon from "./SidebarIcon";
import { DiscordDownloadIcon } from "./SvgIcons";
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
  const SidebarSep = () => (
    <div className="sidebar-wrap">
      <div class="guildSeparator"></div>
    </div>
  );
  return (
    <div className="sidebar-container">
      <SidebarIcon
        className="bg-neutral-800 text-white hover:bg-primary"
        icon={<FaDiscord size="28" />}
      />
      <SidebarSep />
      <SidebarIcon img={python_ico} />
      <SidebarIcon img={rythem_ico} />
      <SidebarIcon img={nvidia_ico} />
      <SidebarIcon icon={<IoAddSharp size="25" />} />
      <SidebarIcon icon={<IoMdCompass size="23" />} />
      <SidebarSep />
      <SidebarIcon icon={<DiscordDownloadIcon />} />
    </div>
  );
}

SidebarIcon.defaultProps = {
  img: null,
  className:
    "bg-neutral-800 text-secondary hover:bg-secondary hover:text-white",
};
