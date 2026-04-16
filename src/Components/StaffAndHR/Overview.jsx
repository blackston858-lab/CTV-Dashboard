import React from "react";
import { OverviewData } from "../../Data/OverviewData";
import { IoIosArrowDown } from "react-icons/io";

const Overview = () => {
  return (
    <div className="w-[1100px] px-8 mx-auto">
      <div className="p-4">
        <h1 className="text-3xl font-bold text-gray-800 ">Staff & HR</h1>
      </div>
      <div className="  bg-[rgb(230,238,243)] px-5  mr-4  rounded-3xl mt-7  border border-white  p-2">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className=" text-[25px] py-3 font-semibold">
            <h1>Overview</h1>
          </div>
          <div className="w-[180px] h-[40px] bg-white/65 rounded-2xl p-2">
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-semibold">Islamabad</p>
              <IoIosArrowDown size={20} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-10 gap-y-10">
          {/* cards */}
          {OverviewData.map((item, index) => {
            return (
              <div
                className=" bg-white/65  rounded-2xl w-[300px] h-[160px] p-3"
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

export default Overview;
