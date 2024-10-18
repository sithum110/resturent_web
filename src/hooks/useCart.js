import React, { createContext, useContext, useState } from 'react';
import { sample_foods } from '../data';

const CartContext = createContext(null);

export default function CartProvider({ children }) { // Accept children as a prop
  const [cartItems, setCartItems] = useState(
    sample_foods
      .slice(1, 4)
      .map(food => ({ food, quantity: 1, price: food.price }))
  );
  
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  // Here we calculate totalPrice and totalCount based on cartItems
  // Example logic to calculate total price and count (can be more complex)
  React.useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    const count = cartItems.reduce((count, item) => count + item.quantity, 0);
    setTotalPrice(total);
    setTotalCount(count);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cart: { items: cartItems, totalPrice, totalCount } }}>
      {children} {/* Render the children */}
    </CartContext.Provider>
  );
}

// Fix useCart to correctly use the CartContext
export const useCart = () => useContext(CartContext);

