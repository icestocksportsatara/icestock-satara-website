import React from "react";

const SectionHeading = ({ title }) => {
  return (
    <div className="relative mb-10">
      <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-[#cfe4f2]" />
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
        <h2 className="inline-block text-[#143a55] font-bold text-[34px] md:text-[44px] pr-6 bg-inherit">
          <span className="bg-white pr-6 relative z-10">{title}</span>
        </h2>
      </div>
    </div>
  );
};

export default SectionHeading;
