import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function NavbarCard({ user, onLogout, scrolled }) {
  const [showMenu, setShowMenu] = useState(false);

  if (!user) return null;

  return (
    <div className="relative">

      <button
        onClick={() => setShowMenu(!showMenu)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300
          ${scrolled 
            ? 'hover:bg-gray-100' 
            : 'hover:bg-white/10'
          }`}
      >
        <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
          {user.name ? user.name.charAt(0).toUpperCase() : ''}
        </div>
        <span className={`hidden lg:inline font-medium ${
          scrolled ? 'text-gray-700' : 'text-white'
        }`}>
          {user.name || 'User'}
        </span>
        <motion.span
          animate={{ rotate: showMenu ? 180 : 0 }}
          className={`${scrolled ? 'text-gray-700' : 'text-white'}`}
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-50 border border-gray-100"
          >
            <Link
              to="/profile"
              className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition"
              onClick={() => setShowMenu(false)}
            >
              <span className="text-xl">👤</span>
              <span>Profile</span>
            </Link>
            <Link
              to="/dashboard"
              className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition"
              onClick={() => setShowMenu(false)}
            >
              <span className="text-xl">📊</span>
              <span>Dashboard</span>
            </Link>
            <Link
              to="/settings"
              className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition"
              onClick={() => setShowMenu(false)}
            >
              <span className="text-xl">⚙️</span>
              <span>Settings</span>
            </Link>
            <hr className="my-2" />
            <button
              onClick={() => {
                onLogout();
                setShowMenu(false);
              }}
              className="flex items-center space-x-3 w-full text-left px-4 py-3 text-error hover:bg-red-50 transition"
            >
              <span className="text-xl">🚪</span>
              <span>Logout</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavbarCard;