/* eslint-disable no-undef */
import React from "react";
//import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css";
var img1=require("../../images/testimonial-1.jpg");

const Testimonials = () => {
  return (
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-5 mb-5 mb-lg-0">
                    <div className="section-title position-relative mb-4">
                        <h6 class="d-inline-block position-relative text-secondary text-uppercase pb-2">Testimonial</h6>
                        <h1 class="display-4">What Say Our Students</h1>
                    </div>
                    <p class="m-0">Discover Nupium Academy: Redefining Learning in the Digital Age.Join a Legacy of Excellence Nupium Academy is more than an academy; 
it's a community. A community of thinkers, innovators, dreamers, and 
doers. By joining us, you're not just enrolling for a course; you're 
becoming part of a legacy.</p>
                </div>
                <div class="col-lg-7">
                    <div class="owl-carousel testimonial-carousel">
                        <div class="bg-light p-5">
                            <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
                            <p>An Investment in Your Future Choosing Nupium Academy is more than just an educational choice—it's an investment.</p>
                            <div class="d-flex flex-shrink-0 align-items-center mt-4">
                                <img className="img-fluid mr-4" src={img1} alt="don"></img>
                                <div>
                                    <h5>Student Name</h5>
                                    <span>Web Design</span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-light p-5">
                            <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
                            <p>Change Your Life, Change Your Career Imagine a future where you're at 
the forefront of technological innovations, shaping solutions, crafting 
strategies, and making decisions that impact industries and societies. </p>
                            <div class="d-flex flex-shrink-0 align-items-center mt-4">
                                <img class="img-fluid mr-4" src={img1} alt="don" />
                                <div>
                                    <h5>Student Name</h5>
                                    <span>Web Design</span>
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
export default Testimonials;
