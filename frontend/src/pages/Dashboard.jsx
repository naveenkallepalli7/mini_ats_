import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import axios from "axios";

// Updated StatCard component with colors
function StatCard({ title, value, color }) {
  return (
    <div
      className={`p-6 rounded-lg shadow-md flex flex-col items-center justify-center`}
      style={{ background: color, minWidth: 180 }}
    >
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-3xl font-bold text-white">{value}</p>
    </div>
  );
}

export default function Dashboard({ refreshTrigger }) {
  const [candidates, setCandidates] = useState([]);

  const fetchCandidates = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/candidates");
      setCandidates(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, [refreshTrigger]);

  const total = candidates.length;
  const avgExp =
    total === 0
      ? 0
      : (candidates.reduce((acc, c) => acc + c.experience, 0) / total).toFixed(1);

  const stageData = ["Applied", "Interview", "Offer", "Rejected"].map((stage) => ({
    name: stage,
    value: candidates.filter((c) => c.status === stage).length,
  }));

  const roleData = ["Frontend", "Backend", "Fullstack"].map((role) => ({
    name: role,
    value: candidates.filter((c) => c.role === role).length,
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="mt-4 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Analytics Dashboard</h1>

      {/* Stats Row */}
      <div className="flex space-x-6 mb-8 justify-center flex-wrap">
        <StatCard title="Total Candidates" value={total} color="linear-gradient(135deg, #6a11cb, #2575fc)" />
        <StatCard title="Avg Experience" value={avgExp + " yrs"} color="linear-gradient(135deg, #f7971e, #ffd200)" />
      </div>

      {/* Charts Row */}
      <div className="flex flex-wrap justify-center gap-12">
        {/* Pie Chart Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-3">Candidates by Stage</h3>
          <PieChart width={300} height={300}>
            <Pie
              data={stageData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {stageData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>

        {/* Bar Chart Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-3">Candidates by Role</h3>
          <BarChart width={300} height={300} data={roleData} barSize={40}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}
