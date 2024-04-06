import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Features.css";
import data from "./Features";
//import { Carousel } from "react-responsive-carousel";

import Card from "react-bootstrap/Card";
const Features = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll:1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  return (
    <div className="features-container">
      <Slider {... settings}>
        <Card >
        <Card.Body>
        
<svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"50%"}} height="23" width="23" viewBox="0 0 576 512"><path opacity="1" fill="#1E3050" d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"/></svg>
          <Card.Title style={{color:"rgb(0, 183, 255)",fontWeight:"700",fontStyle:"bold",fontSize:"3vh",textAlign:"center"}}>{data[0].title}</Card.Title>
          <Card.Text style={{color:"black",fontSize:"2.5vh",textAlign:"justify"}}>
            {data[0].desc}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card >
        <Card.Body>
        

        <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"50%"}} height="23" width="23" viewBox="0 0 640 512"><path opacity="1" fill="#1E3050" d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"/></svg>
          <Card.Title style={{color:"rgb(0, 183, 255)",fontWeight:"700",fontStyle:"bold",fontSize:"3vh",textAlign:"center"}}>{data[1].title}</Card.Title>
          <Card.Text style={{color:"black",fontSize:"2.5vh",textAlign:"justify"}}>
            {data[1].desc}
          </Card.Text>
        </Card.Body>
      </Card> 
      <Card >
        <Card.Body>
        

        <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"50%"}} height="23" width="23" viewBox="0 0 448 512"><path opacity="1" fill="#1E3050" d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/></svg>
          <Card.Title style={{color:"rgb(0, 183, 255)",fontWeight:"700",fontStyle:"bold",fontSize:"3vh",textAlign:"center"}}>{data[2].title}</Card.Title>
          <Card.Text style={{color:"black",fontSize:"2.5vh",textAlign:"justify"}}>
            {data[2].desc}
          </Card.Text>
        </Card.Body>
      </Card> 
        {/* </div> */}
        {/* <div style={{display:"flex",justifyContent:"space-around"}}> */}
        <Card >
        <Card.Body>
        

        <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"50%"}} height="23" width="23" viewBox="0 0 384 512"><path opacity="1" fill="#1E3050" d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"/></svg>
          <Card.Title style={{color:"rgb(0, 183, 255)",fontWeight:"700",fontStyle:"bold",fontSize:"3vh",textAlign:"center"}}>{data[3].title}</Card.Title>
          <Card.Text style={{color:"black",fontSize:"2.5vh",textAlign:"justify"}}>
            {data[3].desc}
          </Card.Text>
        </Card.Body>
      </Card> 
      <Card >
        <Card.Body>
        

        <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"50%"}} height="23" width="23" viewBox="0 0 448 512"><path opacity="1" fill="#1E3050" d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
          <Card.Title style={{color:"rgb(0, 183, 255)",fontWeight:"700",fontStyle:"bold",fontSize:"3vh",textAlign:"center"}}>{data[4].title}</Card.Title>
          <Card.Text style={{color:"black",fontSize:"2.5vh",textAlign:"justify"}}>
            {data[4].desc}
          </Card.Text>
        </Card.Body>
      </Card> 
        <Card >
        <Card.Body>
        

        <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"50%"}} height="23" width="23" viewBox="0 0 448 512"><path opacity="1" fill="#1E3050" d="M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z"/></svg>
          <Card.Title style={{color:"rgb(0, 183, 255)",fontWeight:"700",fontStyle:"bold",fontSize:"3vh",textAlign:"center"}}>{data[5].title}</Card.Title>
          <Card.Text style={{color:"black",fontSize:"2.5vh",textAlign:"justify"}}>
            {data[5].desc}
          </Card.Text>
        </Card.Body>
      </Card>  
        {/* </div> */}
        {/* <div style={{display:"flex",justifyContent:"space-around"}}> */}
        <Card >
        <Card.Body>
        

        <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"50%"}} height="23" width="23" viewBox="0 0 448 512"><path opacity="1" fill="#1E3050" d="M333.2 322.8l0 0-133.9-146 0 0L146 118.6c7.8-5.1 37-22.6 78-22.6s70.2 17.4 78 22.6L245.7 180l85.6 93.4 27.4-29.8c16.3-17.7 25.3-40.9 25.3-65V149.1c0-19-5.6-37.5-16.1-53.3L327.8 35.6C312.9 13.4 287.9 0 261.2 0h-76c-25.8 0-50.1 12.5-65.1 33.5L81.9 87C70.3 103.2 64 122.8 64 142.8V164c0 23.2 8.4 45.6 23.6 63.1l56 64.2 0 0 83.3 95.6 0 0 91.8 105.3c10 11.5 26.8 14.3 40 6.8l54.5-31.1c17.8-10.2 21.6-34.3 7.7-49.4l-87.7-95.7zM205.2 410.6l-83.3-95.6L27.1 418.5c-13.9 15.1-10.1 39.2 7.7 49.4l55.1 31.5c13 7.4 29.3 4.9 39.4-6.1l75.9-82.6z"/></svg>
          <Card.Title style={{color:"rgb(0, 183, 255)",fontWeight:"700",fontStyle:"bold",fontSize:"3vh",textAlign:"center"}}>{data[6].title}</Card.Title>
          <Card.Text style={{color:"black",fontSize:"2.5vh",textAlign:"justify"}}>
            {data[6].desc}
          </Card.Text>
        </Card.Body>
      </Card> 
      <Card >
        <Card.Body>
        

        <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"50%"}} height="23" width="23" viewBox="0 0 448 512"><path opacity="1" fill="#1E3050" d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
          <Card.Title style={{color:"rgb(0, 183, 255)",fontWeight:"700",fontStyle:"bold",fontSize:"3vh",textAlign:"center"}}>{data[7].title}</Card.Title>
          <Card.Text style={{color:"black",fontSize:"2.5vh",textAlign:"justify"}}>
            {data[7].desc}
          </Card.Text>
        </Card.Body>
      </Card> 
      <Card >
        <Card.Body>
        

        <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"50%"}} height="23" width="23" viewBox="0 0 640 512"><path opacity="1" fill="#1E3050" d="M576 64H64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H184.4c24.2 0 46.4-13.7 57.2-35.4l32-64c8.8-17.5 26.7-28.6 46.3-28.6s37.5 11.1 46.3 28.6l32 64c10.8 21.7 33 35.4 57.2 35.4H576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM96 240a64 64 0 1 1 128 0A64 64 0 1 1 96 240zm384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
          <Card.Title style={{color:"rgb(0, 183, 255)",fontWeight:"700",fontStyle:"bold",fontSize:"3vh",textAlign:"center"}}>{data[8].title}</Card.Title>
          <Card.Text style={{color:"black",fontSize:"2.5vh",textAlign:"justify"}}>
            {data[8].desc}
          </Card.Text>
        </Card.Body>
      </Card>  
        {/* </div > */}
        {/* <div style={{display:"flex",justifyContent:"space-around"}}> */}
        <Card >
        <Card.Body>
        

        <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"50%"}} height="23" width="23" viewBox="0 0 640 512"><path opacity="1" fill="#1E3050" d="M211.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM32 256c0 17.7 14.3 32 32 32h85.6c10.1-39.4 38.6-71.5 75.8-86.6c-9.7-6-21.2-9.4-33.4-9.4H96c-35.3 0-64 28.7-64 64zm461.6 32H576c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64H448c-11.7 0-22.7 3.1-32.1 8.6c38.1 14.8 67.4 47.3 77.7 87.4zM391.2 226.4c-6.9-1.6-14.2-2.4-21.6-2.4h-96c-8.5 0-16.7 1.1-24.5 3.1c-30.8 8.1-55.6 31.1-66.1 60.9c-3.5 10-5.5 20.8-5.5 32c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32c0-11.2-1.9-22-5.5-32c-10.8-30.7-36.8-54.2-68.9-61.6zM563.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM321.6 192a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"/></svg>
          <Card.Title style={{color:"rgb(0, 183, 255)",fontWeight:"700",fontStyle:"bold",fontSize:"3vh",textAlign:"center"}}>{data[9].title}</Card.Title>
          <Card.Text style={{color:"black",fontSize:"2.5vh",textAlign:"justify"}}>
            {data[9].desc}
          </Card.Text>
        </Card.Body>
      </Card> 
      <Card >
        <Card.Body>
        <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"50%"}} height="23" width="23" viewBox="0 0 512 512"><path opacity="1" fill="#1E3050" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm96 288H448c17.7 0 32-14.3 32-32V251.8c0-7.6-2.7-15-7.7-20.8l-65.8-76.8c-12.1-14.2-33.7-15-46.9-1.8l-21 21c-10 10-26.4 9.2-35.4-1.6l-39.2-47c-12.6-15.1-35.7-15.4-48.7-.6L135.9 215c-5.1 5.8-7.9 13.3-7.9 21.1v84c0 17.7 14.3 32 32 32z"/></svg>
          <Card.Title style={{color:"rgb(0, 183, 255)",fontWeight:"700",fontStyle:"bold",fontSize:"3vh",textAlign:"center"}}>{data[10].title}</Card.Title>
          <Card.Text style={{color:"black",fontSize:"2.5vh",textAlign:"justify"}}>
            {data[10].desc}
          </Card.Text>
        </Card.Body>
      </Card> 
      <Card >
        <Card.Body>
        <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"50%"}} height="23" width="23" viewBox="0 0 640 512"><path opacity="1" fill="#1E3050" d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-1/4.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"/></svg>
          <Card.Title style={{color:"rgb(0, 183, 255)",fontWeight:"700",fontStyle:"bold",fontSize:"3vh",textAlign:"center"}}>{data[11].title}</Card.Title>
          <Card.Text style={{color:"black",fontSize:"2.5vh",textAlign:"justify"}}>
            {data[11].desc}
          </Card.Text>
        </Card.Body>
      </Card>  
        {/* </div> */}
      </Slider>
    </div>
  );
};
export default Features;
