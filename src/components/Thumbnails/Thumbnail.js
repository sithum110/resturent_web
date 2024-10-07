// import React from 'react'
// import classes from './Thumbnail.module.css'
// import {Link} from 'react-router-dom'



// export default function Thumbnail({foods}) {
//   return( <ul className={classes.list}>
//     {
//       foods.map(
//         food=>(
//           <li key={food.id}>
//             <Link to={`/food/${food.id}`}>
//             <img 
//             className={classes.image}
//             src={'/foods/${food.imageUrl}'}
//             alt={food.name}
//             />
//             </Link>
//           </li>
          
//         )
          
//       )
      
//     }
//   </ul>
//   );
// }

import React from 'react';
import classes from './Thumbnail.module.css';
import { Link } from 'react-router-dom';

export default function Thumbnail({ foods }) {
  return (
    <ul className={classes.list}>
      {foods.map(food => (
        <li key={food.id}>
          <Link to={`/food/${food.id}`}>
            <img
              className={classes.image}
              // Fallback image if food.imageUrl is empty
              src={ `/foods/${food.imageUrl}` } 
              alt={food.name}
            />
            <p>{food.name}</p>
          </Link>
          <div className={classes.content}>
            <div className={classes.name}>{food.name}</div>
            <span 
            className={`${classes.favorite} ${
              food.favorite ? '' : classes.not}`}>
              @@
            </span>
            
          </div>
        </li>
      ))}
    </ul>
  );
}
