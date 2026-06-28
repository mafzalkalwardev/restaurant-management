import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Live restaurant command center</span>
          <h1>Welcome to Fast Ease Restaurant</h1>
          <p>
            A polished ordering and management experience for busy dining rooms:
            menu browsing, cart flow, order tracking, and operational audit logs.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" to="/menu">Explore Menu</Link>
            <Link className="secondary-action" to="/admin">Open Admin</Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="Restaurant dining room">
          <img src="/images/restaurant.jpg" alt="Restaurant dining room" />
          <div className="live-ticket">
            <span>Table 12</span>
            <strong>4 items firing</strong>
          </div>
        </div>
      </section>

      <section className="metrics-grid" aria-label="Restaurant metrics">
        <article>
          <span>Orders Today</span>
          <strong>128</strong>
          <small>+18% lunch rush</small>
        </article>
        <article>
          <span>Avg. Prep</span>
          <strong>11m</strong>
          <small>2m faster than target</small>
        </article>
        <article>
          <span>Menu Health</span>
          <strong>96%</strong>
          <small>Top sellers in stock</small>
        </article>
      </section>

      <section className="feature-band">
        <div>
          <span className="eyebrow">Built for repeat service</span>
          <h2>Everything your team checks between orders.</h2>
        </div>
        <div className="feature-list">
          <article>
            <h3>Guest Ordering</h3>
            <p>Clean menu cards, quick add-to-cart actions, and readable totals.</p>
          </article>
          <article>
            <h3>Kitchen Control</h3>
            <p>Simple order states keep the line moving during peak traffic.</p>
          </article>
          <article>
            <h3>Audit Trail</h3>
            <p>Important changes stay visible for managers reviewing service.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
