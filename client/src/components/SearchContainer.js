import React from 'react'
import _debounce from "lodash/debounce";
import { useDispatch, useSelector } from "react-redux";
import { FormRow, FormRowSelect,Button } from ".";
import Wrapper from "../assets/wrappers/SearchContainer";
import { clearFilters, handleChange } from "../features/Stats/StatsSlice";
const SearchContainer = () => {
  const {
    search,
    searchStatus,
    sort,
    sortOptions,
    isLoading,
    searchType,
  } = useSelector((store) => store.Stats);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.Job);
    const dispatch = useDispatch();
  const handleSearch=(e)=>{
    if(isLoading) return 
    console.log(e.target.value)
    dispatch(handleChange({name:e.target.name,value:e.target.value}));
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(clearFilters());
  }
  return (
    <Wrapper>
      <h4>search form</h4>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            className="form-input"
            labelText="search"
            value={search}
            handleChange={handleSearch}
          />
          {/* search by status */}
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />

          {/* search by type*/}
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />
          {/* sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            labelText="sort"
            handleChange={handleSearch}
            list={sortOptions}
          />
          <Button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            handleChange={handleSubmit}
          >
            clear filters
          </Button>
        </div>
      </form>
    </Wrapper>
  );
}

export default SearchContainer