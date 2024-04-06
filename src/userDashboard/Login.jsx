// Login.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import './Login.css'; 
import {useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const HandleLogin = () =>{
       
        
    }
    const HandleRegister = () =>{
        alert('Register Successfull')
        navigate('/signup')
    }
  return (
    <>
    <div className="login-container">
    <div className='bg'></div>
        <Card className="login-card" variant="outlined">
          <CardContent>
            <div className="login-title" >
              User Login
            </div>
            <form className="login-form">
              <TextField className="login-input username" id="username" label={<h6>Username</h6>} />
              <TextField className="login-input" id="email" label={<h6>Email</h6>}  type="email"  />
              <TextField className="login-input" id="password" label={<h6>Password</h6>}  type="password"  />
            </form>
            <div className='buttons'>
            <Button className="login-button" color="primary" onClick={HandleLogin}>
                <strong>Login</strong>
              </Button>
              <Button className="login-button" color="primary" onClick={HandleRegister}>
                <strong>Not a user ? Subscribe Here!</strong>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
    
  );
}

export default Login;