import { Link } from "react-router";
import { products } from "../Data/Products";
function Products() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
          >
            <img
              src={`https://picsum.photos/seed/${product.id}/400`}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h3 className="text-xl font-bold text-purple-700">
              {product.name}
            </h3>

            <p className="text-slate-600 mt-2">
              {product.description}
            </p>

            <p className="font-bold text-lg mt-4">
              ₦{product.price.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Products;