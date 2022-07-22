import React from "react";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "./NavLinks";
const BigSideBar = () => {
  const { sidebarToggle } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div
        className={
          sidebarToggle
            ? "sidebar-container "
            : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header><Logo /></header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSideBar;
