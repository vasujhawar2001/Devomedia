import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import HomePage from 'scenes/homePage';
import NavBar from 'scenes/navbar';
import LoginPage from 'scenes/loginPage';
import ProfilePage from 'scenes/profilePage';
import { useState } from 'react';
import { useMemo } from 'react';
import {useSelector} from "react-redux";
import {CssBaseline, ThemeProvider} from "@mui/material"
import {createTheme} from "@mui/material/styles";
import { themeSettings } from 'theme';

function App() {
  const mode = useSelector((state)=> state.mode )
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
     <BrowserRouter>
     <ThemeProvider theme={theme}>
     <CssBaseline/>
     <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
     </Routes>
     </ThemeProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
