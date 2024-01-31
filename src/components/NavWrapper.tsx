import { Link, Outlet } from "react-router-dom";

// * without code splitting

export default function NavWrapper() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </>
  );
}
