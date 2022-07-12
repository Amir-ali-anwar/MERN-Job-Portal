import { StatusCodes } from "http-status-codes";
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
  const jobs = await Job.find({ createdBy: req.user.UserID });
  res.status(StatusCodes.OK).json({ jobs, nbhits: jobs.length, numofPages: 1 });
};
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
const showStats = (req, res) => {
  res.send("showStats");
};
export { createJob, deleteJob, getAllJobs, updateJob, showStats };
