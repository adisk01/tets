import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Sidebar from './AdminSidebar';
import Box from '@mui/material/Box';
import './AdminSidebar.css';
import './AdminIndividual.css';
const WelcomeMessage = () => (
    <div className="welcome-message">
      <h1>Welcome to Admin Dashboard</h1>
    </div>
  );
const AdminIndividual = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const bgStyle = {
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
              Welcome *User Admin* into your Individual Dashboard
            </div>
            <div>
             
              <Button variant="contained"><strong>Log Out</strong></Button>
            </div>
          </div>
        </div>
        <div className='restofpage'>
          {selectedComponent || <WelcomeMessage />}
        </div>
      </>
    );
}

export default AdminIndividual