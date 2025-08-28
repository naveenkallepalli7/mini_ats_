import { useState } from "react";
import axios from "axios";

export default function EditCandidateModal({ candidate, onClose, onUpdate, onDelete }) {
  const [name, setName] = useState(candidate.name);
  const [role, setRole] = useState(candidate.role);
  const [experience, setExperience] = useState(candidate.experience);

  const handleSave = async () => {
    try {
      const updated = await axios.put(`http://localhost:5000/api/candidates/${candidate._id}`, {
        name,
        role,
        experience: Number(experience)
      });
      onUpdate(updated.data);
      onClose();
    } catch (err) {
      console.error("Failed to update candidate:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/candidates/${candidate._id}`);
      onDelete(candidate._id);
      onClose();
    } catch (err) {
      console.error("Failed to delete candidate:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Edit Candidate</h2>

        <div className="flex flex-col space-y-2 mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
            placeholder="Name"
          />
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border p-2 rounded"
            placeholder="Role"
          />
          <input
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="border p-2 rounded"
            placeholder="Experience (yrs)"
          />
        </div>

        <div className="flex justify-between">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
