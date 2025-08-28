export default function FilterBar({ filters, setFilters }) {
  return (
    <div className="flex space-x-4 mb-4">
      <input
        type="text"
        placeholder="Filter by role"
        value={filters.role}
        onChange={(e) => setFilters({ ...filters, role: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Min experience"
        value={filters.experience}
        onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
        className="border p-2 rounded"
      />
    </div>
  );
}
