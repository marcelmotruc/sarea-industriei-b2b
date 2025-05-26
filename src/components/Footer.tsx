
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">SaltPro Distribution</h3>
            <p className="text-gray-300 mb-4">
              Furnizor de încredere de sare și produse conexe pentru industrii diverse. 
              Cu peste 30 de produse în catalog, servim restaurante, bacanii, macelării, 
              ferme și multe alte business-uri.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+40 123 456 789</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigare Rapidă</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Industrii
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Produse
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                contact@saltpro.ro
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +40 123 456 789
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                Strada Principală nr. 123<br />
                București, România
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 SaltPro Distribution. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
