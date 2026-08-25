import { Link } from "react-router";

function NotFound() {
  return (
    <section className="text-center py-16">
      <h2 className="text-4xl font-bold mb-4">
        Page Not Found
      </h2>

      <p className="text-slate-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="bg-slate-900 text-white px-6 py-3 rounded-lg"
      >
        Go Home
      </Link>
    </section>
  );
}

export default NotFound;