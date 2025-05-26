
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products, industries } from "../data/mockData";
import { ArrowLeft, Package, Truck, ShieldCheck } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Produsul nu a fost găsit
            </h1>
            <Link
              to="/products"
              className="text-blue-600 hover:text-blue-700 inline-flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Înapoi la Produse
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedIndustries = industries.filter((industry) =>
    product.industries.includes(industry.id)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/products"
          className="text-blue-600 hover:text-blue-700 inline-flex items-center mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Înapoi la Produse
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {product.description}
            </p>

            {/* Quick Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">Calitate garantată</span>
              </div>
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm text-gray-600">Livrare rapidă</span>
              </div>
              <div className="flex items-center">
                <Package className="h-5 w-5 text-orange-600 mr-2" />
                <span className="text-sm text-gray-600">Ambalaje diverse</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Solicită Ofertă
            </Link>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Applications */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Aplicații</h2>
            <ul className="space-y-2">
              {product.applications.map((application, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">{application}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Specificații</h2>
            <div className="space-y-3">
              {product.specifications.purity && (
                <div>
                  <span className="font-medium text-gray-700">Puritate:</span>
                  <span className="text-gray-600 ml-2">{product.specifications.purity}</span>
                </div>
              )}
              {product.specifications.origin && (
                <div>
                  <span className="font-medium text-gray-700">Origine:</span>
                  <span className="text-gray-600 ml-2">{product.specifications.origin}</span>
                </div>
              )}
              <div>
                <span className="font-medium text-gray-700">Ambalare:</span>
                <ul className="mt-1 space-y-1">
                  {product.specifications.packaging.map((pack, index) => (
                    <li key={index} className="text-gray-600 text-sm ml-2">
                      • {pack}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Industrii</h2>
            <div className="space-y-3">
              {relatedIndustries.map((industry) => (
                <Link
                  key={industry.id}
                  to={`/industries/${industry.id}`}
                  className="block p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <span className="text-gray-900 font-medium">{industry.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Interesat de {product.name}?
          </h2>
          <p className="text-lg mb-6">
            Contactează-ne pentru o ofertă personalizată și consultanță specializată.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Solicită Ofertă
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
