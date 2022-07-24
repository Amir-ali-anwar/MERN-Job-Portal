import React from 'react'
import { FormRow, FormRowSelect,Button } from ".";
import Wrapper from "../assets/wrappers/SearchContainer";
import { useSelector, useDispatch } from "react-redux";
const SearchContainer = () => {
  const { search, searchStatus, sort, sortOptions, isLoading } = useSelector(
    (store) => store.Stats
  );
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.Job);
  return (
    <Wrapper>
      <h4>search form</h4>
      <form className="form">
        <div className="form-center">
          <FormRow
            name="search"
            labelText="Search"
            className="form-input"
            labelClass="form-label"
          />
          <FormRow
            name="status"
            labelText="Status"
            className="form-input"
            labelClass="form-label"
          />

          <Button className="btn btn-block btn-danger">clear filters</Button>
        </div>
      </form>
    </Wrapper>
  );
}

export default SearchContainer