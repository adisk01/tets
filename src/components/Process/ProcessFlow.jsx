import React from "react";
import "./ProcessFlow.css";
var beforeSubscribing = require("../../images/Screenshot (255).png");
var afterSubscribing = require("../../images/Screenshot (256).png");
var img1=require("../../images/Screenshot (306).png");
var img2=require("../../images/Screenshot (307).png");
var img3=require("../../images/Screenshot (308).png");
var img4=require("../../images/Screenshot (309).png");
var img5=require("../../images/Screenshot (310).png");
var img6=require("../../images/Screenshot (311).png");
var img7=require("../../images/Screenshot (312).png");
var img8=require("../../images/Screenshot (313).png");
var img9=require("../../images/Screenshot (314).png");
var img10=require("../../images/Screenshot (316).png");
const ProcessFlow = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h1>Steps to follow</h1>
        <div className="Subscribing">
        <div className="beforeSubscribing">
            <h2>Before Subscribing</h2>
            <div>
            <img src={img1} alt="step1"></img>
            <img src={img2} alt="step2"></img>
            <img src={img3} alt="step3"></img>
            <img src={img4} alt="step4"></img>
            <img src={img5} alt="step5"></img>
            </div>
        </div>
        <div className="afterSubscribing">
        <h2>After Subscribing</h2>
        <div>
            <img src={img6} alt="step1"></img>
            <img src={img7} alt="step2"></img>
            <img src={img8} alt="step3"></img>
            <img src={img9} alt="step4"></img>
            <img src={img10} alt="step5"></img>
            </div>
        </div>
        </div>
    </div>
  );
};
export default ProcessFlow;
{/* // <div className="flowchart">
    //   <div className="Item">
    //     <h2>Before Subscribing</h2>
    //     <img src={beforeSubscribing} alt="chart"></img>
    //   </div>
    //   <div className="Item">
    //     <h2>After Subscribing</h2>
    //     <img src={afterSubscribing} alt="chart"></img>
    //   </div>
    // </div> */}
