import React, { useState } from 'react';
import './MessageFeature.css';

const MessageFeature = () => {
  const [message, setMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  //const [sendToAll, setSendToAll] = useState(false);

  // Function to handle sending message
  const sendMessage = () => {
    // Implement logic to send message
    console.log('Message:', message);
    //console.log('Send to All:', sendToAll);
    console.log('Selected Category:', selectedCategory);
    console.log('Selected Program:', selectedProgram);
  };

  return (
    <div className="message-feature-container">
      <h2>Message Feature</h2>
      <div className="input-container">
        <label htmlFor="message">Type message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          cols={50}
          className="message-input"
        />
      </div>

      <div className="input-container">
        <label htmlFor="category">Send as per Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="select-input"
        >
          <option value="">Select Category</option>
          <option value="Category1">Category 1</option>
          <option value="Category2">Category 2</option>
          <option value="Category3">Category 3</option>
        </select>
      </div>

      <div className="input-container">
        <label htmlFor="program">Send as per Programme:</label>
        <select
          id="program"
          value={selectedProgram}
          onChange={(e) => setSelectedProgram(e.target.value)}
          className="select-input"
        >
          <option value="">Select Programme</option>
          <option value="Program1">Program 1</option>
          <option value="Program2">Program 2</option>
          <option value="Program3">Program 3</option>
        </select>
      </div>

      <button onClick={sendMessage} className="send-button">Send Message</button>
    </div>
  );
};

export default MessageFeature;
