import React, {useState} from 'react';
import {Grid,Paper,Avatar,TextField,Button, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link} from 'react-router-dom';

const SignUpForm = () => {
    
    const paperStyle={padding:20,height:'70vh',width:340,margin:'40px auto'}
    const avatarStyle={backgroundColor:'#1bbd7e',margin:'25px auto'}
    const btnStyle={margin: '20px 0'}

    const [name,setName] = useState("");
    const [email,setEmail] = useState("")
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [token,setToken]= useState("");

    const submitForm = async (e) =>{
        e.preventDefault();
        await fetch('http://localhost:8080/api/users/register',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,username,password}) 
        })
        .then((res)=>res.json())
        .then((data)=>{
            setToken(data.token);
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
                <h2>Sign Up</h2>
            </Grid>

            <TextField label='name' placeholder='Enter name' type='text' fullWidth required 
                name="name" id="name" value={name} onChange={(e)=> setName(e.target.value)}/>
            <TextField label='email' placeholder='Enter email' type='email' fullWidth required 
                name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <TextField label='username' placeholder='Enter username' fullWidth required 
                type="text" name="username" id="username" value={username} onChange={(e)=> setUsername(e.target.value)}/>

            <TextField label='password' placeholder='Enter password' type='password' fullWidth required 
                name="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>

            <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth onClick={submitForm}>Submit</Button>
            <Typography>
                Already have an account?&nbsp;
                <Link to="/loginForm">
                    Sign In
                </Link>
            </Typography>
        </Paper>
    </Grid>
  )
}

export default SignUpForm