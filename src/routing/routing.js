import React,{useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../components/forms/home';
import LoginForm from '../components/forms/loginForm';
import SignUpForm from '../components/forms/signUpForm';
import { AccountContext } from '../contexts/accountContext';

const Routing = () =>{

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const providerValue= {
        username,setUsername,
        password,setPassword
    }

    const contextProvider=(ele)=>{
        return (
            <AccountContext.Provider value={providerValue}>
                {ele}
            </AccountContext.Provider>
        )
    }

    return (
        <Router>
                <Routes>
                    <Route path="/" element={contextProvider(<SignUpForm/>)}/>
                    <Route path="/loginForm" element={contextProvider(<LoginForm/>)}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
        </Router>
    )
}

export default Routing;