import React, { useState } from 'react'
import classes from './search.module.css'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function search() {
    const [term,setTerm]=useState('');
    const navigate = useNavigate();
    const {searchTerm} = useParams (();
  return (
    <div className={classes.container} style={{ margin }}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={e => setTerm(e.target.value)}
        onKeyUp={e => e.key === 'Enter' && search()}
        value={term}
      />
      <button onClick={search}>Search</button>
    </div>
  );
  
}

