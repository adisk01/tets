import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Degree/Web3.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Diploma = () => {
  return (
    <div className="web3-container" style={{marginTop:"12%"}}>
      <div className="web3-header">
        <h1> <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 576 512"><path opacity="1" fill="#1E3050" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>Diploma Course (12 Months)</h1>
        <p></p>
      </div>
      <div className="semesters">
        <DropdownButton className="dropdown-button" variant="Info"  drop="down"  title="Programme I">
        <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: The Rise of Decentralization</div></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Blockchain: From Genesis to Today</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Anatomy of a Blockchain</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: Introduction to Web3: The Decentralized Web</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Programme II">
        <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: The Essence of Cryptography</div></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Diving into Public Key Infrastructure (PKI)</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Digital Signatures: Ensuring Authenticity & Integrity</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: Hash Functions: The Pillars of Blockchain</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Programme III">
        <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: Introduction to Ethereum</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Writing and Deploying Smart Contracts</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Building Decentralized Applications (DApps)</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: Advanced Features and Best Practices</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Programme IV">
          <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: Security Practices and Patterns</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Contract Testing and Debugging</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Gas Optimization Techniques</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: Advanced DApp Development Techniques</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" variant="Info"  drop="down"  title="Programme V">
        <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: Understanding DeFi Concepts</div></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Building and Using DeFi Protocols</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Introduction to Cryptocurrency Trading and Market Analysis</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: Advanced Trading Strategies and Risk Management</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Programme VI">
        <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: Understanding NFTs and Their Significance</div></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Creation, Deployment, and Trade of NFTs</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Real World Use Cases: Art, Gaming, and More</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: The Future of NFTs and the Metaverse</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Programme VII">
        <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: Challenges in Blockchain Scalability</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Exploring Layer 2 Solutions</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Study of Popular Scaling Solutions like Polygon and Rollups</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: The Future of Blockchain Scalability and the Evolution of Layer 2 Solutions</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Programme VIII">
          <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: The Need for Interoperability</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Bridges, Sidechains, and Relay Chains</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Looking at Polkadot, Cosmos, and Other Platforms</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: The Future of Cross Chain Interoperability and Innovations on the Horizon</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Programme IX">
          <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: Importance of Privacy and Ethical Considerations</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Zero Knowledge Proofs and Private Transactions</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Governance Models and Decentralized Autonomous Organizations (DAOs)</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: The Future of Privacy, Ethics, and Governance in an Evolving Blockchain Landscape</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Programme X">
          <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: Understanding Global Regulatory Environments</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Impacts of Policy on Blockchain Adoption</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Navigating Legal Challenges in Crypto Ventures</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: Global Regulatory Environments and Legal Challenges</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Programme XI">
          <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: Ethical Challenges in a Decentralized World</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Social and Cultural Implications of Web3 Adoption</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Case Studies on Ethical Dilemmas in Blockchain</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: The Path Forward: Fostering Ethical and Responsible Web3 Innovations</div></Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdown-button" drop="down" variant="Info" title="Programme XII">
          <Dropdown.Item href="#/action-1"><div style={{fontWeight:"800"}}>Week 1: Exploring Cutting
Edge Developments in Web3</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div style={{fontWeight:"800"}}>Week 2: Quantum Resistance and Future Tech Challenges</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 3: Opportunities in the Evolving Blockchain Landscape</div></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><div style={{fontWeight:"800"}}>Week 4: The Horizon: What Lies Beyond Today's Blockchain</div></Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default Diploma;

