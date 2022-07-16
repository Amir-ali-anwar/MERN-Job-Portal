import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { Logo, Button, FormRow, Alert } from "../../components";
const Profile = () => {
  const { isLoading, showAlert, user } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <form className="form">
        <h3>Profile</h3>
        {showAlert && <Alert />}
      </form>
    </Wrapper>
  );
};

export default Profile;
