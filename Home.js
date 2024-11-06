import top from './components/top.png'
import book from './components/book.png'
import './components/App.css';
import back from './components/back.jpg'
import book1 from './components/book1.png'
import book2 from './components/book2.png'
import book3 from './components/book3.png'
import React from 'react';
import {Route, Routes,BrowserRouter,Link} from 'react-router-dom'

import Boo  from './Books';
import 'bootstrap/dist/css/bootstrap.min.css';
//Calling WOWjs
import WOW from 'wowjs';
import { render } from 'react-dom';
class Home extends React.Component {
  // Defining WOW 
  componentDidMount() {
    new WOW.WOW({
      live: false
  }).init();
  }
render(){
    return (
      <><div>
       
    
    
       
      
       

      </div><><div style={{ backgroundColor: "#74121D" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark"
        >
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="./Home.js"><img src={book} style={{ height: "90px", width: "80px", marginLeft: "30px" }}></img></a>
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" style={{ color: "white", fontSize: "25px", fontFamily: "cursive" }} Link to="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white", fontSize: "20px",marginTop:"5px",  fontFamily: "cursive" }} href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white", fontSize: "20px", marginTop:"5px",fontFamily: "cursive" }} href="/books">Search</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white", fontSize: "20px", marginTop:"5px",  fontFamily: "cursive" }} href="Books.js">About Us</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
    <li class="">
      <a   style={{ color: "red", fontSize: "20px", fontWeight: "bold"}}href="/login"class="nav-link">Admin Login</a>
    </li></ul>
          </div>
        </nav>
        <h1 style={{position:"absolute", color:"white"}}>Welcome to Online Book System</h1>
        <div class="jum" style={{ marginTop: "50px" }}>
          <img src={top} style={{ width: "100%", height: "100%" }}></img>
        </div>
      </div><div class="con" style={{ height: "500px" }}>
            <h1 style={{ textAlign: "center", color: "black", position:"relative",fontSize: "50px" }}>Best Seller Books</h1>
            <img src={back} style={{ width: "100%", height: "450px",  position: "absolute" }}></img>
            <div class="con" style={{ position: "relative" }}>
              <div class="row wow bounceInUp" style={{ marginLeft: "130px" }}>
                <div class="col-sm">
                  <img  className="wow fadeInDown img-thumbnail" src={book2} style={{ height: "300px", marginTop: "200px" }}></img>
                </div>
                <div class="col-sm">
                  <img className="wow fadeInDown img-thumbnail" src={book3} style={{ height: "300px", marginTop: "200px" }}></img>
                </div>
                <div class="col-sm">
                  <img className="wow fadeInDown img-thumbnail" src={book1} style={{ height: "300px", marginTop: "200px" }}></img>
                </div>
              </div>
            </div></div>  </></>
         );}}

         export default Home;