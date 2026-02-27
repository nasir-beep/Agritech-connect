function PostCard({ author, content, time, likes }) {
  return (
    <div className="card">
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-3">{content}</p>
      <div className="flex items-center space-x-4 text-sm text-gray-500">
        <button className="hover:text-primary">👍 {likes}</button>
        <button className="hover:text-primary">💬 Reply</button>
        <button className="hover:text-primary">↗️ Share</button>
      </div>
    </div>
  );
}

export default PostCard;