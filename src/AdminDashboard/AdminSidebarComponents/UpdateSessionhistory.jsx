import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Paper,
} from '@mui/material';

const UpdateServicehistory = () => {
  const [selectedProgramme, setSelectedProgramme] = useState('');
  const [selectedCategoryType, setSelectedCategoryType] = useState('');
  const [sessionData, setSessionData] = useState({
    date: '12/02/2021',
    time: '04:30 pm',
    session: 'url',
    trainingPlatform: 'Zoom',
  });
  const [editable, setEditable] = useState(false);
  const Programmes = ['Introduction', 'Diploma', 'Degree'];
  const handleProgrammeChange = (event) => {
    setSelectedProgramme(event.target.value);
  };

  const handleCategoryTypeChange = (event) => {
    setSelectedCategoryType(event.target.value);
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    setEditable(false);

  };

  const handleDataChange = (field, value) => {
    setSessionData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div style={{width:"50vh"}}>
      <FormControl fullWidth style={{ marginBottom: 20 }}>
        <InputLabel id="country-select-label"><h5>Select Programme</h5></InputLabel>
        <Select
          labelId="country-select-label"
          id="country-select"
          value={selectedProgramme}
          label="Select Country"
          onChange={handleProgrammeChange}
        >
          <MenuItem value="">
            <em><strong>None</strong></em>
          </MenuItem>
          {Programmes.map((programme, index) => (
            <MenuItem key={index} value={programme}>
              <h5>{programme}</h5>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth style={{ marginBottom: 20 }}>
        <InputLabel id="service-type-select-label"><h5>Select Category</h5></InputLabel>
        <Select
          labelId="service-type-select-label"
          id="service-type-select"
          value={selectedCategoryType}
          label="Select Service Type"
          onChange={handleCategoryTypeChange}
        >
          <MenuItem value="">
            <em><h5>None</h5></em>
          </MenuItem>
          <MenuItem value="Web3"><h5>Web3</h5></MenuItem>
        </Select>
      </FormControl>
      <TableContainer component={Paper} style={{ marginBottom: 20, }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell style={{color:"red"}}><h5>Date:</h5></TableCell>
              <TableCell>
                {editable ? (
                  <TextField
                    value={sessionData.date}
                    onChange={(e) => handleDataChange('date', e.target.value)}
                    fullWidth
                  />
                ) : (
                  <h5>
                  {sessionData.date}</h5>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{color:"red"}}><h5>Time:</h5></TableCell>
              <TableCell>
                {editable ? (
                  <TextField
                    value={sessionData.time}
                    onChange={(e) => handleDataChange('time', e.target.value)}
                    fullWidth
                  />
                ) : (
                  <h5>
                  {sessionData.time}</h5>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{color:"red"}}><h5>Session:</h5></TableCell>
              <TableCell>
                {editable ? (
                  <TextField
                    value={sessionData.session}
                    onChange={(e) => handleDataChange('session', e.target.value)}
                    fullWidth
                  />
                ) : (
                  <h5>
                  {sessionData.session}</h5>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{color:"red"}}><h5>Training Platform:</h5></TableCell>
              <TableCell>
                {editable ? (
                  <TextField
                    value={sessionData.trainingPlatform}
                    onChange={(e) => handleDataChange('trainingPlatform', e.target.value)}
                    fullWidth
                    multiline
                  />
                ) : (<h5>
                  {sessionData.trainingPlatform}</h5>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {editable ? (
        <Button variant="contained" onClick={handleSave}>
          <strong>Save</strong>
        </Button>
      ) : (
        <Button variant="contained" onClick={handleEdit}>
          <strong>Edit</strong>
        </Button>
      )}
    </div>
  );
};

export default UpdateServicehistory;