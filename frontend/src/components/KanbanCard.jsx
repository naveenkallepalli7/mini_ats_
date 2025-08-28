import { useState } from "react";
import EditCandidateModal from "./EditCandidateModal";

export default function KanbanCard({ candidate, onUpdate, onDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white p-3 rounded shadow cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div>
          <strong>{candidate.name}</strong> ({candidate.role}, {candidate.experience} yrs)
        </div>
      </div>

      {isModalOpen && (
        <EditCandidateModal
          candidate={candidate}
          onClose={() => setIsModalOpen(false)}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      )}
    </>
  );
}
