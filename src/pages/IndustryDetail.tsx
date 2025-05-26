
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { industries, products } from "../data/mockData";
import { ArrowLeft } from "lucide-react";

const IndustryDetail = () => {
  const { id } = useParams();
  const industry = industries.find((ind) => ind.id === id);

  if (!industry) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Industria nu a fost găsită
            </h1>
            <Link
              to="/industries"
              className="text-blue-600 hover:text-blue-700 inline-flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Înapoi la Industrii
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const industryProducts = products.filter((product) =>
    product.industries.includes(industry.id)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/industries"
          className="text-blue-600 hover:text-blue-700 inline-flex items-center mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Înapoi la Industrii
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <img
            src={industry.image}
            alt={industry.name}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {industry.name}
            </h1>
            <p className="text-xl text-gray-600">
              {industry.description}
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Produse pentru {industry.name}
          </h2>
          
          {industryProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Nu există produse disponibile pentru această industrie momentan.
              </p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ai nevoie de consultanță specializată?
          </h2>
          <p className="text-lg mb-6">
            Echipa noastră de experți te poate ajuta să alegi produsele potrivite 
            pentru {industry.name.toLowerCase()}.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contactează-ne
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndustryDetail;
