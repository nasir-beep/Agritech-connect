function MentorCard({ name, expertise, rating, onConnect }) {
  return (
    <div className="card">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl">
          {name.charAt(0)}
        </div>
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{expertise}</p>
          <div className="flex items-center mt-1">
            <span className="text-yellow-500">★</span>
            <span className="text-sm ml-1">{rating}</span>
          </div>
        </div>
      </div>
      <button 
        onClick={onConnect}
        className="btn-primary w-full"
      >
        Connect
      </button>
    </div>
  );
}

export default MentorCard;