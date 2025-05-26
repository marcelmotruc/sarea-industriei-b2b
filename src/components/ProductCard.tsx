
import { Link } from "react-router-dom";
import { Product } from "../data/mockData";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-blue-600 mb-2">{product.category}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {product.applications.slice(0, 2).map((app, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
            >
              {app}
            </span>
          ))}
          {product.applications.length > 2 && (
            <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              +{product.applications.length - 2} altele
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
