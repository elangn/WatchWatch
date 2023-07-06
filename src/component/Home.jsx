import React from 'react'
import '../style/home.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Home = () => {

  const [movies,setMovies] = useState([]);
  const [series,setSeries] = useState([]);
  const [upcoming, setUpcoming] = useState([])


  useEffect(() => {

    // api poluar movie 
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/popular?api_key=2782c32843fa2374f6ba6deaf81a8e4c&language=en-US&page=1',
    })
    .then(function (response) {
      console.log(response)
      // const cuma4 = response.data.results.slice(0,4);
      // console.log(cuma4);
      setMovies(response.data.results.slice(0,4));
    }); 


    // api popular series

    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/tv/popular?api_key=2782c32843fa2374f6ba6deaf81a8e4c&language=en-US&page=1',
      })
    .then(function (response) {
      console.log(response.data.results)
      setSeries(response.data.results.slice(0,4));
    });


    // api upcoming movies

      const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/upcoming',
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzgyYzMyODQzZmEyMzc0ZjZiYTZkZWFmODFhOGU0YyIsInN1YiI6IjY0MjkwMDJmOTYwY2RlMDA3NzEzMTA0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FwyRYPMPSQTNMA4FRJwOZ514p8i3reNUHEqIvWUIf24'
    }
  };
  
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      setUpcoming(response.data.results)
    })
    .catch(function (error) {
      console.error(error);
    });

 


  }, [])

  return (
    <>
        <div className='body'>

  {/* alert */}
  <div className=" alert alert-warning alert-dismissible fade show" role="alert">
    <img src="img/waving-hand.png"  />
    <span>Welcome to WatchWatch</span>
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
 
  
  {/* jumbotron */}
  <div className="jumbotron d-flex justify-content-center align-items-center flex-column">
    <div className="jumbotron-box">
      <h2>Stream anywhere Millions of movies, <br /> TV shows and series </h2>
      <p>Get Best Experience streaming  with WatchWatch</p>
    </div>
    <div className="jumbotron-box-2">
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search Movies or Series" aria-label="Search" />
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
  <div className="container">

    {/* get-apps */}
    <div className="get-apps text-center">  
      <h4> Get WatchWatch</h4>
      <img src="img/apple tv 2.png"  />
      <img src="img/App_Store_(iOS).svg.png"  />
      <img src="img/playstore.jpeg"  /> 
      <img src="img/windows.jpg"  />
    </div>


    {/* upcoming  */}

    <div className="upcoming">
    <h4 className='text-light'> Upcoming Movies</h4>

  <Swiper
    onSwiper={(swiper) => console.log(swiper)}
    className='swiper'
    onSlideChange={() => console.log('slide change')}
    breakpoints={{
      0: {
        slidesPerView: 1,
      },
      576: {
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





  {upcoming.map((item, i ) => {
          return (
            <SwiperSlide key={i} className='swiper-slide'>
            <div className="card card-popular-movies"  >
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
              </div>

            </SwiperSlide>
         
          )
        })}

      <div className="tombol-r   text-center text-sm-end">
       <SliderButtons  />
      </div>
  </Swiper>
    </div>



    {/* popular  movies*/}

    <div className="popular">
      <div className="row d-flex justify-content-center">

        <div className="col-12 col-lg-3 col-md-12">
          <div className="box">
            <h4> Popular movies</h4>
            <p>browse the best popular movies right now only at WatchWatch </p>
            

             <Link to="/popular-movies" className="btn btn-outline-warning btn-sm"> 
              Popular Movies 
             </Link>
          </div>
        </div>

        { movies.map((item, i) => {
          return  ( 
            <div key={i} className="col-12 col-lg-2 col-md-3 col-sm-6">
              <div className="card film" data-bs-toggle="modal" data-bs-target={`#movies${item.id}`}>
                <div className="box">
                  <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text"> {item.original_title}</p>
                  </div>
                </div>
              </div>

               {/* Modal */}
              <div className="modal fade " id={`movies${item.id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog w-100">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div className="row">
                        <div className="col-4">
                            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top" alt="..." /> 
                            
                        </div>

                        <div className="col-8">
                        <h4 className='text-light justify-align-content-between'>  {item.title}</h4>
                        <div className='d-flex w-100  justify-content-between'>
                          <p className=''>  {item.release_date}</p>
                          <p className='text-warning'> <i className="fa-solid fa-star"></i> {item.vote_average}  </p>
                        </div>
                        <p> {item.overview} </p>
                        </div>
                      </div>
                    
                      </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
    
    {/* carousel  */}
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
      {/* indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
      </div>
      {/* inner  carousel*/}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="img/ipman.jpg" className="d-block w-100 " alt="..." />
          <div className="carousel-caption d-flex">
            
            <div className="carousel-caption-box d-flex  flex-column align-items-start justify-content-center ms-5 text-start">
              <h5>IP Man 4</h5>
              <p>Ip Man and his son encounter racial discrimination after travelling to the United States to seek a better life.</p>
              <button className="btn btn-outline-warning btn-sm">Watch </button>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <img src="img/ff3.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-flex">
            
            <div className="carousel-caption-box d-flex  flex-column align-items-start justify-content-center ms-5 text-start">
              <h5>Fast Furious 6</h5>
              <p>Hobbs is tasked with catching a team of mercenary drivers who manage to evade him every time. However, he enlists the help of Dominic and his team in exchange for full pardons for their past crimes.</p>
              <button className="btn btn-outline-warning btn-sm">Watch </button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="img/sangchi2.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-flex">
           
            <div className="carousel-caption-box d-flex  flex-column align-items-start justify-content-center ms-5 text-start">
              <h5>Shang-Chi</h5>
              <p>Shang-Chi, a martial artist, lives a quiet life after he leaves his father and the shadowy Ten Rings organisation behind. Years later, he is forced to confront his past when the Ten Rings attack him.</p>
              <button className="btn btn-outline-warning btn-sm">Watch </button>
            </div>
          </div>
        </div>
        {/* button  carousel*/}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    {/* popular  Series*/}
    <div className="popular popular-series">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-lg-3 col-md-12">
          <div className="box">
            <h4> Popular Series</h4>
            <p>browse the best popular series right now only at WatchWatch </p>
            

            <Link className="btn btn-outline-warning btn-sm" to="/popular-series"> Popular Series </Link>  
          </div>
        </div>

        {series.map((item, i) => {
          return (
          <div key={i} className="col-12 col-lg-2 col-md-3 col-sm-6 ">
              <div className="card" data-bs-toggle="modal" data-bs-target={`#series${item.id}`}>
                <div className="box">
                  <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                  <p className="card-text"> {item.name}</p>
                  </div>
                </div>
              </div>

               {/* Modal */}
               <div className="modal fade " id={`series${item.id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog w-100">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div className="row">
                        <div className="col-4">
                            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top" alt="..." /> 
                            
                        </div>

                        <div className="col-8">
                        <h4 className='text-light justify-align-content-between'>  {item.name}</h4>
                        <div className='d-flex w-100  justify-content-between'>
                          <p className=''>  {item.first_air_date}</p>
                          <p className='text-warning'> <i className="fa-solid fa-star"></i> {item.vote_average}  </p>
                        </div>
                        <p> {item.overview} </p>
                        </div>
                      </div>
                    
                      </div>
                    
                    
                  </div>
                </div>
              </div>
          </div>
          )
        })}
       
       
      </div>
    </div>

    {/* More */}
    <div className="more">
      <div className="box">
        <h4> More to Watch</h4>
        <p> WatchWatch help you select the perfect next show or movie to watch</p>
        <Link to="/explore" className="btn btn-outline-light btn-sm" role="button" >Explore </Link>
        <button className="btn btn-outline-light btn-sm"> Subcsriptions </button>
      </div>
    </div>


    
    
  </div>
</div>

    </>
  )
}

export default Home


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