import { useState } from "react";

export default function CandidateForm({ onAdd }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !role || !experience) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);
    formData.append("experience", experience);
    if (resume) formData.append("resume", resume);

    onAdd(formData);

    setName(""); setRole(""); setExperience(""); setResume(null);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <div className="mb-2">
        <input 
          type="text" 
          placeholder="Candidate Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="w-full border p-2 rounded"
        />
      </div>
      <div className="mb-2">
        <input 
          type="text" 
          placeholder="Role (Frontend/Backend/Fullstack)" 
          value={role} 
          onChange={(e) => setRole(e.target.value)} 
          className="w-full border p-2 rounded"
        />
      </div>
      <div className="mb-2">
        <input 
          type="number" 
          placeholder="Experience (years)" 
          value={experience} 
          onChange={(e) => setExperience(e.target.value)} 
          className="w-full border p-2 rounded"
        />
      </div>
      <div className="mb-2">
        <input 
          type="file" 
          onChange={(e) => setResume(e.target.files[0])} 
          className="w-full"
        />
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Candidate
      </button>
    </form>
  );
}
