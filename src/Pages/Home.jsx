import { Link } from "react-router";

function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center bg-violet-500 rounded-2xl px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Welcome to Mini Store
      </h2>

      <p className="text-white/90 text-lg mb-8 max-w-xl">
        Find simple products at honest prices.
      </p>

      <Link
        to="/products"
        className="inline-block bg-purple-900 hover:bg-purple-950 text-white font-semibold px-7 py-3 rounded-lg shadow-lg transition duration-300"
      >
        View Products
      </Link>
    </section>
  );
}

export default Home;