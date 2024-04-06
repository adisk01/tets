import React from "react";
import "./Footer.css";
var img1 = require("../../images/Color logo with background (1).png");
const Footer = () => {
    // const buttonStyle = {
    //     //backgroundColor: '#007bff',
    //     backgroundColor:"#28a745",
    //     color: 'white',
    //     padding: '10px 20px',
    //     margin: '5px 0',
    //     border: 'none',
    //     borderRadius: '5px',
    //     cursor: 'pointer',
    //   };
    //   const selectedButtonStyle={
    //     ...buttonStyle,
    //     backgroundColor:"#007bff"
    //   }
    const regions = {
        Asia: 'Asian Address',
        Africa: 'African Address',
        America: 'America Address',
      };
    const [showOptions, setShowOptions] = React.useState(false);
  const [selectedRegion, setSelectedRegion] = React.useState(null);
  //const [selectedButton,setSelectedButton]=React.useState("");
  const handleClick = (region,buttonID) => {
    setSelectedRegion(regions[region]);
    //setSelectedButton(buttonID);
    //setShowOptions(false);
  };
  const handleOptions=()=>{
    setShowOptions(!showOptions);
    setSelectedRegion(null);
  }
  return (
    <div class="container-fluid bg-dark text-light footer my-6 mb-0 py-6 wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-4">Get In Touch</h4>
                    <img src={img1} alt="logo" style={{width:"200px",height:"auto"}}></img>
                    
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Quick Links</h4>
                    <a class="btn btn-link" href="#index.html">About Us</a>
                    <a class="btn btn-link" href="#index.html">Terms and Conditions</a>
                    <a class="btn btn-link" href="#index.html">Privacy Policy</a>
                    <a class="btn btn-link" href="#index.html">Payment Policy</a>
                    <a class="btn btn-link" href="#index.html">Career</a>
                </div>
                <div class="col-lg-3 col-md-6">
                <h4 class="text-light mb-4">Quick Links</h4>
                    <div style={{display:"flex"}}>
                        <div style={{minWidth:"10rem"}}>
                        <a class="btn btn-link"  onClick={handleOptions} href="#index.html">Contact Sales</a>
      {/* <button style={buttonStyle}  onClick={handleOptions}>Contact Sales</button> */}
      {showOptions && (
        <div style={{display:"flex",flexDirection:"column",minWidth:"10rem"}}>
          <button class="btn btn-link" onClick={() => handleClick('Asia',"Asia")}>Asia</button>
          <button class="btn btn-link" onClick={() => handleClick('Africa',"Africa")}>Africa</button>
          <button class="btn btn-link" onClick={() => handleClick('America',"America")}>America</button>
        </div>
      )}
      </div>
      {selectedRegion && (
        <div style={{height:"3rem", minWidth:"5rem",margin:"50px -15px -15px -50px",border:"1px solid grey",padding:"3%",boxShadow:"initial",background:"white",borderRadius:"4px",color:"black"}}>
          {selectedRegion}
        </div>
      )}
      </div>
      <a class="btn btn-link" href="#index.html">Parent Company</a>
      <a class="btn btn-link" href="#index.html">Candidate Login</a>
    </div>
    <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Training In</h4>
                    <a class="btn btn-link" href="#index.html">Asia Region</a>
                    <a class="btn btn-link" href="#index.html">Africa Region</a>
                    <a class="btn btn-link" href="#index.html">America Region</a>
                </div>
            </div>
            
        </div>
        
    </div>
  );
};
export default Footer;
