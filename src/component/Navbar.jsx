import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import '../style/navbar.css'
import axios from 'axios';

const Navbar = () => {

  const isLogin = JSON.parse(localStorage.getItem('session'));
  const account = JSON.parse(localStorage.getItem('account'));
  

  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload()
  }

  const handleLogin = (e) => {
    e.preventDefault()
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/authentication/token/new', 
      params : { 
        api_key : '2782c32843fa2374f6ba6deaf81a8e4c'
      }
    })
    .then(function (response1) {
        axios({
          method: 'post',
          url: 'https://api.themoviedb.org/3/authentication/token/validate_with_login', 
          params : {
            api_key : '2782c32843fa2374f6ba6deaf81a8e4c'
          } , 
          data: {
            username: username,
            password: password,
            request_token: response1.data.request_token
          } 
          
        })
          .then(function (response2) {
            axios({
              method: 'post',
              url: 'https://api.themoviedb.org/3/authentication/session/new',
              params : {
                api_key : '2782c32843fa2374f6ba6deaf81a8e4c'
              },
              data : {
                request_token: response2.data.request_token
              }
            })
              .then(function (response3) {
                localStorage.setItem('session', JSON.stringify(response3.data.session_id));
  
                axios({
                  method: 'get',
                  url: 'https://api.themoviedb.org/3/account',
                  params : {
                    api_key : '2782c32843fa2374f6ba6deaf81a8e4c', 
                    session_id : response3.data.session_id
                  }
                })
                  .then(function (response4) {
                    localStorage.setItem('account', JSON.stringify(response4.data));
                    console.log(response4);
                    window.location.reload();
                  });
              });
          });
      
      });
  }

  


  return (
    <>
    {/* navbar */}
        <nav className="navbar navbar-expand-lg ">
    <div className="container">
      <a className="navbar-brand" href="#"> 
        <img src="img/WATCHWATCH.png" />
      </a>
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="tex">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link navmovies" aria-current="page">Home</Link> 
            
          </li>
          <li className="nav-item">
            <Link to="/explore" className="nav-link navmovies" aria-current="page">Explore</Link>
            
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-bookmark-check" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
              </svg>
              Subscription
            </a>
          </li>
        </ul>
        <button>
          <i className="dark fa-solid fa-sun" id="toggleDark" />
        </button>
        <br /> 

        {isLogin ? (<> <button onClick={handleLogout} type='button'> {account.name } </button></>) : (<>  <button type="button" className="btn btn-warning btn-sm mx-2 text-warning" data-bs-toggle="modal" data-bs-target="#signin">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
            <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
          </svg>
          <span> Sign in</span>
        </button> </>)}

        
      </div>
    </div>
  </nav>

    {/* modal signin */}
  <div className="modal fade" id="signin" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header d-flex flex-column">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Sign in</h1>
          <p className="mb-4">Hi, Enter your details to get sign in to your account</p>

          {/* form login */}
          <form>
            <div className="mb-3">
              <label  className="mb-2"> 
                <img src="img/password.png" /> Username
              </label>

              <input value={username} onChange={handleUsername} type="text" className="form-control email" id="username" name='username' aria-describedby="emailHelp" placeholder="input here " />

            </div>

            <div className="mb-3">
              <label  className="mb-2"> 
                <img src="img/padlock.png"  /> Passcode
              </label>

              <input value={password} onChange={handlePassword} type="password" className="form-control passcode" id="password" name='password' placeholder="input here" />
 
            </div>

            <p>dont have account ? <a href='#'> Signup </a></p>

            <button onClick={handleLogin} type="submit" value='submit' className="btn  btn-sm "> <img src="img/login.png" /> Sign in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Navbar