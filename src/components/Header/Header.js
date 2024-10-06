import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
export default function Header() {
  const user ={
    name: "John Doe"
  };
  const cart = {
    totalCount :10,
  };

  return (
    <header className={classes.header} >
      <div className={classes.container}>
      <Link to="/" className={classes.logo}>
        hello
        </Link>
        <nav>
            <ul>
                {
                    user ?
                    (<li className={classes.menu_container}>
                        <link to="/profile" >{user.name}</link>
                        <div className={classes.menu}>
                            <Link to="/profile">Profile</Link>
                            <Link to="/orders">Oders</Link>
                            <a Link to="/logout">Logout</a>
                        </div>
                        </li>):(<Link to="/login">Login</Link>)
                  

                }
            </ul>
        </nav>
       </div>
    </header>
    

  );
}
