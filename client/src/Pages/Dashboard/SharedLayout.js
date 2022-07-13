import React from "react";
import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="add-Job">add job</Link>
        <Link to="all-Job">all job</Link>
        <Link to="Stats">Stats</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default SharedLayout;
