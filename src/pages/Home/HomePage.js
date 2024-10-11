import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { getAll,search } from '../../service/foodService'; // Import service to get foods
import Thumbnail from '../../components/Thumbnails/Thumbnail'; // Import Thumbnail component
import Search from '../../components/Search/search'; // Import Search component



const initialState = { foods: [] }; // Initial state

const reducer = (state, action) => {
  switch (action.type) {
    case 'FOODS_LOADED':
      return { ...state, foods: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods } = state;
  const {searchTerm} = useParams();

  useEffect(() => {
    const loadedFoods = searchTerm ? search(searchTerm) : getAll();

    loadedFoods.then(foods => {
      dispatch({ type: 'FOODS_LOADED', payload: foods });
    });
  }, []);

  // Pass foods to Thumbnail component
  return (
    <>
      <Search />
      {foods.length > 0 ? (
        
        <Thumbnail foods={foods} />  // Ensure foods is passed as a prop
      ) : (
        <div>No foods available.</div>
      )}
    </>
  );
}


 