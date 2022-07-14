import React from "react";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Navbar";
import { Button, Logo } from "../components/";
const Navbar = () => {
  const [toggleSideBar, SettoggleSideBar] = React.useState(false);
  const [toggleLogOut, SettoggleLogOut] = React.useState(false);
  const logoutHandler = () => {
    SettoggleLogOut(!toggleLogOut);
  };
  const sideBarToggleHandler = () => {
    SettoggleSideBar(!toggleSideBar);
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <Button
          type="button"
          className="toggle-btn"
          handleChange={sideBarToggleHandler}
        >
          <FaAlignLeft />
        </Button>
      </div>
      <div>
        <Logo />
        <h3 className="logo-text">Dashboard</h3>
      </div>
      <div className="btn-container">
        <Button type="button" className="btn" handleChange={logoutHandler}>
          <FaUserCircle /> Amir <FaCaretDown />
        </Button>
        <div className={`dropdown ${toggleLogOut ? "show-dropdown" : ""}`}>
          <Button
            type="button"
            className="dropdown-btn"
            handleChange={logoutHandler}
          >
            logout
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
