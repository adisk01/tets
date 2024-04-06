import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import './Support.css';

export default function Support() {
  const [subject, setSubject] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
   
    console.log({ subject, type, description });
  };
  const handleCancel = () => {

  };

  return (
    <div className="support-container">
      <div className="dashboard">
        <h2>If you have any questions related to your subscription and account raise ticket
          Email us at: <a href="mailto:support@nupiumacademy.com">support@nupiumacademy.com</a></h2>

        <form>
          <TextField
            label={<h6>Subject</h6>}
            variant="outlined"
            fullWidth
            margin="normal"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel id="type-select-label"><h6>Type</h6></InputLabel>
            <Select
              labelId="type-select-label"
              id="type-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
              label="Type"
            >
              <MenuItem value="Services"><h6>Courses</h6></MenuItem>
              <MenuItem value="Account"><h6>Account</h6></MenuItem>
              <MenuItem value="Payment"><h6>Payment</h6></MenuItem>
              <MenuItem value="Other"><h6>Other</h6></MenuItem>
              <MenuItem value="Add on Service"><h6>Placement Advice</h6></MenuItem>
              <MenuItem value="Complaint"><h6>Complaint</h6></MenuItem>
              <MenuItem value="Question"><h6>Video Counselling</h6></MenuItem>
            </Select>
          </FormControl>

          <TextField
            label={<h6>Description</h6>}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="file-upload">
            <input
              placeholder='Attach a file'
              type="file"
              accept=".jpg, .jpeg, .png, .pdf"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          </form>
          <Button className="submit" variant="contained" color="success" >
            <strong>Submit</strong>
          </Button>
          <Button className="Cancel" variant="contained" color="error">
            <strong>Cancel</strong>
          </Button>
      
      </div>

    </div>
  );
}