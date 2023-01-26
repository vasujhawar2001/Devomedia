import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import HomePage from 'scenes/homePage';
import NavBar from 'scenes/navbar';
import LoginPage from 'scenes/loginPage';
import ProfilePage from 'scenes/profilePage';
import { useState } from 'react';

function App() {

  return (
    <div className="app">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
