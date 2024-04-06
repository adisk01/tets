// History.js
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DynamicTable from './DynamicTable'; // Import the DynamicTable component
//import Rating from './BasicRating';
import './SessionHistory.css'; // Import the CSS file

export default function SessionHistory() {
  const [serviceType, setServiceType] = useState('');
  const [course, setCourse] = useState('');

  const handleChange = (event) => {
    const selectedServiceType = event.target.value;
    setServiceType(selectedServiceType);
    // Reset course selection when changing service type
    setCourse('');
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  return (
    <div className="history-container">
      <FormControl sx={{ m: 1, minWidth: 200 }} >
        <InputLabel id="demo-select-label"><h6 style={{color:"grey"}}>Type of Service</h6></InputLabel>
        <Select
          labelId="demo-select-label"
          id="demo-select"
          value={serviceType}
          label="Type of Service"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em><h6 style={{color:"grey"}}>None</h6></em>
          </MenuItem>
          <MenuItem value="Introduction"><h6 style={{color:"grey"}}>Introduction Programme</h6></MenuItem>
          <MenuItem value="Diploma"><h6 style={{color:"grey"}}>Diploma Programme</h6></MenuItem>
          <MenuItem value="Degree"><h6 style={{color:"grey"}}>Degree Programme</h6></MenuItem>
        </Select>
      </FormControl>

      {serviceType === 'Diploma' && (
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="course-select-label"><h6 style={{color:"grey"}}>Choose Course</h6></InputLabel>
          <Select
            labelId="course-select-label"
            id="course-select"
            value={course}
            label="Choose Course"
            onChange={handleCourseChange}
          >
            <MenuItem value="">
              <em><h6 style={{color:"grey"}}>None</h6></em>
            </MenuItem>
            <MenuItem value="Course 1"><h6 style={{color:"grey"}}>Course 1</h6></MenuItem>
            <MenuItem value="Course 2"><h6 style={{color:"grey"}}>Course 2</h6></MenuItem>
            {/* Add more courses as needed */}
          </Select>
        </FormControl>
      )}

      {serviceType && <DynamicTable serviceType={serviceType} />}
    </div>
  );
}
