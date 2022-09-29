import React, {useContext, useState} from 'react';
import {Grid,Paper,Avatar,TextField,Button, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link,Redirect} from 'react-router-dom';
import { AccountContext } from '../../contexts/accountContext';

const LoginForm = () => {

    const paperStyle={padding:20,height:'70vh',width:340,margin:'40px auto'}
    const avatarStyle={backgroundColor:'#1bbd7e',margin:'25px auto'}
    const btnStyle={margin: '20px 0'}

    const {username,setUsername,password,setPassword}=useContext(AccountContext);

    const submitForm = async (e) =>{
        
        e.preventDefault();
        fetch('http://localhost:8080/api/users/validate',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username,password}) 
        })
        .then((res)=>res.json())
        .then((data)=>{
            localStorage.setItem("token",data.token);
            console.log("Logged In Successfully");
            window.location.replace("/home");
        })
        .catch(err=>{
            console.log(err);
        })
        
    }

  return (
    <Grid >
        <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign in</h2>
            </Grid>

            <TextField label='username' placeholder='Enter username' fullWidth required 
                type="text" name="username" id="username" value={username} onChange={(e)=> setUsername(e.target.value)}/>

            <TextField label='password' placeholder='Enter password' type='password' fullWidth required 
                name="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>

            <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth onClick={submitForm}>Sign In</Button>
            <Typography>
                Do you have an account?&nbsp;
                <Link to="/">
                    Sign Up
                </Link>
            </Typography>
        </Paper>
    </Grid>
  )
}

export default LoginForm