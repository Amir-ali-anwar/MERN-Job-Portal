import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading, StatsContainer, ChartContainer } from "../../components";
import { showstats } from "../../features/Stats/StatsSlice";
const Stats = () => {
  const dispatch = useDispatch();
  const { isLoading, stats, monthlyApplications } = useSelector(
    (store) => store.Stats
  );
  console.log(isLoading)
  React.useEffect(() => {
    showstats();
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartContainer />}
    </>
  );
};

export default Stats;
