import React from 'react'
import moment from 'moment'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { setEditJob, DeleteJob } from "../features/Job/JobSlice";
import Wrapper from "../assets/wrappers/Job";
import Button from './Button';
import JobInfo from './JobInfo';
const Job = ({
  company,
  createdAt,
  position,
  jobLocation,
  jobType,
  status,
  _id
}) => {
  const dispatch = useDispatch();
  const date = moment(createdAt).format("MMM Do, YYYY");

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              className="btn edit-btn"
              to="/add-job"
              onClick={() =>
                dispatch(
                  setEditJob({
                    editJobId: _id,
                    position,
                    company,
                    jobLocation,
                    jobType,
                    status,
                  })
                )
              }
            >
              edit
            </Link>
            <Button
              type="button"
              className="btn delete-btn"
              handleChange={() => dispatch(DeleteJob(_id))}
            >
              Delete
            </Button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job