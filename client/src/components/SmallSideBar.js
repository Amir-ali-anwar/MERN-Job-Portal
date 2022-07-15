import { FaTimes } from "react-icons/fa";
import React from "react";
import Logo from "./Logo";
// import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { Button } from "../components/";
const SmallSideBar = () => {
  const [toggleSideBar, SettoggleSideBar] = React.useState(false);
  const sideBarToggleHandler = () => {
    SettoggleSideBar(!toggleSideBar);
  };
  return (
    <Wrapper>
      <div
        className={`sidebar-container ${toggleSideBar ? "show-sidebar" : ""}`}
      >
        <div className="content">
          <Button
            type="button"
            className="close-btn"
            handleChange={sideBarToggleHandler}
          >
            <FaTimes />
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSideBar;
