function StatCard({ title, value }) {
  return (
    <div className="card text-center p-4 md:p-6">
      <h3 className="text-gray-500 text-xs md:text-sm mb-1 truncate">{title}</h3>
      <p className="text-xl md:text-3xl font-bold text-primary">{value}</p>
    </div>
  );
}

export default StatCard;