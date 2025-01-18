import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { getAll,getAllTags,search } from '../../service/foodService'; // Import service to get foods
import Thumbnail from '../../components/Thumbnails/Thumbnail'; // Import Thumbnail component
import Search from '../../components/Search/search'; // Import Search component
import Tags from '../../components/Tags/Tags'; // Import Tags component
import NotFound from '../../components/notFound/NotFound'; // Import NotFound component



const initialState = { foods: [],tags:[] }; // Initial state

const reducer = (state, action) => {
  switch (action.type) {
    case 'FOODS_LOADED':
      return { ...state, foods: action.payload };
      case 'TAGS_LOADED':
      return { ...state, tags: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods,tags } = state;
  const {searchTerm,tag} = useParams();

  useEffect(() => {

    getAllTags().then(tags => {
      dispatch({ type: 'TAGS_LOADED', payload: tags });
    });
    const loadedFoods = tag ? getAllTags(tag) : searchTerm ? search(searchTerm) : getAll();

    loadedFoods.then(foods => {
      dispatch({ type: 'FOODS_LOADED', payload: foods });
    });
  }, [searchTerm,tag]);

  // Pass foods to Thumbnail component
  return (
    <>
      <Search />
      <Tags tags={tags}/>
      {foods.length === 0 && <NotFound/>}

        
        <Thumbnail foods={foods} />  
      
    </>
  );
}


 