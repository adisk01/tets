import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Modal,
  Box,
} from '@mui/material';

const UpdatePayments = () => {
 
  const dummyCustomers = [
    {
      id: 1,
      email: 'john.doe@example.com',
      firstName: 'John',
      lastName: 'Doe',
      premisesType: 'Home',
      contact: '123-456-7890',
      address: '123 Main St, Cityville',
      country: 'USA',
    },
    {
      id: 2,
      email: 'jane.smith@example.com',
      firstName: 'Jane',
      lastName: 'Smith',
      premisesType: 'Apartment',
      contact: '987-654-3210',
      address: '456 Elm St, Townsville',
      country: 'USA',
    },
    
  ];

  const randomCountries = ['USA', 'Canada', 'UK', 'Australia', 'Japan'];
  const [selectedCountry, setSelectedCountry] = useState('');
  const [customersForCountry, setCustomersForCountry] = useState([]);
  const [selectedCustomer, setSelectedCandidate] = useState(null);
  const [open, setOpen] = useState(false);
  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    const filteredCustomers = dummyCustomers.filter((customer) => customer.country === selectedCountry);
    setCustomersForCountry(filteredCustomers);
  };

  // const handleCandidateSelect = (candidate) => {
  //   setSelectedCandidate(candidate);
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };


  const handleUpload = (customer) => {

    const fileInput = document.createElement('input');

    fileInput.type = 'file';

    fileInput.click();

    fileInput.addEventListener('change', (event) => {

      const file = event.target.files[0];

      if (file) {

        console.log('File selected:', file);

        fileInput.value = '';
      }
    });
  };


  return (
    <div style={{ margin: '20px auto', maxWidth: '800px' }}>
  
      <FormControl fullWidth>
        <InputLabel id="country-select-label"><h5>Select Country</h5></InputLabel>
        <Select
          labelId="country-select-label"
          id="country-select"
          value={selectedCountry}
          label="Select Country"
          onChange={handleCountryChange}
        >
          <MenuItem value="">
            <em><h5>None</h5></em>
          </MenuItem>
          {randomCountries.map((country, index) => (
            <MenuItem key={index} value={country}>
              <h5>{country}</h5>
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <div style={{ marginTop: '20px' }}>
        <h2>List of Candidates</h2>
        {customersForCountry.map((candidate) => (
          <Card key={candidate.id} style={{ marginBottom: '10px', width: '100%',background:"#DA70D6" }}>
            <CardHeader
              title={<strong>{`${candidate.firstName} ${candidate.lastName}`}</strong>}
            />
            <CardContent>
              <Typography><h5><strong>Email ID:</strong> {candidate.email}</h5></Typography>
              <Typography><h5><strong>Contact:</strong> {candidate.contact}</h5></Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleUpload(candidate)}><h6>Upload</h6></Button>
            </CardActions>
          </Card>
        ))}
      </div>

       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="customer-modal-title"
        aria-describedby="customer-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: 400,
          bgcolor: 'white',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography variant="h5" id="customer-modal-title" align="center">
            <strong>Candidate Details</strong>
          </Typography>
          <div style={{ marginTop: '20px' }}>
            {selectedCustomer && (
              <div>
                <Typography><strong>Email ID: {selectedCustomer.email}</strong></Typography>
                <Typography><strong>First Name: {selectedCustomer.firstName}</strong></Typography>
                <Typography><strong>Last Name: {selectedCustomer.lastName}</strong></Typography>
                <Typography><strong>Premises Type: {selectedCustomer.premisesType}</strong></Typography>
                <Typography><strong>Contact:{selectedCustomer.contact}</strong></Typography>
                <Typography><strong>Address:{selectedCustomer.address}</strong></Typography>
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdatePayments;