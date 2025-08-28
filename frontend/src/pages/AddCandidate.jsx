import CandidateForm from "../components/CandidateForm";
import axios from "axios";

export default function AddCandidate({ onAddCandidate }) {
  const handleAdd = async (formData) => {
    try {
      const res = await axios.post("http://localhost:5000/api/candidates", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      onAddCandidate(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <CandidateForm onAdd={handleAdd} />
    </div>
  );
}
