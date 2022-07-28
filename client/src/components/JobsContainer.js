import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GetAllJob } from "../features/Job/JobSlice";
import Loading from "./Loading";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import PageBtnContainer from './PageBtnContainer';
const JobsContainer = () => {
   const dispatch = useDispatch();
   const {
     isLoading,
     jobs,
     numOfPages,
   } = useSelector((store) => store.Job);
   const { search, searchType, sort, searchStatus } = useSelector(
     (store) => store.Stats
   );
   React.useEffect(() => {
     dispatch(GetAllJob());
   }, [search, searchType, sort, searchStatus]);
    if (isLoading) {
      return <Loading center />;
    }
    if (jobs.length === 0) {
      return (
        <Wrapper>
          <h2>No Jobs to display</h2>
        </Wrapper>
      );
    }
    return (
      <Wrapper>
        <h5>
          {jobs.length} job{jobs.length > 1 && "s"} Found
        </h5>
        <div className="jobs">
          {jobs.map((job) => {
            return <Job key={job._id} {...job} />;
          })}
        </div>
        {numOfPages>1 && <PageBtnContainer/>}
      </Wrapper>
    );
}

export default JobsContainer