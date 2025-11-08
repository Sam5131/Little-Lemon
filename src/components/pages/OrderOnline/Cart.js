// src/components/pages/OrderOnline/Cart.js

import React, { useState } from 'react';
import { useCart } from '../../../context/CartContext';

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const subtotal = getCartTotal();
  const tax = subtotal * 0.1; // 10% tax
  const deliveryFee = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + tax + deliveryFee;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    setShowCheckout(true);
  };

  const handleConfirmOrder = () => {
    alert('Order placed successfully! 🎉');
    clearCart();
    setShowCheckout(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="cart-backdrop" onClick={onClose}></div>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart-btn" onClick={onClose}>✕</button>
        </div>

        {!showCheckout ? (
          <>
            {/* Cart Items */}
            <div className="cart-items">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <span className="empty-cart-icon">🛒</span>
                  <p>Your cart is empty</p>
                  <button className="continue-shopping-btn" onClick={onClose}>
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      {item.image ? (
                        <img src={item.image} alt={item.name} />
                      ) : (
                        <div className="cart-item-placeholder">🍽️</div>
                      )}
                    </div>
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="cart-item-price">${item.price.toFixed(2)}</p>
                      <div className="quantity-controls">
                        <button
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          −
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      className="remove-item-btn"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                    >
                      🗑️
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Cart Summary */}
            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-summary">
                  <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Tax (10%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Delivery Fee:</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
                <button className="clear-cart-btn" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            )}
          </>
        ) : (
          // Checkout Form
          <div className="checkout-form">
            <h3>Checkout</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleConfirmOrder(); }}>
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" required placeholder="(555) 123-4567" />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Delivery Address *</label>
                <textarea required placeholder="123 Main St, Apt 4B" rows="3"></textarea>
              </div>
              <div className="form-group">
                <label>Delivery Instructions</label>
                <textarea placeholder="Ring doorbell, leave at door, etc." rows="2"></textarea>
              </div>
              <div className="form-group">
                <label>Payment Method *</label>
                <select required>
                  <option value="">Select payment method</option>
                  <option value="card">Credit/Debit Card</option>
                  <option value="cash">Cash on Delivery</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>
              
              <div className="checkout-total">
                <strong>Total: ${total.toFixed(2)}</strong>
              </div>

              <button type="submit" className="confirm-order-btn">
                Confirm Order
              </button>
              <button 
                type="button" 
                className="back-to-cart-btn"
                onClick={() => setShowCheckout(false)}
              >
                Back to Cart
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;