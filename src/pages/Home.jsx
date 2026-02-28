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

  const features = [
    { icon: "🌾", title: "Online Marketplace", desc: "Buy and sell farm products directly with fair prices" },
    { icon: "📚", title: "Learning Hub", desc: "Access modern farming techniques and best practices" },
    { icon: "🤝", title: "Expert Mentorship", desc: "Connect with experienced agricultural experts" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary to-green-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 px-2">
              Welcome to Agritech Connect
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Your digital partner in modern farming. Connect, learn and grow with our agricultural community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
              <Link to="/marketplace" className="btn-primary text-center px-6 py-3 sm:px-8">
                Start Shopping
              </Link>
              <Link to="/learning" className="bg-secondary text-white px-6 py-3 sm:px-8 rounded-lg font-semibold hover:bg-green-600">
                Start Learning
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat) => (
                <StatCard key={stat.id} title={stat.title} value={stat.value} />
              ))}
            </div>
          </div>
          </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature) => (
                <div key={feature.id} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                  <div className="text-4xl md:text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="py-12 md:py-16 bg-gray-50">
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