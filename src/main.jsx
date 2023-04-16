import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './component/Home'
import Explore from './component/Explore'
import PopularMovies from './component/PopularMovies'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
  path: "/",  element: <>
  <Home/>
  </>,
  errorElement: <p>Page Not Found</p>
  } , 
  {
    path: "/explore",  element: <>
    <Explore/>
    </>,
    errorElement: <p>Page Not Found</p>
    } , 
    {
      path: "/popular-movies",  element: <>
      <PopularMovies/>
      </>,
      errorElement: <p>Page Not Found</p>
      }
  ]);
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
