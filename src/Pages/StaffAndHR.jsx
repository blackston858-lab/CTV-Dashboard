import React from "react";
import Sidebar from "../Components/Sidebar";
import Overview from "../Components/StaffAndHR/Overview";
import StaffPerformance from "../Components/StaffAndHR/StaffPerformance";
import StaffList from "../Components/StaffAndHR/StaffList";

const StaffAndHR = () => {
  return (
    <div className="flex bg-[#d4e4f0] min-h-screen">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[70%]">
        {/* Overview */}
        <Overview />
        {/* Staff Performance */}
        <StaffPerformance />
        {/* Staff Performance */}
        <StaffList />
      </div>
    </div>
  );
};

export default StaffAndHR;
