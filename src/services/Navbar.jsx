import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../components/AuthContext";
import NavbarCard from "../components/NavbarCard";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
  };

  const navLinks = [
    { name: "Home", path: "/"},
    { name: "Marketplace", path: "/marketplace"},
    { name: "Learning", path: "/learning"},
    { name: "Diagnosis", path: "/crop-diagnosis"},
    { name: "Mentorship", path: "/mentorship"},
    { name: "Community", path: "/community"},
    { name: "Weather", path: "/weather"},
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-gradient-to-r from-primary-600 to-primary-500 py-4'
      }`}>
        <div className="container mx-auto container-padding">
          <div className="flex justify-between items-center">
              <Link 
              to="/" 
              className="text-xl md:text-2xl font-bold flex items-center group"
            >
              <motion.span 
                className="text-3xl mr-2 inline-block"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}>
              </motion.span>
              <span className={`font-display ${
                scrolled ? 'text-primary-600' : 'text-white'
              }`}>
                Agritech<span className={scrolled ? 'text-secondary-400' : 'text-secondary-300'}>Connect</span>
              </span>
            </Link>


            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium
                    ${location.pathname === link.path 
                      ? scrolled 
                        ? 'bg-primary-100 text-primary-600' 
                        : 'bg-white/20 text-white'
                      : scrolled 
                        ? 'text-gray-600 hover:bg-gray-100' 
                        : 'text-white/90 hover:bg-white/10'}`}>
                  <span className="mr-2">{link.icon}</span>
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              {user ? (
                <NavbarCard user={user} onLogout={handleLogout} scrolled={scrolled} />
              ) : (
                <div className="flex items-center space-x-2">
                  <Link
                    to="/login"
                    className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium
                      ${scrolled 
                        ? 'text-primary-600 hover:bg-primary-50' 
                        : 'text-white hover:bg-white/10'}`}>
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 bg-secondary-400 text-gray-900 rounded-lg font-medium 
                             hover:bg-secondary-500 transition-all duration-300
                             transform hover:scale-105 hover:shadow-lg">
                    Register
                  </Link>
                </div>
              )}

              <button
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg
                         transition-all duration-300 relative"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className={`w-6 h-0.5 transition-all duration-300 absolute
                  ${scrolled ? 'bg-gray-800' : 'bg-white'}`}
                  style={{
                    transform: mobileMenuOpen ? 'rotate(45deg)' : 'translateY(-6px)'
                  }}
                />
                <div className={`w-6 h-0.5 transition-all duration-300 absolute
                  ${scrolled ? 'bg-gray-800' : 'bg-white'}`}
                  style={{
                    opacity: mobileMenuOpen ? 0 : 1
                  }}
                />
                <div className={`w-6 h-0.5 transition-all duration-300 absolute
                  ${scrolled ? 'bg-gray-800' : 'bg-white'}`}
                  style={{
                    transform: mobileMenuOpen ? 'rotate(-45deg)' : 'translateY(6px)'
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 md:hidden pt-20"
          >
            <div className="h-full overflow-y-auto p-6">

              {user && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="gradient-primary rounded-2xl p-6 mb-6 text-white"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                      {user.name ? user.name.charAt(0) : '👤'}
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{user.name || 'Farmer'}</p>
                      <p className="text-white/80 text-sm">{user.email}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300
                        ${location.pathname === link.path
                          ? 'gradient-primary text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      onClick={() => setMobileMenuOpen(false)}>
                      <span className="text-2xl">{link.icon}</span>
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {!user && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-8 space-y-3">
                  <Link
                    to="/login"
                    className="block w-full text-center py-4 border-2 border-primary-500 
                             text-primary-500 rounded-xl font-semibold hover:bg-primary-50 
                             transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}>
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full text-center py-4 gradient-primary text-white 
                             rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}>
                    Register
                  </Link>
                </motion.div>
              )}

              {user && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  onClick={handleLogout}
                  className="mt-8 w-full py-4 bg-error/10 text-error rounded-xl 
                           font-semibold hover:bg-error/20 transition-all duration-300">
                  Logout
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-16 md:h-20"></div>
    </>
  );
}

export default Navbar;