import React, { useState } from "react";
import MenuCard from "../components/MenuCard";
import "../styles/Menu.css";
import "../App.css";

export default function Menu({ addToCart }) {
  const [menuItems] = useState([
    { id: 1, name: "Burger", price: 5, image: "/images/burger.jpg", category: "Signature", description: "Seared patty, crisp greens, house sauce, toasted bun." },
    { id: 2, name: "Pizza", price: 8, image: "/images/pizza.jpg", category: "Stone Oven", description: "Melted mozzarella, tomato, basil, and blistered crust." },
    { id: 3, name: "Pasta", price: 7, image: "/images/pasta.jpg", category: "Comfort", description: "Silky sauce, herbs, parmesan, and a warm plated finish." },
    { id: 4, name: "Fries", price: 3, image: "/images/fries.jpg", category: "Side", description: "Golden fries with sea salt and a crisp exterior." },
  ]);

  return (
    <div className="page-container">
      <div className="section-heading">
        <span className="eyebrow">Chef-ready favorites</span>
        <h2>Our Menu</h2>
        <p>Bright food cards with quick actions for a faster guest ordering flow.</p>
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
