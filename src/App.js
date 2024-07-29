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
import ProductPage from 'pages/ProductPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/product/",
      element: <ProductPage/>
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
