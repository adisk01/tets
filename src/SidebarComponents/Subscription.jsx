import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import './Payments.css';
//import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './Subscription.css'

const Subscription = () => {
    //use this for backend
    // const [subscriptionDetails, setSubscriptionDetails] = useState(null);

    // useEffect(() => {

    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('your_api_endpoint');
    //             const data = await response.json();
    //             setSubscriptionDetails(data);
    //         } catch (error) {
    //             console.error('Error fetching subscription details:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);
  // const mockSubscriptionDetails = {
  //   customerId: '123456',
  //   planActivated: '2024-01-01',
  //   expiresOn: '2024-12-31',
  //   subscriptionCost: 59.99,
  // };

  //const [subscriptionDetails, setSubscriptionDetails] = useState(null);
  const [ProgrammeType, setProgrammeType] = useState(null);
  const Introduction={"SubscriptionType":"Yearly","CandidateID":"XXXX","CourseActivated":"1/2/2004","ExpiresOn":"1/2/2005","RenewNow":"Manage Plan","SubscriptionCost":"70$"};
  const Diploma={"SubscriptionType":"Monthly","CandidateID":"XXXX","CourseActivated":"1/2/2004","ExpiresOn":"1/2/2015","RenewNow":"Manage Plan","SubscriptionCost":"90$"};
  const Degree={"SubscriptionType":"Yearly","CandidateID":"XXXX","CourseActivated":"1/2/2004","ExpiresOn":"1/2/2005","RenewNow":"Manage Plan","SubscriptionCost":"90$"};
  // useEffect(() => {
    
  //   const fetchData = () => {
  //     setTimeout(() => {
  //       setSubscriptionDetails(mockSubscriptionDetails);
  //     }, 0); 
  //   };

  //   fetchData();
  // }, []); 
  
  const handleChange = (event) => {
    setProgrammeType(event.target.value);
  };
  return (
    <div className="subscription-container">
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel className="input-label" id="demo-select-label"><h6 style={{color:"grey"}}>Select Programme</h6></InputLabel>
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
      <div className="subscription-container">
      <table className="subscription-table">
        <tbody>
        <tr>
            <td><strong>Candidate ID</strong></td>
            {ProgrammeType==="Introduction" && <td>{Introduction.CandidateID}</td>}
            {ProgrammeType==="Diploma" && <td>{Diploma.CandidateID}</td>}
            {ProgrammeType==="Degree" && <td>{Degree.CandidateID}</td>}
            {!ProgrammeType && <td></td>}
          </tr>
          <tr>
            <td><strong>Subscription Cost</strong></td>
            {ProgrammeType==="Introduction" && <td>{Introduction.SubscriptionCost}</td>}
            {ProgrammeType==="Diploma" && <td>{Diploma.SubscriptionCost}</td>}
            {ProgrammeType==="Degree" && <td>{Degree.SubscriptionCost}</td>}
            {!ProgrammeType && <td></td>}
          </tr>
          <tr>
            <td><strong>Subscription Type</strong></td>
            {ProgrammeType==="Introduction" && <td>{Introduction.SubscriptionType}</td>}
            {ProgrammeType==="Diploma" && <td>{Diploma.SubscriptionType}</td>}
            {ProgrammeType==="Degree" && <td>{Degree.SubscriptionType}</td>}
            {!ProgrammeType && <td></td>}
          </tr>
          <tr>
            <td><strong>Expires On</strong></td>
            {ProgrammeType==="Introduction" && <td>{Introduction.ExpiresOn}</td>}
            {ProgrammeType==="Diploma" && <td>{Diploma.ExpiresOn}</td>}
            {ProgrammeType==="Degree" && <td>{Degree.ExpiresOn}</td>}
            {!ProgrammeType && <td></td>}
          </tr>
          <tr>
            <td><strong>Course Activated</strong></td>
            {ProgrammeType==="Introduction" && <td>{Introduction.CourseActivated}</td>}
            {ProgrammeType==="Diploma" && <td>{Diploma.CourseActivated}</td>}
            {ProgrammeType==="Degree" && <td>{Degree.CourseActivated}</td>}
            {!ProgrammeType && <td></td>}
          </tr>
          <tr>
            <td><strong>Renew Now</strong></td>
            <button>Manage Plan</button>
          </tr>
        </tbody>
      </table>
    </div>
      {/* {serviceType && <DynamicTable serviceType={serviceType} />} */}
    </div>
  );
};

export default Subscription;