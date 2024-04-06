import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
// import { Box } from '@mui/material';
import ChangePassword from './ChangePassword';
import {TextField} from '@mui/material';

const dummyData = {
  email: 'john.doe@example.com',
  firstName: 'John',
  lastName: 'Doe',
  CategoryType: 'Web3',
  ProgrammeType:"Introduction",
  contact: '123-456-7890',
  address: '123 Main St, Cityville',
};

export default function Account() {
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [userData,setuserData]=useState(dummyData);
  const [editable, setEditable] = useState(false);
  const handleOpenChangePassword = () => {
    setChangePasswordOpen(true);
  };

  const handleCloseChangePassword = () => {
    setChangePasswordOpen(false);
  };
  const handleEdit = () => {
    setEditable(true);
  };
  const handleSave=()=>{
    setEditable(false);
  }
  const handleDataChange = (field, value) => {
    setuserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  return (
    <Card sx={{ minWidth: 375, maxWidth: 400, margin: 'auto', marginTop: 8, padding: 2 }}>
      {/* Profile Picture Section */}
      <Avatar
        alt="Profile Picture"
        src="/path/to/profile-picture.jpg" // Replace with the actual path or URL
        sx={{ width: 100, height: 100, margin: 'auto'}}
      />

      <CardContent>
        <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
          <h5>{userData.firstName} {userData.lastName}</h5>
        </Typography>
        <Typography sx={{ textAlign: 'center', mb: 1, fontSize: '1.2rem', color: 'text.primary' }}>
          <strong>{userData.email}</strong>
        </Typography>

        {/* Dummy Data Section */}
        <Typography variant="body2" sx={{ textAlign: 'left', fontSize: '1rem' }}>
          {editable ? <TextField
                    value={userData.email}
                    onChange={(e) => handleDataChange('email', e.target.value)}
                    fullWidth
                    variant="filled"
                  /> : <h5><strong>Email ID :</strong> {userData.email}</h5> }
          
          <br />
          {editable ? <TextField
                    value={userData.firstName}
                    onChange={(e) => handleDataChange('firstName', e.target.value)}
                    fullWidth
                    variant="filled"
                  /> : <h5><strong>First Name :</strong> {userData.firstName}</h5> }
          <br />
          {editable ? <TextField
                    value={userData.lastName}
                    onChange={(e) => handleDataChange('lastName', e.target.value)}
                    fullWidth
                    variant="filled"
                  /> : <h5><strong>Last Name :</strong> {userData.lastName}</h5> }
          <br />
          {editable ? <TextField
                    value={userData.premisesType}
                    onChange={(e) => handleDataChange('CategoryType', e.target.value)}
                    fullWidth
                    variant="filled"
                  /> :<h5> <strong>Category Type :</strong> {userData.CategoryType}</h5> }
          <br />
          {editable ? <TextField
                    value={userData.premisesType}
                    onChange={(e) => handleDataChange('ProgrammeType', e.target.value)}
                    fullWidth
                    variant="filled"
                  /> : <h5><strong>Programme Type : </strong>{userData.ProgrammeType}</h5> }
                  <br />
          {editable ? <TextField
                    value={userData.contact}
                    onChange={(e) => handleDataChange('contact', e.target.value)}
                    fullWidth
                    variant="filled"
                  /> : <h5><strong>Contact :</strong> {userData.contact}</h5> }
          <br />
          {editable ? <TextField
                    value={userData.address}
                    onChange={(e) => handleDataChange('address', e.target.value)}
                    fullWidth
                    variant="filled"
                  /> :<h5><strong>Address :</strong> {userData.address}</h5> }
        </Typography>
      </CardContent>


      <CardActions sx={{ justifyContent: 'center'}}>
      {editable ? (
        <Button variant="contained" onClick={handleSave}>
          <strong>Save</strong>
        </Button>
      ) : (
        <Button size='small' variant="contained" onClick={handleEdit}>
          <strong>Edit</strong>
        </Button>
      )}
        <Button size="small" variant="contained" onClick={handleOpenChangePassword}>
          <strong>Change Password</strong>
        </Button>
      </CardActions>
      <ChangePassword
        open={changePasswordOpen}
        handleClose={handleCloseChangePassword}
      />
    </Card>
  );
}