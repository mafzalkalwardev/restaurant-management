import React, { useState } from "react";
import "../App.css";

export default function MenuManagement() {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Burger", price: 5 },
    { id: 2, name: "Pizza", price: 8 },
  ]);

  const deleteItem = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  return (
    <div className="page-container">
      <div className="section-heading">
        <span className="eyebrow">Admin</span>
        <h2>Menu Management</h2>
        <p>Keep the short list current during service.</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <button className="delete" onClick={() => deleteItem(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
