import React from "react";
//import FacultyCard from "./FacultyCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Faculties.css";
var dp=require("../../images/1007129816_e794419615.jpg");
const Faculties=()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll:1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        autoplay:true,
        autoplaySpeed:2000
      };
    return(
        <div class="container-fluid team py-5">
            <div class="container py-5">
                <div class="mx-auto text-center wow" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                    <h1 class="mb-5">Experienced industry faculties.</h1>
                </div>
                    <Slider {...settings}>
                    <div class="wow fadeIn" data-wow-delay="0.3s">
                        <div class="team-item border border-primary img-border-radius overflow-hidden">
                            <img src={dp} class=" w-100" alt="" />
                            <div class="team-icon d-flex align-items-center justify-content-center">
                                <a class="share btn btn-primary btn-md-square text-white rounded-circle me-3" href="#index.html"><i class="fas fa-share-alt"></i></a>
                                <a class="share-link btn btn-primary btn-md-square text-white rounded-circle me-3" href="#index.html"><i class="fab fa-facebook-f"></i></a>
                                <a class="share-link btn btn-primary btn-md-square text-white rounded-circle me-3" href="#index.html"><i class="fab fa-twitter"></i></a>
                                <a class="share-link btn btn-primary btn-md-square text-white rounded-circle" href="#index.html"><i class="fab fa-instagram"></i></a>
                            </div>
                            <div class="team-content text-center py-3">
                                <h4 class="text-primary">Linda Carlson</h4>
                                <p class="text-muted mb-2">English Teacher</p>
                            </div>
                        </div>
                    </div>
                    <div class="wow fadeIn" data-wow-delay="0.3s">
                        <div class="team-item border border-primary img-border-radius overflow-hidden">
                            <img src={dp} class=" w-100" alt="" />
                            <div class="team-icon d-flex align-items-center justify-content-center">
                                <a class="share btn btn-primary btn-md-square text-white rounded-circle me-3" href="#index.html"><i class="fas fa-share-alt"></i></a>
                                <a class="share-link btn btn-primary btn-md-square text-white rounded-circle me-3" href="#index.html"><i class="fab fa-facebook-f"></i></a>
                                <a class="share-link btn btn-primary btn-md-square text-white rounded-circle me-3" href="#index.html"><i class="fab fa-twitter"></i></a>
                                <a class="share-link btn btn-primary btn-md-square text-white rounded-circle" href="#index.html"><i class="fab fa-instagram"></i></a>
                            </div>
                            <div class="team-content text-center py-3">
                                <h4 class="text-primary">Linda Carlson</h4>
                                <p class="text-muted mb-2">English Teacher</p>
                            </div>
                        </div>
                    </div>
                    <div class="wow fadeIn" data-wow-delay="0.5s">
                        <div class="team-item border border-primary img-border-radius overflow-hidden">
                            <img src={dp} class=" w-100" alt="" />
                            <div class="team-icon d-flex align-items-center justify-content-center">
                                <a class="share btn btn-primary btn-md-square text-white rounded-circle me-3" href="#index.html"><i class="fas fa-share-alt"></i></a>
                                <a class="share-link btn btn-primary btn-md-square text-white rounded-circle me-3" href="#index.html"><i class="fab fa-facebook-f"></i></a>
                                <a class="share-link btn btn-primary btn-md-square text-white rounded-circle me-3" href="#index.html"><i class="fab fa-twitter"></i></a>
                                <a class="share-link btn btn-primary btn-md-square text-white rounded-circle" href="#index.html"><i class="fab fa-instagram"></i></a>
                            </div>
                            <div class="team-content text-center py-3">
                                <h4 class="text-primary">Linda Carlson</h4>
                                <p class="text-muted mb-2">English Teacher</p>
                            </div>
                        </div>
                    </div>
                    <div class="wow fadeIn" data-wow-delay="0.7s">
                        <div class="team-item border border-primary img-border-radius overflow-hidden">
                            <img  src={dp} class="w-100" alt="" />
                            <div class="team-icon d-flex align-items-center justify-content-center">
                                <a class="share btn btn-primary btn-md-square text-white rounded-circle me-3" href="#index.html"><i class="fas fa-share-alt"></i></a>
                                <a class="share-link btn btn-primary btn-md-square text-white rounded-circle me-3" href="#index.html"><i class="fab fa-facebook-f"></i></a>
                                <a class="share-link btn btn-primary btn-md-square text-white rounded-circle me-3" href="#index.html"><i class="fab fa-twitter"></i></a>
                                <a class="share-link btn btn-primary btn-md-square text-white rounded-circle" href="#index.html"><i class="fab fa-instagram"></i></a>
                            </div>
                            <div class="team-content text-center py-3">
                                <h4 class="text-primary">Linda Carlson</h4>
                                <p class="text-muted mb-2">English Teacher</p>
                            </div>
                        </div>
                    </div>
                    </Slider>
                    </div>
                </div>
    )
}
export default Faculties;