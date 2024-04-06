import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Degree/Web3.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Introduction = () => {
  return (
    <div className="web3-container" style={{marginTop:"15%"}}>
      <div className="web3-header">
        <h1> <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 576 512"><path opacity="1" fill="#1E3050" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>Introduction To Web3 Technologies (8 Months)</h1>
        <p></p>
      </div>
      <div className="semesters">
        <DropdownButton className="dropdown-button" variant="Info"  drop="down"  title="Programme I">
        <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: Blockchain Basics and Origin</div></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Decentralized Finance (DeFi) and NFTs</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Decentralized Finance (DeFi) and NFTs</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: Future Trends and Opportunities</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Programme II">
        <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: Foundations and History of AI</div></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Machine Learning Basics</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Neural Networks and Deep Learning</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: Future Trends and Ethical Considerations</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Programme III">
        <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: Basics of NFTs and Digital Ownership</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Art, Creativity, and NFTs</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Beyond Art: Diverse Applications of NFTs</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: The Future of NFTs: Opportunities and Challenges</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Programme IV">
          <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: Understanding the Cryptocurrency Landscape</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Basics of Crypto Trading</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Technical Analysis and Trading Strategies</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: Advanced Trading Concepts and the Future</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" variant="Info"  drop="down"  title="Programme V">
        <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: Deep Dive into Supervised Learning</div></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Unsupervised Learning and Dimensionality Reduction</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Neural Networks and Deep Learning</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: Advanced Topics and Industry Applications</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Programme VI">
        <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: Fundamentals of Deep Learning</div></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Diving Deeper into Deep Learning Architectures</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Introduction to Large Language Models (LLMs)</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: Ethical and Practical Considerations in Deep Learning and LLMs</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Programme VII">
        <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: Basics of Deep Learning for Image and Video</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Introduction to Deep Fakes and Generative Networks</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Challenges, Detection, and Countermeasures</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: Broader Impacts, Ethics, and the Future of Deep Fakes</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Programme VIII">
          <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: Basics of Blockchain and Crypto currencies</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Core Principles and Protocols in DeFi</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Expanding DeFi Ecosystem</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: Challenges, Risks, and the Future of DeFi</div></Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default Introduction;

