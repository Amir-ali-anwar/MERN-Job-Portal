import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Links from "../Utils/links";
const NavLinks = ({ toggleSideBar = () => {} }) => {
  const dispatch = useDispatch();
  return (
    <div className="nav-links">
      {Links.map((Links) => {
        const { text, path, id, icon } = Links;
        return (
          <NavLink
            to={path}
            key={id}
            onClick={() => dispatch(toggleSideBar)}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
