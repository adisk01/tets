import React, { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Button from '@mui/material/Button';
import Sidebar from './Sidebar';
import Box from '@mui/material/Box';
import './Dashboard.css';

const WelcomeMessage = () => (
  <div className="welcome-message">
    <h1>Welcome to Nupium Academy</h1>
  </div>
);

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const bgStyle = {
    backgroundImage: 'url(./images/FixTechCareLogo2.jpg)',
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    width: '80px',
    height: '80px',
    border: '2px solid',
    borderradius:'50%',
  };

  const handleSidebarItemClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <>
      <div className='main-page'>
        <div className='navbar'>
          <Sidebar onItemClick={handleSidebarItemClick} />
          {/* <Box style={bgStyle} /> */}
          <div className='text-box'>
            Welcome *Partner Name* into your Dashboard
          </div>
          <div>
            <NotificationsIcon />
            <Button variant="contained"><strong>Log Out</strong></Button>
          </div>
        </div>
      </div>
      <div className='restofpage'>
        {selectedComponent || <WelcomeMessage />}
      </div>
    </>
  );
};

export default Dashboard;