import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import KanbanBoard from "./pages/KanbanBoard";
import AddCandidate from "./pages/AddCandidate";

function App() {
  const [currentPage, setCurrentPage] = useState("kanban"); // default page
  const [refreshTrigger, setRefreshTrigger] = useState(0); // for updating dashboard

  return (
    <div
      className="min-h-screen flex flex-col items-center p-6"
      style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)" }}
    >
      {/* Project Heading */}
      <h1 className="text-5xl font-bold text-white mb-8 text-center">
        Mini Applicant Tracking System
      </h1>

      {/* Buttons Row */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <button
          onClick={() => setCurrentPage("kanban")}
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
        >
          Kanban Board
        </button>
        <button
          onClick={() => setCurrentPage("dashboard")}
          className="bg-white text-green-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
        >
          Dashboard
        </button>
        <button
          onClick={() => setCurrentPage("add")}
          className="bg-white text-yellow-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
        >
          Add Candidate
        </button>
      </div>

      {/* Pages */}
      <div className="w-full max-w-6xl">
        {currentPage === "kanban" && <KanbanBoard refreshTrigger={refreshTrigger} />}
        {currentPage === "dashboard" && <Dashboard refreshTrigger={refreshTrigger} />}
        {currentPage === "add" && (
          <AddCandidate
            onAdd={() => setRefreshTrigger((prev) => prev + 1)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
