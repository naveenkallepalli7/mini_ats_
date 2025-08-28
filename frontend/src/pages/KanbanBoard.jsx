import { useEffect, useState } from "react";
import axios from "axios";
import KanbanColumn from "../components/KanbanColumn";
import FilterBar from "../components/FilterBar";
import { DragDropContext } from "@hello-pangea/dnd";

export default function KanbanBoard() {
  const [candidates, setCandidates] = useState([]);
  const [filters, setFilters] = useState({ role: "", experience: "" });

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
  }, []);

  const onDragEnd = async (result) => {
    const { destination, draggableId } = result;
    if (!destination) return;

    const candidateId = draggableId;
    const newStatus = destination.droppableId;

    // Update frontend state immediately
    setCandidates((prev) =>
      prev.map((c) => (c._id === candidateId ? { ...c, status: newStatus } : c))
    );

    // Update backend
    try {
      await axios.put(`http://localhost:5000/api/candidates/${candidateId}`, { status: newStatus });
    } catch (err) {
      console.error(err);
      fetchCandidates(); // revert if fails
    }
  };

  const filteredCandidates = candidates.filter((c) => {
    return (
      (!filters.role || c.role.toLowerCase().includes(filters.role.toLowerCase())) &&
      (!filters.experience || c.experience >= Number(filters.experience))
    );
  });

  const columns = ["Applied", "Interview", "Offer", "Rejected"];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Job Application Tracker</h1>

      <FilterBar filters={filters} setFilters={setFilters} />

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex space-x-4 overflow-x-auto">
          {columns.map((col) => (
            <KanbanColumn
              key={col}
              title={col}
              candidates={filteredCandidates.filter((c) => c.status === col)}
              setCandidates={setCandidates}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
