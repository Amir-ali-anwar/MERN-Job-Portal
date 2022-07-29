import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import moment from "moment";
import {
  BadRequestError,
  UnAuthenticatedError,
  NotFoundError,
} from "../errors/index.js";
import Job from "../model/Job.js";
import checkPermissions from "../utils/checkPermissions.js";
const createJob = async (req, res) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide the position and company");
  }
  req.body.createdBy = req.user.UserID;
  const job = await Job.create(req.body);
  res.status(StatusCodes.OK).json({ job });
};
const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;
  const job = await Job.findOne({ _id: jobId });
  if (!Job) {
    throw new NotFoundError("Job not found");
  }
  await job.remove();
  res.status(StatusCodes.OK).json({ msg: "job delete successfully" });
};
const getAllJobs = async (req, res) => {
  const { status, jobType, sort, search } = req.query;

  const queryObject = {
    createdBy: req.user.UserID,
  };
  // add stuff based on condition

  if (status && status !== "all") {
    queryObject.status = status;
  }
  if (jobType && jobType !== "all") {
    queryObject.jobType = jobType;
  }
  if (search) {
    queryObject.position = { $regex: search, $options: "i" };
  }
  // NO AWAIT

  let result = Job.find(queryObject);

  // chain sort conditions

  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("position");
  }
  if (sort === "z-a") {
    result = result.sort("-position");
  }

  //

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const jobs = await result;

  const totalJobs = await Job.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);

  res.status(StatusCodes.OK).json({ jobs, totalJobs, numOfPages });
};
// const getAllJobs = async (req, res) => {
//   const { status, jobType, sort, search } = req.query;
//   const queryObject = {
//     createdBy: req.user.UserID,
//   };
//   if (status !== "all") {
//     queryObject.status = status;
//   }
//   if (jobType !== "all") {
//     queryObject.jobType = jobType;
//   }
//   // chain sort conditions
//   let result = Job.find(queryObject)

//   if (sort === "latest") {
//     result = result.sort("-createdAt");
//   }
//   if (sort === "oldest") {
//     result = result.sort("createdAt");
//   }
//   if (sort === "a-z") {
//     result = result.sort("position");
//   }
//   if (sort === "z-a") {
//     result = result.sort("-position");
//   }
//    if (search) {
//      queryObject.position = { $regex: search, $options: "i" };
//    }
//   // pagination
//   const page = Number(req.query.page) || 1;
//   const limit = Number(req.query.limit) || 10;
//   const skip = (page - 1) * limit;

//   result = result.skip(skip).limit(limit);

//   const jobs = await result;
//   console.log(jobs);
//   const totalJobs = await Job.countDocuments(queryObject);
//   const numOfPages = Math.ceil(totalJobs / limit);
//   res.status(StatusCodes.OK).json({ jobs, totalJobs, numOfPages });
// };
const updateJob = async (req, res) => {
  const { id: jobId } = req.params;
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide the position and company");
  }
  const existingJob = await Job.findOne({ _id: jobId });

  checkPermissions(req.user, existingJob.createdBy);
  if (!existingJob) {
    throw new NotFoundError("Job not found");
  }

  existingJob.position = position;
  existingJob.company = company;
  await existingJob.save();
  res.status(StatusCodes.OK).json({ existingJob });
};
const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.UserID) } },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);
 stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});
  const defaultStatus = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };
  
  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.UserID) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
  ]);
    monthlyApplications = monthlyApplications
      .map((item) => {
        const {
          _id: { year, month },
          count,
        } = item;
        const date = moment()
          .month(month - 1)
          .year(year)
          .format("MMM Y");
        return { date, count };
      })
      .reverse();
      console.log(monthlyApplications)
  res.status(StatusCodes.OK).json({ defaultStatus, monthlyApplications });
};
export { createJob, deleteJob, getAllJobs, updateJob, showStats };
