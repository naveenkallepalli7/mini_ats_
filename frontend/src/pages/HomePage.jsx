import React from "react";

export default function HomePage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)" }}
    >
      {/* Project Heading */}
      <h1 className="text-5xl font-bold text-white mb-8 text-center">
        Mini Applicant Tracking System
      </h1>

      {/* Buttons Row */}
      <div className="flex flex-wrap justify-center gap-6">
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
          Kanban Board
        </button>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
          Dashboard
        </button>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
          Add Candidate
        </button>
      </div>
    </div>
  );
}
