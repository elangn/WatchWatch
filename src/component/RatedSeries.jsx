import React from 'react'
import { Outlet, Link } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from 'react'

const RatedSeries = () => {

  const [movies,setMovies] = useState([]);
  const baseUrl = 'https://api.themoviedb.org/3'


  useEffect(() => {
    
    axios.get(`${baseUrl}/tv/top_rated?api_key=2782c32843fa2374f6ba6deaf81a8e4c&language=en-US&page=1`)
    .then(function (response) {
      console.log(response)
      // const cuma4 = response.data.results.slice(0,4);
      // console.log(cuma4);
      setMovies(response.data.results);
    }) 
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }, [])

  return (
    <div className='body'>
  
  <div className="container">

   

    {/* Filter */}
    <div className="filter d-flex tes">
      <p className="me-2">
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
        </svg>
        Filter
      </p>
     <Link to="/popular-movies">Popular Movies</Link>
     <Link to="/rated-movies">Top Rated Movies</Link>
     <Link to="/popular-series">Popular Series</Link> 
     <Link to="/rated-series">Top Rated Series</Link>
    </div>

    {/* breadcrumb */}
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item " aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-return-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
          </svg>
          Explore
        </li>
        <li className="breadcrumb-item active" aria-current="page">Top Rated Series</li>
      </ol>
    </nav>

    {/* rated series*/}
    <div className="popular-movies">
      <div className="row">

      {/* { movies.map((item, i) => {
          return  ( 
            <div className="col-6 col-md-4 col-lg-2" key={i}>
          <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top" alt="..." />
        </div>
          )
        })} */}

        { movies.map((item, i) => {
          return  ( 
           <div className="card col-6 col-md-4 col-lg-2 bg-transparent " key={i}>
              <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top" alt="..." />
              <div className="card-body ">
              <p className='tittle '> {item.name} </p>  
             
              <p className='rating'>  <i className="fa-solid fa-star"></i> {item.vote_average}</p>
              </div>
            </div>

          )
        })}
        
      </div>
    </div>

   
  </div> 
  {/* bootstrap js */}
</div>

  )
}

export default RatedSeries