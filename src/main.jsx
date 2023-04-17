import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './component/Home'
import Explore from './component/Explore'
import PopularMovies from './component/PopularMovies'
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import Navbar from './component/Navbar'
import RatedMovies from './component/RatedMovies'
import PopularSeries from './component/PopularSeries'
import RatedSeries from './component/RatedSeries'

const router = createBrowserRouter([
  {
  path: "/", 
   element: <>
  <Navbar/>
  
  <Outlet/>
  </>,
  errorElement: <p>Page Not Found</p> , 
  children: [
    {
    path: "/",  element: <Home />,
    } , 
    {
      path: "/explore",
      element: 
      <>
      <Explore/>
      </>,
      } , 
      {
        path: "/popular-movies",
        element: <PopularMovies/>,
      }, 
      {
        path: "/rated-movies",
        element: <RatedMovies/>,
      }, 
      {
        path: "/popular-series",
        element: <PopularSeries/>,
      },
      {
        path: "/rated-series",
        element: <RatedSeries/>
      },
      
      
    ],
    
  } , 
  
  ]);
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
