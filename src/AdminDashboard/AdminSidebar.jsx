import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Navigate, useNavigate } from 'react-router-dom';
import Candidates from './AdminSidebarComponents/Candidates';
import UpdatePayments from './AdminSidebarComponents/UpdatePayments';
import UpdateSessionhistory from './AdminSidebarComponents/UpdateSessionhistory';
import MessageFeature from './AdminSidebarComponents/MessageFeature';
import { Message} from '@mui/icons-material';
//import PendingServiceRequest from './AdminSidebarComponents/PendingServiceRequest';

export default function Sidebar({ onItemClick }) {
    const logo=require("../images/logo.jpeg");
  const navigate = useNavigate();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
const handlelogout = () => {
  navigate('/login')
    alert('LogoutSucessfully')
}
//   const bgStyle = {
//     backgroundImage: 'url(./images/FixTechCareLogo2.jpg)',
//     backgroundSize: 'cover', 
//     backgroundRepeat: 'no-repeat',
//     width: '100px',
//     height: '100px',
//     position: 'absolute',
//     top: '20px',
//     left: '50px',
//     border: '2px solid black', 
//   };

  const listStyle = {
    marginTop: '140px', // Adjust the margin based on your design
    background:"#3A3B3C"
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
      style={{background:"#3A3B3C"}}
    >
      <img src={logo} alt="logo" style={{width:"138px",height:"138px",position: 'absolute',top:"2px",
    left: '50px',
    border: '2px solid black'}}/>
      <Divider component={Box}/>
      <List style={listStyle}>
        {[
          { text: <strong style={{color:"white"}}>Candidates</strong>, icon: <HomeIcon /> , component: <Candidates/>},
          { text: <strong style={{color:"white"}}>Update Payments</strong>, icon: <AccountBoxIcon /> , component:<UpdatePayments/> },
          { text: <strong style={{color:"white"}}>Update Session History</strong>, icon: <ReceiptIcon /> , component:<UpdateSessionhistory/> },
          { text: <strong style={{color:"white"}}>Message Feature</strong>, icon: <Message /> , component:<MessageFeature/> }
        //   { text: 'Pending Service Request', icon: <SubscriptionsIcon /> , component:<PendingServiceRequest/> },
        ].map(({ text, icon, component }, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => onItemClick(component)}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List style={{background:"#3A3B3C"}}>
        <ListItem disablePadding>
          <ListItemButton onClick={handlelogout}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={<strong style={{color:"white"}}>LOGOUT</strong>} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        {list}
      </Drawer>
    </div>
  );
}