import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../components/AuthContext";
import NavbarCard from "../components/NavbarCard";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Marketplace", path: "/marketplace", icon: "🛒" },
    { name: "Learning", path: "/learning", icon: "📚" },
    { name: "Diagnosis", path: "/crop-diagnosis", icon: "🔍" },
    { name: "Mentorship", path: "/mentorship", icon: "👥" },
    { name: "Community", path: "/community", icon: "💬" },
    { name: "Weather", path: "/weather", icon: "☁️" },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-lg py-2' : 'bg-primary py-4'
      }`}>
        <div className="container mx-auto container-padding">
          <div className="flex justify-between items-center">

            <Link 
              to="/" 
              className="text-xl md:text-2xl font-bold text-white flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="mr-2"></span>
              <span className="hidden xs:inline">Agritech Connect</span>
              <span className="xs:hidden">AC</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white hover:text-secondary transition text-sm lg:text-base"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              {user ? (
                <NavbarCard user={user} onLogout={handleLogout} />
              ) : (
                <div className="flex items-center space-x-2">
                  <Link
                    to="/login"
                    className="touch-target px-3 py-1 md:px-4 md:py-2 bg-white text-primary rounded-lg text-sm md:text-base hover:bg-gray-100">
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="touch-target px-3 py-1 md:px-4 md:py-2 bg-secondary text-white rounded-lg text-sm md:text-base hover:bg-green-600 hidden sm:inline">
                    Register
                  </Link>
                </div>
              )}

              <button
                className="menu-button md:hidden touch-target text-white text-2xl ml-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-menu md:hidden">
          <div className="pt-20 pb-8 px-6 h-full overflow-y-auto">

            {user && (
              <div className="bg-green-600 rounded-lg p-4 mb-6">
                <p className="text-white font-semibold">Welcome, {user.name || 'Farmer'}!</p>
                <p className="text-green-200 text-sm">{user.email}</p>
              </div>
            )}

            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center space-x-4 text-white text-lg py-4 px-4 hover:bg-green-600 rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>

            {!user && (
              <div className="mt-8 space-y-3">
                <Link
                  to="/login"
                  className="block w-full bg-white text-primary text-center py-4 rounded-lg font-semibold"
                  onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block w-full bg-secondary text-white text-center py-4 rounded-lg font-semibold"
                  onClick={() => setMobileMenuOpen(false)}>
                  Register
                </Link>
              </div>
            )}

            {user && (
              <button
                onClick={handleLogout}
                className="mt-8 w-full bg-red-500 text-white py-4 rounded-lg font-semibold">
                Logout
              </button>
            )}
          </div>
        </div>
      )}

      <div className="h-16 md:h-20"></div>
    </>
  );
}

export default Navbar;