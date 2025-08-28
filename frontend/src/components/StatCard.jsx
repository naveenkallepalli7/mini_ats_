export default function StatCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <div className="text-gray-500">{title}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}
