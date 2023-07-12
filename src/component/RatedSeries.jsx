import React from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./Filter";

const RatedSeries = () => {
  const [movies, setMovies] = useState([]);
  const [Tmovies, setTmovies] = useState([]);

  const baseUrl = "https://api.themoviedb.org/3";

  useEffect(() => {
    for (let i = 1; i < 3; i++) {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/tv/top_rated",
        params: { language: "en-US", page: i },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzgyYzMyODQzZmEyMzc0ZjZiYTZkZWFmODFhOGU0YyIsInN1YiI6IjY0MjkwMDJmOTYwY2RlMDA3NzEzMTA0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FwyRYPMPSQTNMA4FRJwOZ514p8i3reNUHEqIvWUIf24",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setMovies((prev) => [...prev, ...response.data.results]);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, []);

  const TrailerMovie = (TrailerId) => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${TrailerId}/videos`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzgyYzMyODQzZmEyMzc0ZjZiYTZkZWFmODFhOGU0YyIsInN1YiI6IjY0MjkwMDJmOTYwY2RlMDA3NzEzMTA0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FwyRYPMPSQTNMA4FRJwOZ514p8i3reNUHEqIvWUIf24",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response);
        setTmovies(response.data.results[0].key);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="body">
      <div className="container">
        <Filter />

        {/* breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-return-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
                />
              </svg>
              Explore
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Top Rated Series
            </li>
          </ol>
        </nav>

        {/* rated series*/}
        <div className="popular-movies">
          <div className="row">
            {movies.map((item, i) => {
              return (
                <div
                  className="card col-6 col-md-4 col-lg-2 bg-transparent "
                  key={i}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    className="card-img-top"
                    alt="..."
                  />

                  <div className="card-body ">
                    {/*  */}
                    <button
                      className="btn btn-sm btn-success mb-2"
                      data-bs-toggle="modal"
                      data-bs-target={`#popular${item.id}`}
                    >
                      {" "}
                      Details
                    </button>
                    <button
                      className="btn btn-sm btn-warning "
                      data-bs-toggle="modal"
                      data-bs-target={`#Tpopular${item.id}`}
                      onClick={() => TrailerMovie(item.id)}
                    >
                      {" "}
                      Watch Trailer
                    </button>
                  </div>

                  <p className="tittle "> {item.name} </p>
                  <p className="rating">
                    {" "}
                    <i className="fa-solid fa-star"></i> {item.vote_average}
                  </p>

                  {/* Modal */}
                  <div
                    className="modal fade "
                    id={`popular${item.id}`}
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog w-100">
                      <div className="modal-content">
                        <div className="modal-header">
                          <div className="row">
                            <div className="col-sm-4 mb-4 text-center">
                              <img
                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                className="card-img-top w-100"
                                alt="..."
                              />
                            </div>

                            <div className="col-sm-8">
                              <h4 className="text-light justify-align-content-between">
                                {" "}
                                {item.name}
                              </h4>
                              <div className="d-flex w-100  justify-content-between">
                                <p className=""> {item.first_air_date}</p>
                                <p className="text-warning">
                                  {" "}
                                  <i className="fa-solid fa-star"></i>{" "}
                                  {item.vote_average}{" "}
                                </p>
                              </div>
                              <p> {item.overview} </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modal Trailer */}
                  <div
                    className="modal fade "
                    id={`Tpopular${item.id}`}
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog ">
                      <div className="modal-content">
                        <div className="modal-header">
                          <iframe
                            width="100%"
                            src={`https://www.youtube.com/embed/${Tmovies}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* bootstrap js */}
    </div>
  );
};

export default RatedSeries;
