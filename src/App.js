// import logo from './logo.svg';
// import Navbar from "./components/navbar"
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { appTheme } from './theme/theme';
import Navbar from './components/navbar';
import './App.css';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from 'pages/HomePage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    }
  ])

  return (

    <ThemeProvider theme={appTheme}>
      <Navbar/>
      <RouterProvider  router={router}/>
    </ThemeProvider> 
  );
}

export default App;
