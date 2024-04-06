/* eslint-disable no-undef */
import React, { Component } from "react";
import "./Navbar.css";
var logo = require("../../images/Color logo with background (1).png");
class Navbar extends Component{
  state={clicked:false};
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
  return (
    <>
        <div class="container-fluid bg-dark">
        <div class="row py-2 px-lg-5">
            <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center text-white">
                    <small><i class="fa fa-phone-alt mr-2"></i>+012 345 6789</small>
                    <small class="px-3">|</small>
                    <small><i class="fa fa-envelope mr-2"></i>info@example.com</small>
                </div>
            </div>
            <div class="col-lg-6 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                    <a class="text-white px-2" href="#index.html">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="text-white px-2" href="https://twitter.com/NupiumAcademy" target="__blank">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="text-white px-2" href="https://www.linkedin.com/showcase/nupium-academy/about/" target="__blank">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="text-white px-2" href="https://www.instagram.com/nupium_academy/" target="__blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a class="text-white pl-2" href="#index.html">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <nav onClick={this.handleClick}>
      <div className="nav">
      <a href="/">
        <img style={{width:"12rem",height:"auto"}} src={logo} alt="logo"/>
      </a>
        <ul id="navbar" className={this.state.clicked?"#navbar active":"#navbar"}>
          <li>
            <a href="index.html"><b>PROGRAMMES</b></a>
          </li>
          <li>
            <a href="/signup"><b>REGISTRATION</b></a>
          </li>
          <li>
            <a href="/login"><b>LOGIN</b></a>
          </li>
          <li>
            <a href="/dashboard"><b>DASHBOARD</b></a>
          </li>
        </ul>
        <div id="mobile" onClick={this.handleClick}>
        <i id="bar" className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
      </div>
      </div>
    </nav>
    </>
  );}
  }
export default Navbar;