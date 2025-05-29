
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Users, Award, Truck, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Despre Samia.ro
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suntem o companie românească specializată în distribuția de sare și produse 
            conexe pentru diverse industrii, cu peste 15 ani de experiență pe piață.
          </p>
        </div>

        {/* Company Story */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Povestea Noastră</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Samia.ro a fost fondată în 2009 cu misiunea de a oferi 
                produse de sare de cea mai înaltă calitate pentru industrii diverse. 
                Începând ca o mică companie locală, am crescut constant pentru a deveni 
                unul dintre furnizorii de încredere la nivel național.
              </p>
              <p className="text-gray-600 mb-4">
                În cei peste 15 ani de activitate, am dezvoltat relații strânse cu 
                producători de renume din România și Europa, asigurându-ne că oferim 
                mereu produse certificate și de calitate superioară.
              </p>
              <p className="text-gray-600">
                Astăzi deservim peste 500 de clienți din industrii variate, de la 
                restaurante și macelării până la ferme mari și facilitățile de 
                procesare alimentară.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="About us"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Clienți Activi</div>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">30+</div>
            <div className="text-gray-600">Tipuri de Produse</div>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">15</div>
            <div className="text-gray-600">Ani de Experiență</div>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">6</div>
            <div className="text-gray-600">Industrii Deservite</div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Misiunea Noastră</h2>
            <p className="text-gray-600">
              Să furnizăm produse de sare de cea mai înaltă calitate și să oferim 
              servicii excepționale clienților noștri, contribuind la succesul 
              business-urilor lor prin soluții personalizate și consultanță specializată.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Valorile Noastre</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Calitate și încredere în toate produsele oferite
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Transparență în toate relațiile de afaceri
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Inovație continuă și adaptabilitate
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Responsabilitate față de mediu și comunitate
              </li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Echipa Noastră
          </h2>
          <p className="text-xl text-gray-600 text-center mb-8">
            O echipă de profesioniști dedicați cu experiență vastă în industrie
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Departament Vânzări</h3>
              <p className="text-gray-600">
                Echipa noastră de vânzări este formată din specialiști cu 
                experiență în diverse industrii.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Control Calitate</h3>
              <p className="text-gray-600">
                Specialiști în controlul calității care asigură standardele 
                înalte ale produselor noastre.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Logistică</h3>
              <p className="text-gray-600">
                Echipa de logistică asigură livrarea rapidă și sigură a 
                produselor în toată țara.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
