import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../component/forms/home';
import LoginForm from '../component/forms/loginForm';
import SignUpForm from '../component/forms/signUpForm';

const Routing = () =>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignUpForm/>}/>
                <Route path="/loginForm" element={<LoginForm/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </Router>
    )
}

export default Routing;