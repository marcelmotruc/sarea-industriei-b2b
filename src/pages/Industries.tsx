
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IndustryCard from "../components/IndustryCard";
import { industries } from "../data/mockData";

const Industries = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industrii Deservite
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferim soluții specializate pentru diverse sectoare de activitate, 
            cu produse adaptate nevoilor specifice ale fiecărei industrii.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Industries;
