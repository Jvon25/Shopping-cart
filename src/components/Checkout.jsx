import React from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePay = () => {
    alert("Payment Successful!");
    setCart([]); // Reset cart
    navigate("/"); // Redirect to Product List
  };

  return (
    <div className="checkout-container">
      <h1>Order Summary</h1>
      <div className="checkout-card">
        <div className="checkout-items">
          {cart.map((item) => (
            <div key={item.id} className="checkout-item">
              <img src={item.images[0]} alt={item.title} />
              <div>
                <h2>{item.title}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout-footer">
          <h3>Total: ${total.toFixed(2)}</h3>
          <div className="checkout-buttons">
            <button className="cancel-button" onClick={() => navigate("/cart")}>
              Cancel
            </button>
            <button className="pay-button" onClick={handlePay}>
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
