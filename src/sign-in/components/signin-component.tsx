import React, {useState} from 'react';
import Facebook from '../../image/facebook@2x.png';
import Google from '../../image/logo-googleg-48-dp@2x.png'
import Apple from '../../image/group@2x.png';
import {ChevronLeft } from 'react-bootstrap-icons';
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";

const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
}

const handleClick = () => {
    console.log("Sign In button works");
}

const handleClick_2 = () => {
    console.log("Facebook works")
}

const handleClick_3 = () => {
    console.log("Google works")
}

const handleClick_4 = () => {
    console.log("Apple works")
}

export const SignIn = () => {
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory()

    return (
        <>  
            <div className="sign-in">
            <div className="form1">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-control">
                <div className="sign-in-1">
                <h1 className="sign-in-text"><span><i className="arrow left" onClick={() => {history.goBack()}}></i></span>&nbsp;&nbsp;&nbsp;Sign In</h1>
                </div>
                <label htmlFor="userName" className="user">Username <span className="asterisk1">*</span></label>
                <br />
                <input 
                    className="text-box-1"
                    type="text" 
                    id="userName" 
                    name="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <br />
                <label htmlFor="password" className="pass">Password <span className="asterisk2">*</span></label>
                <br />
                <input 
                    className="text-box-2"
                    type="text"
                    id="password"
                    name="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            </form>
            </div>
            <button type="submit" className="btn" onClick={handleClick}><span className="btn-text">SIGN IN</span></button>
            <h4><span className="heading-3">or continue with</span></h4>
            <div className="icon-container">
                <img src={Facebook} alt="facebook-logo" className="facebook" onClick={handleClick_2}/>
                <img src={Google} alt="google-logo" className="google" onClick={handleClick_3}/>
                <img src={Apple} alt="apple-icon" className="apple" onClick={handleClick_4}/>
            </div>
            <h3 className="heading-4">Don't have an account? <span className="sign-up" onClick={() => {history.push('/login')}}>Sign Up</span></h3>
            </div>
        </>
    )
}
