import React from "react";
import TextStatus from "./TextStatus";
import StatisticChart from "./StatisticChart";
import RadarChart from "./RadarChart";
function index() {
  return (
    <div>
      <TextStatus />

      <StatisticChart />

      <RadarChart />
    </div>
  );
}

export default index;
