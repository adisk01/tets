import React from "react";
import Slides from "./Slides/Slides";
import Welcome from "./Welcome/Welcome";
import Testimonials from "./Testimonials/Testimonials.jsx";
import Faculties from "./Faculties/Faculties.jsx";
import Features from "./Features/Features.jsx";
import Courses from "./Courses/Courses.jsx";
import ProcessFlow from "./Process/ProcessFlow.jsx";
import Footer from "./Footer/Footer.jsx";
const Home=()=>{
    return (
        <>
        <Slides />
      <Welcome />
      <Features />
      <Faculties />
      <Courses />
      <Testimonials />
      <ProcessFlow />
      <Footer />
        </>
    )
}
export default Home;