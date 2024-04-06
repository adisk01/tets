// History.js
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import DynamicTable from './DynamicTable'; // Import the DynamicTable component
//import Rating from './BasicRating';
import './SessionHistory.css'; // Import the CSS file

export default function CoursesBucket() {
  const [ProgrammeType, setProgrammeType] = useState('');

  const handleChange = (event) => {
    setProgrammeType(event.target.value);
  };

  return (
    <div className="payment-container">
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel className='input-label' id="demo-select-label"><h6>Type of Programme</h6></InputLabel>
        <Select
          labelId="demo-select-label"
          id="demo-select"
          value={ProgrammeType}
          label="Type of Programme"
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
      <div className='payment-container'>
      <table className='payment-table'>
        <tbody>
        <tr>
            <th>Course Name</th>
            <th>Link To Join</th>
            <th>Timings</th>
            <th>Details</th>
        </tr>
        <tr>
            <td>introduction</td>
            <td>qwertipkjhgfzxcvbnm</td>
            <td>weryuiok</td>
            <td>weioplkhgfaxcvm</td>
        </tr>
        <tr>
            <td>introduction</td>
            <td>qwertipkjhgfzxcvbnm</td>
            <td>weryuiok</td>
            <td>weioplkhgfaxcvm</td>
        </tr>
        <tr>
            <td>introduction</td>
            <td>qwertipkjhgfzxcvbnm</td>
            <td>weryuiok</td>
            <td>weioplkhgfaxcvm</td>
        </tr>
        <tr>
            <td>introduction</td>
            <td>qwertipkjhgfzxcvbnm</td>
            <td>weryuiok</td>
            <td>weioplkhgfaxcvm</td>
        </tr>
        <tr>
            <td>introduction</td>
            <td>qwertipkjhgfzxcvbnm</td>
            <td>weryuiok</td>
            <td>weioplkhgfaxcvm</td>
        </tr>
        <tr>
            <td>introduction</td>
            <td>qwertipkjhgfzxcvbnm</td>
            <td>weryuiok</td>
            <td>weioplkhgfaxcvm</td>
        </tr>
        <tr>
            <td>introduction</td>
            <td>qwertipkjhgfzxcvbnm</td>
            <td>weryuiok</td>
            <td>weioplkhgfaxcvm</td>
        </tr>
        <tr>
            <td>introduction</td>
            <td>qwertipkjhgfzxcvbnm</td>
            <td>weryuiok</td>
            <td>weioplkhgfaxcvm</td>
        </tr>
        <tr>
            <td>introduction</td>
            <td>qwertipkjhgfzxcvbnm</td>
            <td>weryuiok</td>
            <td>weioplkhgfaxcvm</td>
        </tr>
        <tr>
            <td>introduction</td>
            <td>qwertipkjhgfzxcvbnm</td>
            <td>weryuiok</td>
            <td>weioplkhgfaxcvm</td>
        </tr>
        <tr>
            <td>introduction</td>
            <td>qwertipkjhgfzxcvbnm</td>
            <td>weryuiok</td>
            <td>weioplkhgfaxcvm</td>
        </tr>
        <tr>
            <td>introduction</td>
            <td>qwertipkjhgfzxcvbnm</td>
            <td>weryuiok</td>
            <td>weioplkhgfaxcvm</td>
        </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}