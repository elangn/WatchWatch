import React from 'react'

const Filter = () => {
  return (
    <div className="filter d-flex tes">
      <p className="me-2">
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
        </svg>
        Filter
      </p>
      <a href="popularMovies.html"><Link to="/popular-movies">Popular Movies</Link></a>
      <a href="ratedMovies.html"><Link to="/rated-movies">Top Rated Movies</Link></a>
      <a href="popularSeries.html"><Link to="/popular-series">Popular Series</Link> </a>
      <a href="ratedSeries.html"><Link to="/rated-series">Top Rated Series</Link></a>
    </div>
  )
}

export default Filter