function StatCard({ title, value, icon }) {
  return (
    <div className="card text-center hover:shadow-lg transition">
      <div className="text-3xl md:text-4xl mb-2">{icon}</div>
      <h3 className="text-gray-500 text-xs md:text-sm mb-1 truncate">{title}</h3>
      <p className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">{value}</p>
    </div>
  );
}

export default StatCard;