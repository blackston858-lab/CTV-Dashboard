import React from "react";
import { StaffPerformanceData } from "../../Data/StaffPerformanceData";

const StaffPerformance = () => {
  return (
    <div className="w-[1100px] px-8 mx-auto">
      <div className="  bg-[rgb(230,238,243)] px-5  mr-4  rounded-3xl mt-7  border border-white  p-2">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className=" text-[25px] py-3 font-semibold">
            <h1>Staff Performance</h1>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-10 gap-y-10">
          {/* cards */}
          {StaffPerformanceData.map((item, index) => {
            return (
              <div
                className=" bg-white/65  rounded-2xl w-[300px] p-3"
                key={index}
              >
                <div className="flex justify-between">
                  <div className="font-bold">
                    <h1 className="text-[#63a9b7] text-[21px]">{item.title}</h1>
                    <h2 className="text-[20px]">{item.value}</h2>
                  </div>
                  <div className="bg-[#c3f1f2] text-[#25889d] p-5 rounded-3xl text-[20px] w-fit h-fit">
                    <item.icons />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StaffPerformance;
