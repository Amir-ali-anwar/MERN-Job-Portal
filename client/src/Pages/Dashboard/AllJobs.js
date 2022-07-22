import React from "react";
import { JobsContainer, SearchContainer, Loading } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { GetAllJob } from "../../features/Job/JobSlice";
import Wrapper from '../../assets/wrappers/JobsContainer'
const AllJobs = () => {
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
  } = useSelector((store) => store.Job);
  console.log(jobs);
  React.useEffect(()=>{
    GetAllJob()
  },[])
  if (isLoading) {
    return <Loading center />
  }
  if (jobs.length ===0){
    return (
      <Wrapper>
        <h2>No Jobs to display</h2>
      </Wrapper>
    )
  }
    return (
      <>
        <SearchContainer />
        <JobsContainer />
      </>
    );
};

export default AllJobs;
