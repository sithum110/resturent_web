import React from 'react'
import classes from './CartPage.module.css'
import { useCart } from '../../hooks/useCart'
import Title from '../../components/Title/title'
import { Link } from 'react-router-dom'
export default function CartPage() {
    const {cart}= useCart();
  return <>
  <Title title="cart page" margin='1.5rem 0 0 2.5rem'/>

  {cart && cart.items.length > 0 && 
  <div className={classes.container}>
    <ul className={classes.list}>
        {cart.items.map(item => <li key={item.food.id}>
            <div>
                <img onScroll={`/foods/${item.food.imageUrl}`} alt={item.food.name} />
            </div>
            <div>
                <Link to={`/foods/${item.food.id}`}>{item.food.name}</Link>
            </div>
            <div>
                <select value={item.qunatity}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>
        </li>)}
    </ul>
  </div>
  }

  </>
}
