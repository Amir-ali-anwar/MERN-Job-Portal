import React from 'react'
import moment from 'moment'
const Job = ({ company, createdAt }) => {
  const date = moment(createdAt).format("MMM Do, YYYY");
  return <div>{(company, date)}</div>;
};

export default Job