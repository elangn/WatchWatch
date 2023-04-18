import React from 'react'
import '../style/home.css'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Home = () => {

  const [movies,setMovies] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/popular?api_key=2782c32843fa2374f6ba6deaf81a8e4c&language=en-US&page=1',
      })
      .then(function (response) {
        console.log(response.data.results)
      
      setMovies(response.data.results);
      });
  }, [])

  return (
    <>
        <div className='body'>
  {/* alert */}
  <div className=" alert alert-warning alert-dismissible fade show" role="alert">
    <img src="img/waving-hand.png" alt />
    <span>Welcome to WatchWatch</span>
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  
  {/* modal signin */}
  {/* <div className="modal fade" id="signin" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header d-flex flex-column">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Sign in</h1>
          <p className="mb-4">Hi, Enter your details  to get sign in to your account</p>
          <form>
            <div className="mb-3">
              <label htmlFor className="mb-2"> 
                <img src="img/password.png" alt /> Email
              </label>
              <input type="email " className="form-control email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="input here " />
            </div>
            <div className="mb-3">
              <label htmlFor className="mb-2"> 
                <img src="img/padlock.png" alt /> Passcode
              </label>
              <input type="password" className="form-control passcode" id="exampleInputPassword1" placeholder="input here" />
            </div>
            <p>don't have account ? <a href> Signup </a></p>
            <button type="submit" className="btn  btn-sm "> <img src="img/login.png" /> Sign in</button>
          </form>
        </div>
      </div>
    </div>
  </div> */}

  
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
      <img src="img/apple tv 2.png" alt className />
      <img src="img/App_Store_(iOS).svg.png" alt />
      <img src="img/playstore.jpeg" alt /> 
      <img src="img/windows.jpg" alt />
    </div>

    {/* popular Movies */}
    <div className="popular">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-lg-3 col-md-12">
          <div className="box">
            <h4> Popular movies</h4>
            <p>browse the best popular movies right now only at WatchWatch </p>
            <a href="popularMovies.html" className="btn btn-outline-warning btn-sm"> Browse </a>
          </div>
        </div>
        <div className="col-12 col-lg-2 col-md-3 col-sm-6">
          <div className="card film">
            <div className="box">
              <img src="img/plane.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text"> Plane</p>
                <p className="card-text"> 2023. Action/Thriller</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-2 col-md-3 col-sm-6">
          <div className="card">
            <div className="box">
              <img src="img/spiderman.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text"> Spiderman : No way Home</p>
                <p className="card-text"> 2021. Action/ Adventure</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-12 col-lg-2 col-md-3 col-sm-6">
          <div className="card">
            <div className="box">
              <img src="img/black-adam.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text"> Black Adam</p>
                <p className="card-text">  2022. Action/ Adventure</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-2 col-md-3 col-sm-6">
          <div className="card">
            <div className="box">
              <img src="img/noah.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text"> Noah</p>
                <p className="card-text"> 2014. Adventure/ Fantasy
                </p></div>
            </div>
          </div>
        </div>
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
            <img src="img/ipman4.jpg" alt />
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
            <img src="img/ff6.jpg" alt />
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
            <img src="img/sangchi3.jpg_large" alt />
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
            <a href="PopularSeries.html" className="btn btn-outline-warning btn-sm"> Browse </a>
          </div>
        </div>
        <div className="col-12 col-lg-2 col-md-3 col-sm-6 ">
          <div className="card">
            <div className="box">
              <img src="img/korean.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text"> Plane</p>
                <p className="card-text"> 2023. Action/Thriller</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-2 col-md-3 col-sm-6">
          <div className="card">
            <div className="box">
              <img src="img/digimon.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text"> Spiderman : No way Home</p>
                <p className="card-text"> 2021. Action/ Adventure</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-2 col-md-3 col-sm-6">
          <div className="card">
            <div className="box">
              <img src="img/narcos.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text"> Black Adam</p>
                <p className="card-text">  2022. Action/ Adventure</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-2 col-md-3 col-sm-6">
          <div className="card">
            <div className="box">
              <img src="img/yourname.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text"> Noah</p>
                <p className="card-text"> 2014. Adventure/ Fantasy
                </p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* More */}
    <div className="more">
      <div className="box">
        <h4> More to Watch</h4>
        <p> WatchWatch help you select the perfect next show or movie to watch</p>
        {/* <button class="btn btn-outline-light btn-sm"> Explore</button> */}
        <a href="explore.html" className="btn btn-outline-light btn-sm" role="button">Explore</a>
        <button className="btn btn-outline-light btn-sm"> Subcsriptions </button>
      </div>
    </div>
    {/* footer */}
    <div className="footer text-center">
      <div className="sosmed">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
        </span>
      </div>
      <p className="footer-teks mt-4"> © 2023, WatchWatch . All right reserved</p>
    </div>
  </div>
</div>

    </>
  )
}

export default Home