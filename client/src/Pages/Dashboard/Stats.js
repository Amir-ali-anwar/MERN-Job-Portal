import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading, StatsContainer, ChartContainer } from "../../components";
import { ShowStats } from "../../features/Stats/StatsSlice";
const Stats = () => {
  const dispatch = useDispatch();
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.Stats
  );
 
  React.useEffect(() => {
    dispatch(ShowStats());
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
