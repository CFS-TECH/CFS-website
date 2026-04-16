"use client";
import React, { useState } from "react";
import EMICalculator from "./EMICalculator";
import { Divider } from "@mui/material";
import EMIEligibility from "./EMIEligibility";

const FinalCalculator = () => {
  const [ActiveCalculator, setActiveCalculator] = useState("EMI-Cal");
  return (
    <div className="max-w-5xl mx-auto bg-white ring-2 ring-orange-300  h-[600px] my-16 p-8 rounded-2xl shadow">
      <p className="text-gray-500 text-md">Calculate EMI & Check Eligibility</p>
      <div className="my-6 pb-3">
        <div className="flex items-center gap-6 pb-1">
          <button
            onClick={() => setActiveCalculator("EMI-Cal")}
            className={`${ActiveCalculator === "EMI-Cal" ? "font-bold text-orange-500 text-xl " : "font-semibold  text-xl"} cursor-pointer`}
          >
            EMI Calculator
          </button>
          <button
            onClick={() => setActiveCalculator("E-Cal")}
            className={`${ActiveCalculator === "E-Cal" ? "font-bold text-orange-500 text-xl " : "font-semibold  text-xl"} cursor-pointer`}
          >
            Eligibility Calculator
          </button>
        </div>
        <Divider />
      </div>

      {ActiveCalculator === "EMI-Cal" ? <EMICalculator /> : <EMIEligibility />}
    </div>
  );
};

export default FinalCalculator;
