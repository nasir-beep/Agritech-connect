import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../services/Navbar";
import Footer from "../services/Footer";
import StatCard from "../components/StatCard";
import WeatherCard from "../components/WeatherCard";

function Home() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { title: "Active Farmers", value: "1,234+", icon: "👨‍🌾" },
    { title: "Products", value: "567+", icon: "🛒" },
    { title: "Mentors", value: "89+", icon: "👥" },
    { title: "Posts", value: "2,345+", icon: "💬" },
  ];

  const features = [
    {
      icon: "🌾",
      title: "Smart Marketplace",
      description: "Buy and sell farm products directly with fair prices",
      color: "bg-green-100",
      link: "/marketplace"
    },
    {
      icon: "📚",
      title: "Learning Hub",
      description: "Access modern farming techniques and best practices",
      color: "bg-blue-100",
      link: "/learning"
    },
    {
      icon: "🤝",
      title: "Expert Mentorship",
      description: "Connect with experienced agricultural experts",
      color: "bg-yellow-100",
      link: "/mentorship"
    },
    {
      icon: "🔍",
      title: "Crop Diagnosis",
      description: "AI-powered disease detection for your crops",
      color: "bg-purple-100",
      link: "/crop-diagnosis"
    },
    {
      icon: "💬",
      title: "Community",
      description: "Share knowledge with fellow farmers",
      color: "bg-pink-100",
      link: "/community"
    },
    {
      icon: "☁️",
      title: "Weather Updates",
      description: "Real-time weather forecasts for farming",
      color: "bg-cyan-100",
      link: "/weather"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">

        <section className="bg-gradient-to-br from-primary to-green-600 text-white">
          <div className="container mx-auto container-padding py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Welcome to{' '}
                <span className="block sm:inline text-secondary">Agritech Connect</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 px-4">
                Your digital partner in modern farming. Connect, learn and grow with our agricultural community.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link 
                  to="/marketplace" 
                  className="btn-primary bg-white text-primary hover:bg-gray-100 py-3 sm:py-4 text-base sm:text-lg"
                >
                  Start Shopping 🛒
                </Link>
                <Link 
                  to="/learning" 
                  className="btn-secondary py-3 sm:py-4 text-base sm:text-lg"
                >
                  Start Learning 📚
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path fill="#f9fafb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto container-padding">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <StatCard 
                    title={stat.title} 
                    value={stat.value}
                    icon={stat.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto container-padding">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <Link
                  key={index}
                  to={feature.link}
                  className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-500 hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className={`card h-full flex flex-col items-center text-center p-6 ${feature.color}`}>
                    <div className="text-5xl md:text-6xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
                    <span className="mt-4 text-primary font-semibold text-sm md:text-base">
                      Learn more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto container-padding">
            <div className="max-w-md mx-auto md:max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                Today's Weather
              </h2>
              <WeatherCard />
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-12 md:py-16">
          <div className="container mx-auto container-padding text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to transform your farming?
            </h2>
            <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto">
              Join thousands of farmers already using Agritech Connect
            </p>
            <Link 
              to="/register" 
              className="btn-secondary inline-block py-3 px-8 text-base md:text-lg">
              Get Started Today 🚀
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-20 right-4 md:hidden bg-primary text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-2xl z-40"
      >
        ↑
      </button>
    </div>
  );
}

export default Home;