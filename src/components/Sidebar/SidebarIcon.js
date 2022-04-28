import React from "react";

export default function SidebarIcon(props) {
  const renderIcon = (image) => {
    if (image === null) {
      return (
        <div className={`sidebar-icon ${props.className}`}>{props.icon}</div>
      );
    } else {
      return <img class="sidebar-icon" src={image} alt="Icon" />;
    }
  };
  return <div className="sidebar-wrap">{renderIcon(props.img)}</div>;
}
