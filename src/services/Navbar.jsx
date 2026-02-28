import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../components/AuthContext";
import NavbarCard from "../components/NavbarCard";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Learning", path: "/learning" },
    { name: "Diagnosis", path: "/crop-diagnosis" },
    { name: "Mentorship", path: "/mentorship" },
    { name: "Community", path: "/community" },
    { name: "Weather", path: "/weather" },
  ];

  return (
    <nav className="bg-primary text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl md:text-2xl font-bold truncate max-w-[150px] md:max-w-none">
            AGRITECH CONNECT
          </Link>

          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-secondary transition text-sm lg:text-base">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            {user ? (
              <NavbarCard user={user} onLogout={handleLogout} />
            ) : (
              <div className="hidden md:flex space-x-2">
                <Link to="/login" className="px-3 py-1.5 bg-white text-primary rounded-lg hover:bg-gray-100 text-sm">Login</Link>
                <Link to="/register" className="px-3 py-1.5 bg-secondary text-white rounded-lg hover:bg-green-600 text-sm">Register</Link>
              </div>
            )}

            <button className="md:hidden text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-600 animate-slideDown">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center py-3 px-2 hover:bg-green-600 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}>{link.name}
                <span className="text-xl mr-3">{link.icon}</span>
                <span className="text-base">{link.name}</span>
              </Link>
            ))}
          
            {!user && (
              <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-green-600">
                <Link
                  to="/login"
                  className="flex items-center justify-center py-3 bg-white text-primary rounded-lg hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}><span className="mr-2"></span> Login
                </Link>
                <Link
                  to="/register"
                  className="flex items-center justify-center py-3 bg-secondary text-white rounded-lg hover:bg-green-600"
                  onClick={() => setMobileMenuOpen(false)}><span className="mr-2"></span> Register
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;