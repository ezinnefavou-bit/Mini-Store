import { Outlet, NavLink } from "react-router";

function Layout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-slate-900 text-white p-5">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Mini Store
          </h1>

          <div className="flex gap-6">
            <NavLink to="/">
              Home
            </NavLink>

            <NavLink to="/products">
              Products
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;