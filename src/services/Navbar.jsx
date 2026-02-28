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
          <Link to="/" className="text-2xl font-bold">
            AGRITECH CONNECT
          </Link>

          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-secondary transition">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <NavbarCard user={user} onLogout={handleLogout} />
            ) : (
              <div className="space-x-2">
                <Link to="/login" className="px-4 py-2 bg-white text-primary rounded-lg hover:bg-gray-100">Login</Link>
                <Link to="/register" className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-green-600">Register</Link>
              </div>
            )}

            <button className="md:hidden text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-600">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 hover:text-secondary"
                onClick={() => setMobileMenuOpen(false)}>{link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;