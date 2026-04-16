"use client"
import { Slider } from "@mui/material";
import { BadgeCheck, IndianRupee, Info, Landmark, Phone, WalletCards } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const EMIEligibility = ({ phoneNumber = "+919990782525" }) => {
  // States for Eligibility Calculation
  const [monthlyIncome, setMonthlyIncome] = useState(60000);
  const [existingEmi, setExistingEmi] = useState(10000);
  const [tenure, setTenure] = useState(5);
  const [rate, setRate] = useState(12);
  const callUrl = `tel:${phoneNumber}`;
  // --- ELIGIBILITY LOGIC ---
  // 1. Bank assumes you can pay up to 50% of your net income towards EMIs (FOIR)
  const maxEmiCapacity = monthlyIncome * 0.5 - existingEmi;

  // 2. Calculate Maximum Eligible Loan Amount based on the affordable EMI
  let eligibleLoanAmount = 0;

  if (maxEmiCapacity > 0) {
    const r = rate / 12 / 100; // Monthly interest rate
    const n = tenure * 12; // Total number of months

    // Present Value Formula to calculate Loan Amount from EMI
    eligibleLoanAmount =
      maxEmiCapacity * ((Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n)));
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-8 bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col lg:flex-row gap-10">
      {/* Left Section: Inputs */}
      <section className="w-full lg:w-1/2 flex flex-col space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Check Your Eligibility
          </h2>
          <p className="text-sm text-gray-500">
            Find out how much you can borrow based on your income.
          </p>
        </div>

        {/* Net Monthly Income */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-700">
              Net Monthly Income
            </p>
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500 transition-all">
              <IndianRupee size={16} className="text-gray-400 mr-1" />
              <input
                type="number"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(Number(e.target.value) || 0)}
                className="bg-transparent outline-none w-[100px] text-right font-bold text-gray-800"
              />
            </div>
          </div>
          <Slider
            size="medium"
            value={monthlyIncome}
            max={500000}
            min={15000}
            step={5000}
            onChange={(e) => setMonthlyIncome(Number(e.target.value))}
            className="!text-green-500"
          />
        </div>

        {/* Existing EMIs */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-700">
              Existing Monthly EMIs
            </p>
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500 transition-all">
              <IndianRupee size={16} className="text-gray-400 mr-1" />
              <input
                type="number"
                value={existingEmi}
                onChange={(e) => setExistingEmi(Number(e.target.value) || 0)}
                className="bg-transparent outline-none w-[100px] text-right font-bold text-gray-800"
              />
            </div>
          </div>
          <Slider
            size="medium"
            value={existingEmi}
            max={monthlyIncome} // Can't have EMI higher than income
            min={0}
            step={1000}
            onChange={(e) => setExistingEmi(Number(e.target.value))}
            className="!text-red-400"
          />
        </div>

        {/* Tenure */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-700">
              Loan Tenure (Years)
            </p>
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value) || 0)}
                className="bg-transparent outline-none w-[60px] text-right font-bold text-gray-800"
              />
              <span className="text-gray-500 text-sm ml-2">Yr</span>
            </div>
          </div>
          <Slider
            size="medium"
            value={tenure}
            max={10}
            min={1}
            step={1}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="!text-blue-500"
          />
        </div>
      </section>

      {/* Right Section: Results display */}
      <section className="w-full lg:w-1/2 flex flex-col gap-5">
        {/* Main Eligibility Card */}
        <div className="w-full h-full min-h-[260px] bg-gradient-to-br from-green-50 to-emerald-100/50 border border-green-200 rounded-3xl shadow-sm flex flex-col items-center justify-center p-6 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-200/40 rounded-full blur-2xl"></div>

          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 text-green-600 z-10">
            <BadgeCheck size={36} strokeWidth={2} />
          </div>

          <p className="text-gray-600 font-medium z-10 text-center">
            {eligibleLoanAmount > 0
              ? "You are eligible for a loan up to"
              : "Not eligible for a new loan"}
          </p>
          <div className="flex items-baseline gap-1 mt-2 z-10">
            <span className="text-3xl font-bold text-gray-800">₹</span>
            <span className="text-5xl font-black text-gray-900 tracking-tight">
              {eligibleLoanAmount > 0
                ? eligibleLoanAmount.toFixed(0).toLocaleString("en-IN")
                : 0}
            </span>
          </div>

          {eligibleLoanAmount > 0 && (
            <section className="flex flex-wrap items-center gap-4 mt-8 relative z-10">
              {/* Primary Action Button */}
              <Link
                href={callUrl}
                target="_blank"
                aria-label="Call us now"
                className="flex items-center justify-center gap-2 px-8 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 active:scale-95"
              >
                <Phone size={18} className="animate-pulse" />
                Call Now
              </Link>

              {/* Secondary Action Button */}
              <button
                aria-label="View more details"
                className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-gray-700 border border-gray-200 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm active:scale-95"
              >
                <Info size={18} className="text-gray-400" />
                Details
              </button>
            </section>
          )}
        </div>

        {/* Secondary Info Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2 text-gray-500">
              <WalletCards size={16} />
              <p className="text-sm font-medium">Safe EMI Capacity</p>
            </div>
            <p
              className={`text-xl font-bold ${maxEmiCapacity > 0 ? "text-gray-800" : "text-red-500"}`}
            >
              ₹{" "}
              {maxEmiCapacity > 0 ? maxEmiCapacity.toLocaleString("en-IN") : 0}
              /mo
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-2xl p-4 border border-blue-100 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2 text-blue-600">
              <Landmark size={16} />
              <p className="text-sm font-medium">Assumed Rate</p>
            </div>
            <p className="text-xl font-bold text-blue-700">{rate}% P.A.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EMIEligibility;
