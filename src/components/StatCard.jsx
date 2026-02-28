function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 text-center">
      <h3 className="text-gray-500 text-sm mb-1">{title}</h3>
      <p className="text-xl md:text-2xl font-bold text-primary">{value}</p>
    </div>
  );
}
export default StatCard;