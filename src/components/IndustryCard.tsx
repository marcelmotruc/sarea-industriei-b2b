
import { Link } from "react-router-dom";
import { Industry } from "../data/mockData";

interface IndustryCardProps {
  industry: Industry;
}

const IndustryCard = ({ industry }: IndustryCardProps) => {
  return (
    <Link
      to={`/industries/${industry.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={industry.image}
        alt={industry.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {industry.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {industry.description}
        </p>
        <div className="text-blue-600 text-sm font-medium">
          {industry.products.length} produse disponibile →
        </div>
      </div>
    </Link>
  );
};

export default IndustryCard;
