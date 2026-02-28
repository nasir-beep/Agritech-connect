import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Learning", path: "/learning" },
    { name: "Crop Diagnosis", path: "/crop-diagnosis" },
    { name: "Mentorship", path: "/mentorship" },
    { name: "Community", path: "/community" },
    { name: "Weather", path: "/weather" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen hidden md:block">
      <div className="p-4">
        <h2 className="text-xl font-bold text-primary mb-6">Menu</h2>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                isActive(item.path)
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;