import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link className="brand" to="/">
          <span className="brand-mark">FE</span>
          <span>
            <strong>Fast Ease</strong>
            <small>Restaurant Ops</small>
          </span>
        </Link>
      </div>
      <nav className="header-right">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  );
}
