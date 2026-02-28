import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../components/AuthContext";

function NavbarCard({ user, onLogout }) {
  const [showMenu, setShowMenu] = useState(false);

  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center space-x-2 bg-white text-primary px-3 py-1 rounded-lg">
        <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
          {user.name ? user.name.charAt(0) : "U"}</span>
        <span className="hidden md:inline">{user.name || "User"}</span>
      </button>

      {showMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          <Link
            to="/profile"
            className="block px-4 py-2 text-green-700 hover:bg-green-50 transition font-medium"
            onClick={() => setShowMenu(false)}>Profile</Link>
          <Link
            to="/settings"
            className="block px-4 py-2 text-green-700 hover:bg-green-50 transition font-medium"
            onClick={() => setShowMenu(false)}>Settings</Link>

          <hr className="my-2" />
          <button
            onClick={() => {
              onLogout();
              setShowMenu(false);
            }}
            className="block px-4 py-2 text-red-700 hover:bg-green-50 transition font-medium">Logout</button>
        </div>
      )}
    </div>
  );
}

export default NavbarCard;