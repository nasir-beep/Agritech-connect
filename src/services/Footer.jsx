import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Marketplace", path: "/marketplace" },
    { name: "Learning", path: "/learning" },
    { name: "Mentorship", path: "/mentorship" },
    { name: "Community", path: "/community" },
  ];

  const resources = [
    { name: "Weather", path: "/weather" },
    { name: "Crop Diagnosis", path: "/crop-diagnosis" },
    { name: "FAQ", path: "/faq" },
    { name: "Support", path: "/support" },
  ];

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto container-padding py-8 md:py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2"></span>
              <span>Agritech Connect</span>
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              Empowering farmers with technology for sustainable agriculture since 2024.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-2xl hover:text-secondary">📘</a>
              <a href="#" className="text-2xl hover:text-secondary">🐦</a>
              <a href="#" className="text-2xl hover:text-secondary">📷</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white text-sm md:text-base block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white text-sm md:text-base block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <span className="break-all">info@agritech.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>+27 12 345 6789</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>Benoni, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; {currentYear} Agritech Connect. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Made for African farmers
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;