import React from 'react';
import Logo from '../../image/toca-logo-red-dark@2x.png'
import soccerImage from '../../image/8208@2x.png';
// import ButtonImage from '../../image/cta@2x.png';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Facebook from '../../image/facebook@2x.png';
import Google from '../../image/logo-googleg-48-dp@2x.png';
import Apple from '../../image/group@2x.png';

// import FacebookIcon from '@material-ui/icons/Facebook';
// import AppleIcon from '@material-ui/icons/Apple';
import { useHistory } from 'react-router-dom';

export const LoginPage = () => {
    const history = useHistory()

    const handleClick = () => {
        console.log("Button Clicked!")
    }

    const handleClick_2 = () => {
        console.log("Facebook Icon Clicked!")
    }

    const handleClick_3 = () => {
        console.log("Google Icon Clicked!")
    }

    const handleClick_4 = () => {
        console.log("Apple Icon Clicked!")
    }

    return (

        <>
        <div className="login-page">
            <img src={Logo} alt="toca-logo" className="toca"/>
            <br />
            <img src={soccerImage} alt="soccer" className="goal"/>
            <h2 className="heading-1">GAIN FRIENDS MAKE GOOD PLAY</h2>
            <h3 className="heading-2">This app will keep you active and equipped so that you can train like the greats, 
            with the greats and become great.</h3>
            <button className="btn" onClick={handleClick}><span className="btn-text">SIGN UP WITH EMAIL</span></button>
            <h4 className="heading-3">or continue with</h4>
            <div className="icon-container">
                <img src={Facebook} alt="facebook-logo" className="facebook" onClick={handleClick_2}/>
                <img src={Google} alt="google-logo" className="google" onClick={handleClick_3}/>
                <img src={Apple} alt="apple-icon" className="apple" onClick={handleClick_4}/>
            </div>
            <h3 className="heading-4">Already have an account? <span className="sign-in" onClick={() => history.push("/signin")}>Sign In</span></h3>
        </div>
        </>
    )
}


