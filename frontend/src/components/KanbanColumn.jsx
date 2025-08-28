import { Droppable, Draggable } from "@hello-pangea/dnd";
import KanbanCard from "./KanbanCard";

export default function KanbanColumn({ title, candidates, setCandidates }) {

  // Update candidate in state
  const handleUpdate = (updatedCandidate) => {
    setCandidates((prev) =>
      prev.map((c) => (c._id === updatedCandidate._id ? updatedCandidate : c))
    );
  };

  // Remove candidate from state
  const handleDelete = (id) => {
    setCandidates((prev) => prev.filter((c) => c._id !== id));
  };

  return (
    <div className="bg-gray-100 p-4 rounded w-80">
      <h2 className="font-bold mb-2">{title}</h2>
      <Droppable droppableId={title}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-2 min-h-[50px]">
            {candidates.map((candidate, index) => (
              <Draggable key={candidate._id} draggableId={candidate._id} index={index}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <KanbanCard candidate={candidate} onUpdate={handleUpdate} onDelete={handleDelete} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
