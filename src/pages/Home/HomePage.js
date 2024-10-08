import React, { useEffect, useReducer } from 'react';
import { getAll } from '../../service/foodService'; // Import service to get foods
import Thumbnail from '../../components/Thumbnails/Thumbnail'; // Import Thumbnail component


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

  useEffect(() => {
    getAll().then(foods => {
      dispatch({ type: 'FOODS_LOADED', payload: foods });
    });
  }, []);

  // Pass foods to Thumbnail component
  return (
    <>
      {foods.length > 0 ? (
        <Thumbnail foods={foods} />  // Ensure foods is passed as a prop
      ) : (
        <div>No foods available.</div>
      )}
    </>
  );
}


 