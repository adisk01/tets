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
//import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HistoryIcon from '@mui/icons-material/History';
//import Home from './SidebarComponents/Home';
import Account from '../SidebarComponents/Account';
import SessionHistory from '../SidebarComponents/SessionHistory';
// import Summarize from './SidebarComponents/Summarize';
// import Schedule from './SidebarComponents/Schedule';
// import SummarizeIcon from '@mui/icons-material/Summarize';
// import ScheduleIcon from '@mui/icons-material/Schedule';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Payments from '../SidebarComponents/Payments';
import Subscription from '../SidebarComponents/Subscription';
import { Navigate, useNavigate } from 'react-router-dom';
import Help from '../SidebarComponents/Help';
import Support from '../SidebarComponents/Support';
import CoursesBucket from "../SidebarComponents/CoursesBucket";

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
//     backgroundImage:{logo},
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
    marginTop: '140px',

     // Adjust the margin based on your design
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
    >
      {/* <Box style={bgStyle} /> */}
      <img src={logo} alt="logo" style={{width:"138px",height:"138px",position: 'absolute',top:"2px",
    left: '50px',
    border: '2px solid black'}}/>
      <Divider component={Box}/>
      <List style={listStyle}>
        {[
        //   { text: 'Home', icon: <HomeIcon /> , component: <Home/>},
          { text: <strong>ACCOUNT DETAILS</strong>, icon: <AccountBoxIcon /> , component:<Account/> },
           { text: <strong>PAYMENTS</strong>, icon: <ReceiptIcon /> , component:<Payments/> },
           { text: <strong>SUBSCRIPTIONS</strong>, icon: <SubscriptionsIcon /> , component:<Subscription/> },
           { text: <strong>SESSION HISTORY</strong>, icon: <HistoryIcon />,component:<SessionHistory/> },
        //   { text: 'Summarize', icon: <SummarizeIcon /> ,component:<Summarize/>},
        //   { text: 'Schedule', icon: <ScheduleIcon /> , component:<Schedule/>},
        { text: <strong>COURSES BUCKET</strong>, icon: <QuestionAnswerIcon /> ,component:<CoursesBucket/>},
           { text: <strong>HELP CENTER</strong>, icon: <HelpCenterIcon />,component:<Support/> },
           { text: <strong>LIVE HELP</strong>, icon: <QuestionAnswerIcon /> ,component:<Help/>},
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
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handlelogout}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={<strong>LOGOUT</strong>} />
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