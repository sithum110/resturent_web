import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart';
import classes from './header.module.css'
export default function Header() {
  const user ={
    name: "John Doe"
  };
 
 
  const {cart}= useCart();


  const logout = () => {
    console.log("logout");
  }

  return (
    <header className={classes.header} >
      <div className={classes.container}>
      <Link to="/" className={classes.logo}>
        resturent_APPPP
        </Link>
        <nav>
            <ul>
                {
                    user ?
                    (<li className={classes.menu_container}>
                        <Link to="/profile" >{user.name}</Link>
                        <div className={classes.menu}>
                            <Link to="/profile">Profile</Link>
                            <Link to="/orders">Orders</Link>
                            <a onClick={logout}>logout</a>
                        </div>
                        </li>):(<Link to="/login">Login</Link>)
                  

                }
                <Link to="/cart">cart
                {cart.totalCount > 0 && <span className={classes.cart_count} >{cart.totalCount}</span>}
                </Link>
            </ul>
        </nav>
       
       </div>
    </header>
    

  );
}
