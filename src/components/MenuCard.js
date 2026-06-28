import "../styles/MenuCard.css";

export default function MenuCard({ item, addToCart }) {
  return (
    <div className="menu-card">
      <div className="menu-card-media">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="menu-card-body">
        <span className="menu-tag">{item.category}</span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="menu-card-footer">
          <strong>${item.price}</strong>
          <button className="add" onClick={() => addToCart(item)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
