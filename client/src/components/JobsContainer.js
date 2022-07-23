import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GetAllJob } from "../features/Job/JobSlice";
import Loading from "./Loading";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
const JobsContainer = () => {
   const dispatch = useDispatch();
   const {
     isLoading,
     isEditing,
     showAlert,
     displayAlert,
     position,
     company,
     jobLocation,
     jobType,
     jobTypeOptions,
     status,
     statusOptions,
     editJob,
     jobs,
     totalJobs,
   } = useSelector((store) => store.Job);
    React.useEffect(() => {
      dispatch(GetAllJob());
    }, []);
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
          {totalJobs} job{jobs.length > 1 && "s"}
        </h5>
        <div className="jobs">
          {jobs.map((job) => {
            return <Job  key={job._id} {...job}/>
          })}
        </div>
      </Wrapper>
    );
}

export default JobsContainer