import React from "react";
import "./Slides.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
var img2 = require("../../images/Screenshot (260).png");
var img1 = require("../../images/Screenshot (261).png");
var img3 = require("../../images/1007320043_627395c3d8.jpg");
var img4 = require("../../images/1012212859_01547e3f17.jpg");
const Slides = () => {
  return (
    <div className="Slides">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
      >
        <div>
          <img style={{ height: "66vh" }} src={img1} alt="slide" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img style={{ height: "66vh" }} src={img2} alt="slide" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img style={{ height: "66vh" }} src={img3} alt="slide" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img style={{ height: "66vh" }} src={img4} alt="slide" />
          {/* <p className="legend">Legend 4</p> */}
        </div>
      </Carousel>
      <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-5 mb-5 mb-lg-0 iMage" style={{minHeight: "500px"}}>
                  
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100" src={img1} style={{objectFit: "cover"}} alt="don"></img>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="section-title position-relative mb-4">
                        <h6 class="d-inline-block position-relative text-secondary text-uppercase pb-2">About Us</h6>
                        <h1 class="display-6">Welcome to Nupium Academy: Your Gateway to the Future</h1>
                    </div>
                    <p className="text">Are you curious about the technologies that are shaping our world and 
eager to be at the forefront of this revolution? Look no further. Nupium 
Academy is your pivotal step into the universe of Web3, Artificial 
Intelligence (AI), and the Internet of Things (IoT).Why Nupium Academy? At Nupium Academy, we're not just another IT 
school. We're an institution dedicated to equipping you with the 
knowledge and skills required to navigate and thrive in the rapidly 
evolving landscape of emerging technologies.Our courses are meticulously 
designed to prepare you for both semi-technical and technical roles 
within the Web3, AI, and IoT sectors.Whether you're a novice with a budding interest 
or a professional looking to up skill, Nupium Academy is committed to 
fostering your journey.</p>
                    <div className="info row pt-3 mx-0 ">
                        <div class="col-3 px-0">
                            <div class="bg-success text-center p-4">
                                <h2 class="text-white" data-toggle="counter-up">2020</h2>
                                <h5 class="text-white">Founded</h5>
                            </div>
                        </div>
                        <div class="col-3 px-0">
                            <div class="bg-primary text-center p-4">
                                <h2 class="text-white" data-toggle="counter-up">7500+</h2>
                                <h5 class="text-white">Candidates</h5>
                            </div>
                        </div>
                        <div class="col-3 px-0">
                            <div class="bg-secondary text-center p-4">
                                <h2 class="text-white" data-toggle="counter-up">125+</h2>
                                <h5 class="text-white">TeamSize</h5>
                            </div>
                        </div>
                        <div className="hide col-3 px-0">
                            <div class="bg-warning text-center p-4">
                                <h2 class="text-white" data-toggle="counter-up">Training</h2>
                                <h5 class="text-white">Globally</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};
export default Slides;
