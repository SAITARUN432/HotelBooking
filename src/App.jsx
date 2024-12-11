import React from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

import Home from './Components/Home';
import Confirmation from './Components/Confirmation';
import BookingComponent from "./Components/BookingComponent"
import './App.css'

function App() {
  const navigate = useNavigate();

  return (

   <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/confirmation' element={<Confirmation />} />
        <Route path="/confirmation/:id" element={<Confirmation />} />      
        <Route path="/bookingcomponent" element={<BookingComponent />} />      
      </Routes>
   </div>
  );
}

export default App
