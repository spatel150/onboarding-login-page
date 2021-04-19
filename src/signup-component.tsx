import React, {useState, useRef} from 'react';
import {BrowserRouter as Router, Link, Switch, useHistory} from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

export const Signup = () => {

    const history = useHistory();
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(""); 
    const [commChecked, setCommChecked] = useState(false);
    const [termsChecked, setTermsChecked] = useState(false);
    // const [checked, setChecked] = useState({commChecked: false, termsChecked: false})

    const isEnabled = firstName.length > 0 && lastName.length > 0 && email.length > 0 && phoneNumber.length > 0 && commChecked == true && termsChecked == true;
    // const isChecked = commChecked && termsChecked ? isEnabled : !isEnabled

    const policyChange = (e) => {
        setCommChecked(e.target.checked);
    }

    const termsChange = (e) => {
        setTermsChecked(e.target.checked);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleSubmitButton = (e) => {
        alert("Congratulations, You have signed up!")
        console.log("click me");
    }

    return (
        <>
            <div className="sign-up">
            <div className="form2">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-control-2">
                <div className="sign-up-1">
                <h1 className="sign-up-text"><span><i className="arrow left" onClick={() => {history.push('./login')}}></i></span>&nbsp;&nbsp;&nbsp;Sign Up</h1>
                </div>
                <label htmlFor="firstname" className="first_name">First Name <span className="asterisk1">*</span></label>
                <br />
                <input 
                    className="text-box-3"
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <br />
                <br />
                <label htmlFor="lastname" className="last_name">Last Name <span className="asterisk2">*</span></label>
                <br />
                <input 
                    className="text-box-4"
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)}
                />
                <br />
                <br />
                <label htmlFor="email" className="email">Email <span className="asterisk3">*</span></label>
                <br />
                <input 
                    className="text-box-5"
                    type="text"
                    id="email"
                    name="email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <label htmlFor="phone" className="phone-number">Phone Number <span className="asterisk4">*</span></label>
                <br />
                <input 
                    className="text-box-6"
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <br />
                <br />
                    <div>
                    <FormGroup>
                        <FormControlLabel className="check1"
                        control={<Checkbox checked={commChecked} onChange={policyChange} name="communcations" />}
                        label={<p>I would like to receive information and other communications from <br />
                        TOCA and other communications from TOCA Football, Inc. and it's <br />
                        affiliates ("TOCA") by email, phone, or text messages.</p>}
                        />
                        <FormControlLabel className="check2"
                        control={<Checkbox checked={termsChecked} onChange={termsChange} name="terms" />}
                        label= {<p>I agree to the <a href=" https://tocafootball.com/terms-conditions/" target="_blank"><span style={{fontWeight: "bold", color: "black"}}>Terms and Conditions</span></a> and <a href="https://tocafootball.com/privacy-policy/" target="_blank"><span style={{fontWeight: "bold", color: "black"}}>Privacy Policy</span></a></p>}
                        />
                    </FormGroup>
                    </div>
                    
                    </div>
                <br />
                            <Button variant="contained" className="btn" disabled={!isEnabled}><span className="btn-text" onClick={handleSubmitButton}>SIGN UP</span></Button>
                            <h3 className="heading-4">Already have an account? <span className="sign-in" onClick={() => history.push('/signin')}>Sign In</span></h3>
                    </form>
                </div>
            </div>
        </>
    )
}

// &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

{/* <div className="check1">
                        <input type="checkbox" />
                            <label htmlFor="check" className="check-box-1"> <span className="check-text-1">&nbsp;I would like to receive information and other 
                            communications from <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TOCA and other communications from TOCA Football, Inc. and it's <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;affiliates ("TOCA") by email, phone, or text messages</span></label>
    </div> */}

    // <div className="check2">
    //                     <input type="checkbox" />
    //                         <label htmlFor="check" className="check-box-2"><span className="check-text-2">&nbsp;&nbsp;I Agree to the <span className="terms">Terms and 
    //                         Conditions</span> and the <span className="privacy">Privacy Policy</span></span></label>
    // </div>

    // <div className="check1">
    //                     <Checkbox
    //                     checked={checked}
    //                     onChange={handleChange}
    //                     inputProps={{ 'aria-label': 'primary checkbox' }}
    //                     />
    //                     <div className="format-text">
    //                     <label htmlFor="check-text-1" className="check-text">
    //                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I would like to receive information and other 
    //                         communications from <br />
    //                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TOCA and other communications from TOCA Football, Inc. 
    //                         and it's <br/>
    //                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;affiliates ("TOCA") by email, phone, or text messages</label>
    //                     </div>
    //                     <br />
    //                     <Checkbox
    //                     defaultChecked={true}
    //                     color="primary"
    //                     inputProps={{ 'aria-label': 'secondary checkbox' }}
    //                     />
    //                     <label htmlFor="check-text-2" className="check-text-2"><span className="check-text-2">&nbsp;&nbsp;I Agree to the <span className="terms">Terms and 
    //                          Conditions</span> and the <span className="privacy">Privacy Policy</span></span></label>
    // </div>

    // <FormGroup>
    //                     <FormControlLabel className="check1"
    //                     control={<Checkbox checked={commChecked} onChange={handleChange} name="communcations" />}
    //                     label="I would like to receive information and other communications from TOCA
    //                     and other communications from TOCA Football, Inc. 
    //                     and it's affiliates (''TOCA'') "
    //                     />
    //                     <FormControlLabel className="check2"
    //                     control={<Checkbox checked={termsChecked} onChange={handleChange_2} name="terms" />}
    //                     label= {"Hello my name is" + <span className="name">"Samidh Paqtel"</span>}
    //                     />
    //  </FormGroup>




