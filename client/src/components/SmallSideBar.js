import { FaTimes } from "react-icons/fa";
import React from "react";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { Button } from "../components/";
import { sidebarToggleHandler } from "../features/user/userSlice";
import NavLinks from "./NavLinks";
const SmallSideBar = () => {
  const dispatch = useDispatch();
  const { sidebarToggle } = useSelector((store) => store.user);
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
          <header>
            <Logo />
          </header>
          <NavLinks toggleSideBar={sidebarToggleHandler} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSideBar;
