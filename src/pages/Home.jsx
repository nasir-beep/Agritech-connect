import { Link } from "react-router-dom";
import Navbar from "../services/Navbar";
import Footer from "../services/Footer";
import StatCard from "../components/StatCard";
import WeatherCard from "../components/WeatherCard";

function Home() {
  const stats = [
    { title: "Active Farmers", value: "1,234" },
    { title: "Products Available", value: "567" },
    { title: "Expert Mentors", value: "89" },
    { title: "Community Posts", value: "2,345" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary to-green-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Agritech Connect
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your digital partner in modern farming. Connect, learn and grow with our agricultural community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/marketplace" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Start Shopping
              </Link>
              <Link to="/learning" className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600">
                Start Learning
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StatCard key={index} title={stat.title} value={stat.value} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="text-5xl mb-4">🌾</div>
                <h3 className="text-xl font-bold mb-2">Online Marketplace</h3>
                <p className="text-gray-600">Buy and sell farm products directly with fair prices</p>
              </div>
              <div className="card text-center">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-2">Learning Hub</h3>
                <p className="text-gray-600">Access modern farming techniques and best practices</p>
              </div>
              <div className="card text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Expert Mentorship</h3>
                <p className="text-gray-600">Connect with experienced agricultural experts</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <WeatherCard />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;