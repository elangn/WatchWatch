import React from "react";
import "../style/explore.css";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Filter from "./Filter";

const Explore = () => {
  const [movies, setMovies] = useState([]);
  const [ratedMovies, setRatedMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [ratedSeries, setRatedSeries] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=2782c32843fa2374f6ba6deaf81a8e4c&language=en-US&page=1",
    }).then(function (response) {
      console.log(response.data.results);
      setMovies(response.data.results);
    });

    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/top_rated?api_key=2782c32843fa2374f6ba6deaf81a8e4c&language=en-US&page=1",
    }).then(function (response) {
      console.log(response.data.results);
      setRatedMovies(response.data.results);
    });

    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/tv/popular?api_key=2782c32843fa2374f6ba6deaf81a8e4c&language=en-US&page=1",
    }).then(function (response) {
      console.log(response.data.results);
      setSeries(response.data.results);
    });

    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/tv/top_rated?api_key=2782c32843fa2374f6ba6deaf81a8e4c&language=en-US&page=1",
    }).then(function (response) {
      console.log(response.data.results);
      setRatedSeries(response.data.results);
    });
  }, []);

  return (
    <div className="body">
      <div className="container">
        <Filter />

        {/* breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
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
          </ol>
        </nav>

        {/* popular movies */}
        <h3 className="judul">Popular Movies</h3>
        <p> Top Popular movies pick by WatchWatch</p>

        <Swiper
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            468: {
              slidesPerView: 2,
              // spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              // spaceBetween: 10,
            },
            968: {
              slidesPerView: 4,
              // spaceBetween: 10,
            },
          }}
        >
          {movies.map((item, i) => {
            return (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="card card-popular-movies">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  />
                </div>
              </SwiperSlide>
            );
          })}

          <div className="tombol-r  ">
            <SliderButtons />
          </div>
        </Swiper>

        {/* rated movies */}
        <h3 className="judul mt-5">Top Rated Movies</h3>
        <p> Best Top Rated Movies of all time pick by WatchWatch</p>

        <Swiper
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            468: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            968: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {ratedMovies.map((item, i) => {
            return (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="card card-rated-movies">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  />
                </div>
              </SwiperSlide>
            );
          })}

          <div className="tombol-r ">
            <SliderButtons />
          </div>
        </Swiper>

        {/* popular Series */}
        <h3 className="judul mt-5">Popular Series</h3>
        <p> Top Popular series pick by WatchWatch</p>

        <Swiper
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            468: {
              slidesPerView: 2,
              // spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              // spaceBetween: 10,
            },
            968: {
              slidesPerView: 4,
              // spaceBetween: 10,
            },
          }}
        >
          {series.map((item, i) => {
            return (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="card card-popular-movies">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  />
                </div>
              </SwiperSlide>
            );
          })}

          <div className="tombol-r  ">
            <SliderButtons />
          </div>
        </Swiper>

        {/* Rated Series */}
        <h3 className="judul mt-5">Top Rated Series</h3>
        <p> Best Top Rated series of all time pick by WatchWatch</p>

        <Swiper
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            468: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            968: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {ratedSeries.map((item, i) => {
            return (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="card card-rated-movies">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  />
                </div>
              </SwiperSlide>
            );
          })}

          <div className="tombol-r  ">
            <SliderButtons />
          </div>
        </Swiper>
      </div>
      {/* bootstrap js */}
    </div>
  );
};

export default Explore;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-button">
      <button
        onClick={() => swiper.slidePrev()}
        className="btn   btn-sm btn-prv"
      >
        <i className="fa-solid fa-arrow-left  "></i>
      </button>

      <button
        onClick={() => swiper.slideNext()}
        className="btn  btn-sm btn-nxt"
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};
