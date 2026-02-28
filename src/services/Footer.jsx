import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">🌱 AgriConnect</h3>
            <p className="text-gray-300 text-sm">
              Empowering farmers with technology for sustainable agriculture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/marketplace" className="hover:text-white">Marketplace</Link></li>
              <li><Link to="/learning" className="hover:text-white">Learning Hub</Link></li>
              <li><Link to="/mentorship" className="hover:text-white">Find a Mentor</Link></li>
              <li><Link to="/community" className="hover:text-white">Community</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/weather" className="hover:text-white">Weather Updates</Link></li>
              <li><Link to="/crop-diagnosis" className="hover:text-white">Crop Diagnosis</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/support" className="hover:text-white">Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📧 info@agritech.com</li>
              <li>📞 +27 123 456 789</li>
              <li>📍 Benoni, South Africa</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} AgriTech Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;