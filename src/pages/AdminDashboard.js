import { Link } from "react-router-dom";
import "../App.css";

export default function AdminDashboard() {
  return (
    <div className="page-container">
      <div className="section-heading">
        <span className="eyebrow">Manager workspace</span>
        <h2>Admin Dashboard</h2>
        <p>Jump into the operational views your team needs during service.</p>
      </div>

      <div className="admin-grid">
        <Link className="admin-card" to="/admin/menu">
          <span>Menu</span>
          <strong>Menu Management</strong>
          <small>Update availability and pricing.</small>
        </Link>
        <Link className="admin-card" to="/admin/orders">
          <span>Orders</span>
          <strong>Order Management</strong>
          <small>Move tickets through service.</small>
        </Link>
        <Link className="admin-card" to="/admin/audit">
          <span>Audit</span>
          <strong>Audit Log</strong>
          <small>Review recent operational changes.</small>
        </Link>
      </div>
    </div>
  );
}
