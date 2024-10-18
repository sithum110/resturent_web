import React from 'react'
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import FoodPage from './pages/Food/FoodPage';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:searchTerm" element={<HomePage />} />
        <Route path="/tag/:tag" element={<HomePage />} />
        <Route path="/foods/:id" element={<FoodPage />} />
    </Routes>
    
  )
}
