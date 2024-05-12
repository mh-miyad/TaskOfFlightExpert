import { useState } from "react";

const TabComp = () => {
  const [isActive, setIsActive] = useState("round-trip");
  return (
    <>
      <div className="flex justify-center ">
        <div className="my-8 flex gap-2 rounded-sm border border-[#2E3791]">
          <button
            className={`w-28 py-1 font-medium  ${isActive == "round-trip" ? "bg-[#2E3791] text-white" : ""} `}
            onClick={() => setIsActive("round-trip")}
          >
            Round Trip
          </button>
          <button
            className={`w-28  py-1 font-medium ${isActive == "one-way" ? "bg-[#2E3791] text-white" : ""}`}
            onClick={() => setIsActive("one-way")}
          >
            One Way
          </button>
          <button
            className={`w-28 py-1 font-medium  ${isActive == "multi-city" ? "bg-[#2E3791] text-white" : ""} `}
            onClick={() => setIsActive("multi-city")}
          >
            Multi City
          </button>
        </div>
      </div>
      <hr className="h-0.5 bg-blue-300" />
    </>
  );
};

export default TabComp;
