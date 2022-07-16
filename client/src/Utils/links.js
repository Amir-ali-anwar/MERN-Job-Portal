import React from "react";
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  { id: 1, text: "stats", path: "/", icon: <IoBarChartSharp /> },
  { id: 2, text: "all jobs", path: "add-Job", icon: <MdQueryStats /> },
  { id: 3, text: "add job", path: "add-Job", icon: <FaWpforms /> },
  { id: 4, text: "profile", path: "Profile", icon: <ImProfile /> },
];

export default links;
