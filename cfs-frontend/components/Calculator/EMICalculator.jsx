import { Slider } from "@mui/material";
import { Calendar, IndianRupee, PieChart, Wallet } from "lucide-react";
import React, { useState } from "react";

const EMICalculator = () => {
  const [amount, setAmount] = useState(100000);
  const [year, setYear] = useState(1);
  const [rate, setRate] = useState(12);
  const [error, setError] = useState("");

  let SI = (amount * rate * year) / 100;
  let totalAmount = amount + SI;
  let EMI = totalAmount / (year * 12);

  if (amount < 0 || year < 0 || rate < 0) {
    SI = 0;
    totalAmount = 0;
    EMI = 0;
  }

  return (
    // Main Container: Added padding, soft shadow, rounded corners, and responsive flex
    <div className="w-full max-w-5xl mx-auto p-6 md:p-8 bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col lg:flex-row gap-10">
      {/* Left Section: Inputs */}
      <section className="w-full lg:w-1/2 flex flex-col space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Calculate your EMI
          </h2>
          <p className="text-sm text-gray-500">
            Fast, simple, and transparent calculation.
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-200">
            {error}
          </div>
        )}

        {/* Loan Amount */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-700">Loan Amount</p>
            {/* Modern Input Box */}
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500 transition-all">
              <IndianRupee size={16} className="text-gray-400 mr-1" />
              <input
                type="number"
                value={amount}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setAmount(val);
                  if (val < 0) setError("Enter amount greater than 0.");
                  else setError("");
                }}
                className="bg-transparent outline-none w-[100px] text-right font-bold text-gray-800"
              />
            </div>
          </div>
          <Slider
            size="medium"
            value={amount}
            aria-label="Loan Amount"
            max={500000}
            min={10000}
            step={10000}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="!text-orange-500"
          />
          <div className="flex justify-between text-xs text-gray-400 font-medium">
            <span>₹10,000</span>
            <span>₹5,00,000</span>
          </div>
        </div>

        {/* Tenure */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-700">
              Tenure (Years)
            </p>
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500 transition-all">
              <input
                type="number"
                value={year}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setYear(val);
                  if (val < 0) setError("Enter Tenure greater than 0.");
                  else setError("");
                }}
                className="bg-transparent outline-none w-[60px] text-right font-bold text-gray-800"
              />
              <span className="text-gray-500 text-sm ml-2">Yr</span>
            </div>
          </div>
          <Slider
            size="medium"
            value={year}
            aria-label="Tenure"
            max={10}
            min={1}
            step={1}
            onChange={(e) => setYear(Number(e.target.value))}
            className="!text-orange-500"
          />
        </div>

        {/* Interest Rate */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-700">
              Interest Rate (% P.A)
            </p>
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500 transition-all">
              <input
                type="number"
                value={rate}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setRate(val);
                  if (val < 0) setError("Enter Rate greater than 0.");
                  else setError("");
                }}
                className="bg-transparent outline-none w-[60px] text-right font-bold text-gray-800"
              />
              <span className="text-gray-500 text-sm ml-2">%</span>
            </div>
          </div>
          <Slider
            size="medium"
            value={rate}
            aria-label="Interest Rate"
            max={50}
            min={5}
            step={0.5}
            onChange={(e) => setRate(Number(e.target.value))}
            className="!text-orange-500"
          />
        </div>
      </section>

      {/* Right Section: Results display */}
      <section className="w-full lg:w-1/2 flex flex-col gap-5">
        {/* Main EMI Card with soft gradient */}
        <div className="w-full h-full min-h-[260px] bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200 rounded-3xl shadow-sm flex flex-col items-center justify-center p-6 relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200/40 rounded-full blur-2xl"></div>

          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 text-orange-500 z-10">
            <Calendar size={32} strokeWidth={2.5} />
          </div>

          <p className="text-gray-600 font-medium z-10">Your Monthly EMI</p>
          <div className="flex items-baseline gap-1 mt-2 z-10">
            <span className="text-3xl font-bold text-gray-800">₹</span>
            <span className="text-5xl font-black text-gray-900 tracking-tight">
              {EMI ? EMI.toFixed(0).toLocaleString("en-IN") : 0}
            </span>
          </div>
        </div>

        {/* Summary Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Total Payable Box */}
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2 text-gray-500">
              <Wallet size={16} />
              <p className="text-sm font-medium">Total Payable</p>
            </div>
            <p className="text-xl font-bold text-gray-800">
              ₹ {totalAmount.toLocaleString("en-IN")}
            </p>
          </div>

          {/* Total Interest Box */}
          <div className="bg-orange-50/50 rounded-2xl p-4 border border-orange-100 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2 text-orange-600">
              <PieChart size={16} />
              <p className="text-sm font-medium">Total Interest</p>
            </div>
            <p className="text-xl font-bold text-orange-600">
              ₹ {SI.toLocaleString("en-IN")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EMICalculator;
