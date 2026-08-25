import { useParams, useNavigate } from "react-router";
import { products } from "../Data/Products";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">
          That product does not exist.
        </h2>

        <button
          onClick={() => navigate("/products")}
          className="bg-slate-900 text-white px-5 py-3 rounded-lg"
        >
          Back to products
        </button>
      </div>
    );
  }

  return (
    <section className="max-w-2xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="text-slate-500 mb-6"
      >
        ← Back
      </button>

      <div className="bg-white rounded-xl shadow p-6">
        <img
          src={`https://picsum.photos/seed/${product.id}/400`}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg mb-6 "
        />

        <h2 className="text-xl font-bold text-purple-700">
          {product.name}
        </h2>

        <p className="text-slate-600 mb-4">
          {product.description}
        </p>

        <p className="text-2xl font-bold">
          ₦{product.price.toLocaleString()}
        </p>
      </div>
    </section>
  );
}

export default ProductDetail;