import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './Payments.css';

const Payments = () => {
  const Introduction = {
    SubscriptionCost: '90$',
    MyPlan: 'Yearly',
    ExpiresOn: '1/2/2005',
    DownloadInvoice: 'PDF',
    PaymentMode: 'Net Banking',
  };
  const Diploma = {
    SubscriptionCost: '90$',
    MyPlan: 'Yearly',
    ExpiresOn: '1/2/2015',
    DownloadInvoice: 'PDF',
    PaymentMode: 'Net Banking',
  };
  const Degree = {
    SubscriptionCost: '70$',
    MyPlan: 'Monthly',
    ExpiresOn: '1/2/2005',
    DownloadInvoice: 'PDF',
    PaymentMode: 'Net Banking',
  };

  useEffect(() => {
    // Simulate fetching data after a delay
    const fetchData = () => {
      setTimeout(() => {
        //setBillingDetails(mockBillingDetails);
      }, 0); // 1 second delay for simulation
    };

    fetchData();
  }, []); // Empty dependency array to ensure useEffect runs only once

  const [ProgrammeType, setProgrammeType] = useState(null);

  const handleChange = (event) => {
    setProgrammeType(event.target.value);
  };

  const handleDownloadInvoice = () => {
    // Implement your logic to download the invoice here
    alert('Invoice downloaded!');
  };

  return (
    <div className="payment-container">
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel className='input-label' id="demo-select-label"><h6 style={{color:"grey"}}>Select Programme</h6></InputLabel>
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
      <div className="payment-container">
      <table className="payment-table">
        <tbody>
          <tr>
            <td><strong>Subscription Cost</strong></td>
            {ProgrammeType==="Introduction" && <td>{Introduction.SubscriptionCost}</td>}
            {ProgrammeType==="Diploma" && <td>{Diploma.SubscriptionCost}</td>}
            {ProgrammeType==="Degree" && <td>{Degree.SubscriptionCost}</td>}
            {!ProgrammeType && <td></td>}
          </tr>
          <tr>
            <td><strong>My Plan</strong></td>
            {ProgrammeType==="Introduction" && <td>{Introduction.MyPlan}</td>}
            {ProgrammeType==="Diploma" && <td>{Diploma.MyPlan}</td>}
            {ProgrammeType==="Degree" && <td>{Degree.MyPlan}</td>}
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
            <td><strong>Download Invoice</strong></td>
            {ProgrammeType==="Introduction" && <td>{Introduction.DownloadInvoice}</td>}
            {ProgrammeType==="Diploma" && <td>{Diploma.DownloadInvoice}</td>}
            {ProgrammeType==="Degree" && <td>{Degree.DownloadInvoice}</td>}
            {!ProgrammeType && <td></td>}
          </tr>
          <tr>
            <td><strong>Payment Mode</strong></td>
            <td>Net Banking</td>
          </tr>
        </tbody>
      </table>
    </div>
      {/* {serviceType && <DynamicTable serviceType={serviceType} />} */}
    </div>
  );
};

export default Payments;
