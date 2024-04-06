import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Web3.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Web3 = () => {
  return (
    <div className="web3-container">
      <div className="web3-header">
        <h1> <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 576 512"><path opacity="1" fill="#1E3050" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>Degree in Web 3 Technologies (Two Year Programme)</h1>
        <p>
          This degree program aims to provide a comprehensive understanding of
          Web 3 technology and its intersection with other emerging technologies
          such as Blockchain, IoT, Artificial Intelligence, and Machine
          Learning. Each semester focuses on a different technological field,
          culminating in a well-rounded, interdisciplinary education.
        </p>
      </div>

      <div className="web3-details">
        <ul>
          <li style={{listStyleType:"none"}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
              <path opacity="1" fill="black" d="M480 96c17.7 0 32 14.3 32 32s-14.3 32-32 32l-208 0 0-64 208 0zM320 288c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm64-64c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0c17.7 0 32 14.3 32 32zM288 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm-88-96l.6 0c-5.4 9.4-8.6 20.3-8.6 32c0 13.2 4 25.4 10.8 35.6C177.9 364.3 160 388.1 160 416c0 11.7 3.1 22.6 8.6 32l-8.6 0C71.6 448 0 376.4 0 288l0-61.7c0-42.4 16.9-83.1 46.9-113.1l11.6-11.6C82.5 77.5 115.1 64 149 64l27 0c35.3 0 64 28.7 64 64l0 88c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-56c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 56c0 39.8 32.2 72 72 72z"/>
            </svg>
            An intensive, holistic program that spans over 24 months.
          </li>
          <li style={{listStyleType:"none"}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
              <path opacity="1" fill="black" d="M480 96c17.7 0 32 14.3 32 32s-14.3 32-32 32l-208 0 0-64 208 0zM320 288c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm64-64c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0c17.7 0 32 14.3 32 32zM288 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm-88-96l.6 0c-5.4 9.4-8.6 20.3-8.6 32c0 13.2 4 25.4 10.8 35.6C177.9 364.3 160 388.1 160 416c0 11.7 3.1 22.6 8.6 32l-8.6 0C71.6 448 0 376.4 0 288l0-61.7c0-42.4 16.9-83.1 46.9-113.1l11.6-11.6C82.5 77.5 115.1 64 149 64l27 0c35.3 0 64 28.7 64 64l0 88c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-56c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 56c0 39.8 32.2 72 72 72z"/>
            </svg>
            Dive deep into Web3, AI, Blockchain, Machine Learning and IoT with a
             curriculum that's both comprehensive and cutting-edge.
          </li>
          <li style={{listStyleType:"none"}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
              <path opacity="1" fill="black" d="M480 96c17.7 0 32 14.3 32 32s-14.3 32-32 32l-208 0 0-64 208 0zM320 288c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm64-64c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0c17.7 0 32 14.3 32 32zM288 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm-88-96l.6 0c-5.4 9.4-8.6 20.3-8.6 32c0 13.2 4 25.4 10.8 35.6C177.9 364.3 160 388.1 160 416c0 11.7 3.1 22.6 8.6 32l-8.6 0C71.6 448 0 376.4 0 288l0-61.7c0-42.4 16.9-83.1 46.9-113.1l11.6-11.6C82.5 77.5 115.1 64 149 64l27 0c35.3 0 64 28.7 64 64l0 88c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-56c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 56c0 39.8 32.2 72 72 72z"/>
            </svg>
            Upon completion, you'll be awarded a degree that stands as a
             testament to your expertise and readiness for the industry.
          </li>
          <li style={{listStyleType:"none"}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
              <path opacity="1" fill="black" d="M480 96c17.7 0 32 14.3 32 32s-14.3 32-32 32l-208 0 0-64 208 0zM320 288c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm64-64c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0c17.7 0 32 14.3 32 32zM288 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm-88-96l.6 0c-5.4 9.4-8.6 20.3-8.6 32c0 13.2 4 25.4 10.8 35.6C177.9 364.3 160 388.1 160 416c0 11.7 3.1 22.6 8.6 32l-8.6 0C71.6 448 0 376.4 0 288l0-61.7c0-42.4 16.9-83.1 46.9-113.1l11.6-11.6C82.5 77.5 115.1 64 149 64l27 0c35.3 0 64 28.7 64 64l0 88c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-56c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 56c0 39.8 32.2 72 72 72z"/>
            </svg>
            4 Semester in duration of two years.
          </li>
          <li style={{listStyleType:"none"}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
              <path opacity="1" fill="black" d="M480 96c17.7 0 32 14.3 32 32s-14.3 32-32 32l-208 0 0-64 208 0zM320 288c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm64-64c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0c17.7 0 32 14.3 32 32zM288 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm-88-96l.6 0c-5.4 9.4-8.6 20.3-8.6 32c0 13.2 4 25.4 10.8 35.6C177.9 364.3 160 388.1 160 416c0 11.7 3.1 22.6 8.6 32l-8.6 0C71.6 448 0 376.4 0 288l0-61.7c0-42.4 16.9-83.1 46.9-113.1l11.6-11.6C82.5 77.5 115.1 64 149 64l27 0c35.3 0 64 28.7 64 64l0 88c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-56c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 56c0 39.8 32.2 72 72 72z"/>
            </svg>
            Each Semester consists of 3 Courses, that means 12 different courses
             will be there in the syllabus.
          </li>
          <li style={{listStyleType:"none"}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
              <path opacity="1" fill="black" d="M480 96c17.7 0 32 14.3 32 32s-14.3 32-32 32l-208 0 0-64 208 0zM320 288c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm64-64c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0c17.7 0 32 14.3 32 32zM288 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm-88-96l.6 0c-5.4 9.4-8.6 20.3-8.6 32c0 13.2 4 25.4 10.8 35.6C177.9 364.3 160 388.1 160 416c0 11.7 3.1 22.6 8.6 32l-8.6 0C71.6 448 0 376.4 0 288l0-61.7c0-42.4 16.9-83.1 46.9-113.1l11.6-11.6C82.5 77.5 115.1 64 149 64l27 0c35.3 0 64 28.7 64 64l0 88c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-56c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 56c0 39.8 32.2 72 72 72z"/>
            </svg>
            Total 144 Hour Live Classes in 2 year duration.
          </li>
        </ul>
      </div>

      <div className="semesters">
        <DropdownButton className="dropdown-button" variant="Info"  drop="down"  title="Semester I">
        <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Course1:Introduction to Blockchain and Web3</div><div>Month1: What is Blockchain?</div><div>Month2: Introduction to Web3</div></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Course2:Anatomy of a Blockchain</div><div>Month3: Hashing Algorithms</div><div>Month4: Digital Signatures and Public Key Infrastructure</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Course3:Smart Contracts and DApp Development</div><div>Month5:  Introduction to Smart Contracts
</div><div>Month6: Basics of DApp Development</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Semester II">
        <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Course4:Introduction to IoT</div><div>Month7: What is IoT?</div><div>Month8: IoT Data Management</div></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Course5: IoT Protocols and Communication</div><div>Month9:Basic IoT Protocols
 </div><div>Month10:Network Topologies in IoT</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Course6: IoT Security and Privacy
</div><div>Month11: IoT Security Challenges
</div><div>Month12:Privacy and Ethical Concerns</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Semester III">
        <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Course 7: Introduction to Artificial Intelligence</div><div>Month 13: What is Artificial Intelligence?</div><div>Month 14: IoT Data Management</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Course 8: Natural Language Processing</div><div>Month 15: Basics of NLP</div><div>Month 16: Advanced NLP Techniques</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Course 9:Computer Vision and AI Ethics</div><div>Month 17: Introduction to Computer Vision</div><div>Month 18: AI Ethics and Fairness</div>
</Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Semester IV">
          <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Course 10: Introduction to Machine Learning</div><div>Month 19: Fundamentals of Machine Learning</div><div>Month 20: Data Preprocessing and Feature Engineering </div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Course 11: Supervised and Unsupervised Learning</div><div>Month 21: Supervised Learning Techniques</div><div>Month 22: Unsupervised Learning Techniques</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Course 12:Deep Learning and Neural </div><div>Month 23: Introduction to Neural Networks</div><div>Month 24: Deep Learning Architectures</div></Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default Web3;

