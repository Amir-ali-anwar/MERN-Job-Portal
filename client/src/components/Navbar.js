import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Navbar";
import { Button, Logo } from "../components/";
import { logout } from "../features/user/userSlice";
import { sidebarToggleHandler } from "../features/user/userSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [toggleLogOut, SettoggleLogOut] = React.useState(false);
  const logoutHandler = () => {
    SettoggleLogOut(!toggleLogOut);
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <Button
          type="button"
          className="toggle-btn"
          handleChange={() => dispatch(sidebarToggleHandler())}
        >
          <FaAlignLeft />
        </Button>
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <Button type="button" className="btn" handleChange={logoutHandler}>
            <FaUserCircle /> {(user && user.name) || "default user"}{" "}
            <FaCaretDown />
          </Button>
          <div className={`dropdown ${toggleLogOut ? "show-dropdown" : ""}`}>
            <Button
              type="button"
              className="dropdown-btn"
              handleChange={() => dispatch(logout())}
            >
              logout
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
