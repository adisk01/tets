import "./Welcome.css";
import React from "react";
var img=require("../../images/1007320043_627395c3d8.jpg");
const Welcome = () => {
  return (
    <div class="container-fluid py-1">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-7 mb-5 mb-lg-0">
                    <div class="section-title position-relative mb-4">
                        <h6 class="d-inline-block position-relative text-secondary text-uppercase pb-2">Why Choose Us?</h6>
                        <h1 class="display-4">Perks Of Nupium Technologies</h1>
                    </div>
                    <p class="mb-4 pb-2 text">Curates by the Best: Our curriculum isn't just academically 
rigorous—it's crafted by industry leaders, celebrity teachers, 
renowned speakers, and innovators. This means you're not just 
learning theories, but you're absorbing wisdom distilled from years 
of hands-on experience at the pinnacle of their fields.
</p>
                    <div class="d-flex mb-3">
                        <div class="btn-icon bg-primary mr-4">
                            <i class="fa fa-2x fa-graduation-cap text-white"></i>
                        </div>
                        <div class="mt-n1">
                            <h4>Standalone Introduction Programme</h4>
                            <p>Course Material + Career Advice + Video Tutorials [8 Hrs in 4 Sessions]</p>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="btn-icon bg-secondary mr-4">
                            <i class="fa fa-2x fa-certificate text-white"></i>
                        </div>
                        <div class="mt-n1">
                            <h4>Diploma in Emerging Technologies</h4>
                            <p>Diploma [After completion of 1 year]
                            Total 12 Certificates+Career Advice+Video Tutorials+Placement Support</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="btn-icon bg-warning mr-4">
                            <i class="fa fa-2x fa-book-reader text-white"></i>
                        </div>
                        <div class="mt-n1">
                            <h4>Degree in Web 3 Technologies</h4>
                            <p class="m-0">Diploma [After completion of 2 years]
                            Total 12 Certificates+Course Material+Video Tutorials+Placement Support</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 iMage" style={{minHeight: "500px"}}>
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100" src={img} style={{objectFit: "cover"}} alt="don" />
                    </div>
                </div>
            </div>
        </div>
    </div>
        
  );
};
export default Welcome;
