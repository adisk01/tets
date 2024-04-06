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

const Candidates = () => {
  // Define dummy candidates data
  const dummyCandidates = [
    {
      id: 1,
      email: 'john.doe@example.com',
      firstName: 'John',
      lastName: 'Doe',
      Subscription: 'Web3',
      contact: '123-456-7890',
      address: '123 Main St, Cityville',
      country: 'USA',
    },
    {
      id: 2,
      email: 'jane.smith@example.com',
      firstName: 'Jane',
      lastName: 'Smith',
      Subscription: 'Web3',
      contact: '987-654-3210',
      address: '456 Elm St, Townsville',
      country: 'USA',
    },
    {
      id: 3,
      email: 'jane.smith@example.com',
      firstName: 'Jane',
      lastName: 'Smith',
      Subscription: 'Web3',
      contact: '987-654-3210',
      address: '456 Elm St, Townsville',
      country: 'USA',
    },
    {
      id: 4,
      email: 'jane.smith@example.com',
      firstName: 'Jane',
      lastName: 'Smith',
      Subscription: 'Web3',
      contact: '987-654-3210',
      address: '456 Elm St, Townsville',
      country: 'Canada',
    },
    {
      id: 5,
      email: 'jane.smith@example.com',
      firstName: 'Jane',
      lastName: 'Smith',
      Subscription: 'Web3',
      contact: '987-654-3210',
      address: '456 Elm St, Townsville',
      country: 'Canada',
    },
    {
      id: 6,
      email: 'jane.smith@example.com',
      firstName: 'Jane',
      lastName: 'Smith',
      Subscription: 'Web3',
      contact: '987-654-3210',
      address: '456 Elm St, Townsville',
      country: 'Canada',
    },
    // Add more dummy customer data as needed
  ];

  // Define random countries
  const randomCountries = ['USA', 'Canada', 'UK', 'Australia', 'Japan'];

  // State to store selected country and customers for the selected country
  const [selectedCountry, setSelectedCountry] = useState('');
  const [customersForCountry, setCustomersForCountry] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [open, setOpen] = useState(false);

  // Function to handle country selection
  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    const filteredCustomers = dummyCandidates.filter((customer) => customer.country === selectedCountry);
    setCustomersForCountry(filteredCustomers);
  };

  // Function to handle customer selection
  const handleCustomerSelect = (customer) => {
    setSelectedCandidate(customer);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ margin: '20px auto', maxWidth: '800px',fontWeight:"800" }}>
      {/* Dropdown menu for selecting country */}
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

      {/* List of candidates for the selected country */}
      <div style={{ marginTop: '20px' }}>
        <h2>List of Candidates</h2>
        {customersForCountry.map((candidate) => (
          <Card key={candidate.id} style={{ marginBottom: '10px', width: '100%',background:"#DA70D6" }}>
            <CardHeader
              title={<strong>{`${candidate.firstName} ${candidate.lastName}`}</strong>}
            />
            <CardContent>
              <Typography><h5><strong>Email ID:</strong>{candidate.email}</h5></Typography>
              <Typography><h5><strong>Contact:</strong> {candidate.contact}</h5></Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleCustomerSelect(candidate)}><h6>View Details</h6></Button>
            </CardActions>
          </Card>
        ))}
      </div>

      {/* Modal for displaying customer details */}
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
            <h5><strong>Candidate Details</strong></h5>
          </Typography>
          <div style={{ marginTop: '20px' }}>
            {selectedCandidate && (
              <div>
                <Typography><h5><strong>Email ID:</strong> {selectedCandidate.email}</h5></Typography>
                <Typography><h5><strong>First Name:</strong> {selectedCandidate.firstName}</h5></Typography>
                <Typography><h5><strong>Last Name:</strong> {selectedCandidate.lastName}</h5></Typography>
                <Typography><h5><strong>Subscription:</strong> {selectedCandidate.Subscription}</h5></Typography>
                <Typography><h5><strong>Contact:</strong> {selectedCandidate.contact}</h5></Typography>
                <Typography><h5><strong>Address:</strong> {selectedCandidate.address}</h5></Typography>
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Candidates;