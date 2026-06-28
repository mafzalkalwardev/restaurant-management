import React from "react";
import "../App.css";
import "../styles/Cart.css";

export default function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((t, i) => t + i.price, 0);

  return (
    <div className="page-container">
      <div className="section-heading">
        <span className="eyebrow">Guest checkout</span>
        <h2>Your Cart</h2>
        <p>Review selected dishes before sending the order to the kitchen.</p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-state">
          <strong>Your cart is empty.</strong>
          <p>Add a few menu items and they will appear here with your total.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button className="delete" onClick={() => removeFromCart(index)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}

            <tr>
              <td><strong>Total</strong></td>
              <td><strong>${totalPrice}</strong></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
