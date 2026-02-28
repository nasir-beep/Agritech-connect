import { useState } from "react";
import Navbar from "../services/Navbar";
import Footer from "../services/Footer";
import PostCard from "../components/PostCard";

function Community() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Farmer John",
      content: "Has anyone tried the new drought-resistant maize variety? Looking for feedback before planting.",
      time: "2 hours ago",
      likes: 12,
      comments: 5
    },
    {
      id: 2,
      author: "Sarah Green",
      content: "Just installed a drip irrigation system on my farm. Game changer! Happy to share tips.",
      time: "5 hours ago",
      likes: 24,
      comments: 8
    },
    {
      id: 3,
      author: "AgriExpert",
      content: "Tip of the day: Test your soil pH before applying fertilizers. It can save you money and improve yields!",
      time: "1 day ago",
      likes: 45,
      comments: 12
    },
    {
      id: 4,
      author: "YoungFarmer",
      content: "Looking for mentorship in organic vegetable farming. Any recommendations?",
      time: "2 days ago",
      likes: 18,
      comments: 7
    }
  ]);

  const [newPost, setNewPost] = useState("");

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: "You",
        content: newPost,
        time: "Just now",
        likes: 0,
        comments: 0
      };
      setPosts([post, ...posts]);
      setNewPost("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Community Forum</h1>

        <div className="card mb-8">
          <form onSubmit={handleCreatePost}>
            <textarea
              placeholder="Share something with the community..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="w-full p-3 border rounded-lg mb-3"
              rows="3"
            />
            <button type="submit" className="btn-primary">
              Post to Community
            </button>
          </form>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              author={post.author}
              content={post.content}
              time={post.time}
              likes={post.likes}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Community;