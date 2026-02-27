function StatCard({ title, value }) {
  return (
    <div className="card text-center">
      <h3 className="text-gray-500 text-sm mb-1">{title}</h3>
      <p className="text-3xl font-bold text-primary">{value}</p>
    </div>
  );
}

export default StatCard;