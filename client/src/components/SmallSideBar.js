import { FaTimes } from "react-icons/fa";
import React from "react";
import Logo from "./Logo";
// import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { Button } from "../components/";
import { sidebarToggleHandler } from "../features/user/userSlice";
const SmallSideBar = () => {
  const dispatch = useDispatch();
  const { sidebarToggle } = useSelector((store) => store.user);
  const [toggleSideBar, SettoggleSideBar] = React.useState(false);
  // const sideBarToggleHandler = () => {
  //   SettoggleSideBar(!toggleSideBar);
  // };
  return (
    <Wrapper>
      <div
        className={`sidebar-container ${sidebarToggle ? "show-sidebar" : ""}`}
      >
        <div className="content">
          <Button
            type="button"
            className="close-btn"
            handleChange={() => dispatch(sidebarToggleHandler())}
          >
            <FaTimes />
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSideBar;
