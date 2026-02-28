import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4 flex items-center justify-center sm:justify-start">AGRITECH CONNECT</h3>
            <p className="text-gray-300 text-sm px-4 sm:px-0">
              Empowering farmers with technology for sustainable agriculture.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/marketplace" className="hover:text-white block py-1">Marketplace</Link></li>
              <li><Link to="/learning" className="hover:text-white block py-1">Learning Hub</Link></li>
              <li><Link to="/mentorship" className="hover:text-whiteblock py-1">Find a Mentor</Link></li>
              <li><Link to="/community" className="hover:text-white blockpy-1">Community</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/weather" className="hover:text-white block py-1">Weather Updates</Link></li>
              <li><Link to="/crop-diagnosis" className="hover:text-white block py-1">Crop Diagnosis</Link></li>
              <li><Link to="/faq" className="hover:text-white block py-1">FAQ</Link></li>
              <li><Link to="/support" className="hover:text-white block py-1">Support</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center justify-center sm:justify-start">info@agritech.com</li>
              <li className="flex items-center justify-center sm:justify-start">+27 12 345 6789</li>
              <li className="flex items-center justify-center sm:justify-start">Benoni, South Africa</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Agritech Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;