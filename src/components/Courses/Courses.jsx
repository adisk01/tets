import CourseCard from "./CourseCard";
import "./Courses.css";
import React from "react";
import Modal from '@mui/material/Modal';
import Web3 from "./Degree/Web3";
import Introduction from "./Introduction";
import Diploma from "./Diploma";
var img1=require("../../images/1012212859_01547e3f17.jpg");
const Courses=()=>{
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleOpen2 = () => setOpen2(true);
  const handleOpen3 = () => setOpen3(true);
  const handleClose1 = () => setOpen1(false);
  const handleClose2 = () => setOpen2(false);
  const handleClose3 = () => setOpen3(false);
    return (
        <div className="coursesContainer">
            <h1>Courses that Aligns Best With Your Educational Goals</h1>
        <div className="courses" >
      <div onClick={handleOpen2} style={{cursor:"pointer"}}>
        <CourseCard title="Introduction Programme" imageUrl={img1} description="Non-Fungible Tokens (NFTs),Deep Fake,Crypto Trading,LLMs,Decentralized Finance (DeFi)" reviews="100" months="8"/></div>
        <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Introduction />
      </Modal>
      <div onClick={handleOpen3} style={{cursor:"pointer"}}>
        <CourseCard title="Diploma Programme" imageUrl={img1} description="Understanding decentralized systems,Origin and history of blockchain,Key principles of Web3"
        reviews="100" months="12"/></div>
        <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Diploma />
      </Modal>
        <div onClick={handleOpen1} style={{cursor:"pointer"}}>
        <CourseCard title="Degree Programme" imageUrl={img1} description="This degree program aims to provide a comprehensive understanding of
        Web 3 and Blockchain technology" reviews="100" months="24"/></div>
        <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Web3 />
      </Modal>
      </div>
      </div>
    )
}
export default Courses;