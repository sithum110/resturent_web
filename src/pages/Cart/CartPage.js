import React from 'react'
import classes from './CartPage.module.css'
import { useCart } from '../../hooks/useCart'
export default function CartPage() {
    const {cart}= useCart();
  return <div>{cart.items.length}</div>
}
