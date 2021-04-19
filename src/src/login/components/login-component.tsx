import React, {useState} from 'react';
import Logo from '../../image/toca-logo-red-dark@2x.png'
// import soccerImage from '../../image/8208@2x.png';
// import ButtonImage from '../../image/cta@2x.png';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Facebook from '../../image/facebook@2x.png';
import Google from '../../image/logo-googleg-48-dp@2x.png';
import Apple from '../../image/group@2x.png';
import {motion, AnimatePresence} from 'framer-motion';
import {wrap} from 'popmotion';
import {images} from './login-images';
import {heading_1} from './login-header'
import {heading_2} from './login-header'

// import FacebookIcon from '@material-ui/icons/Facebook';
// import AppleIcon from '@material-ui/icons/Apple';
import { useHistory } from 'react-router-dom';

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }     
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
}

export const LoginPage = () => {
    const [[page, direction], setPage] = useState([0,0]);

    const imageIndex = wrap(0, images.length, page);
    // const headingIndex = wrap(0, heading_1.length, page)

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    }

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

    const String = () => {
        const strings = ['Who Will You Become?', 
        "This app will keep you active and equipped so that you can train like the greats, with the greats and become great."];
    }

    // const heading_1 = "WHO WILL YOU BECOME";

    return (
        <>
        <div className="login-page">
            <img src={Logo} alt="toca-logo" className="toca"/>
            <br />
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                key={page}
                src={images[imageIndex]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duraction: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                        paginate(1)
                    } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                    }
                }}
                />
            </AnimatePresence>
            <div className="next" onClick={() => paginate(1)}>
                <i className="arrow left"></i>
            </div>
            <div className="prev" onClick={() => paginate(-1)}>
                {">"}
            </div>
            
            <h2 className="heading-1">{heading_1}</h2>
            <h3 className="heading-2">{heading_2}</h3>
            <button className="btn" onClick={handleClick}><span className="btn-text" onClick={() => {history.push('/signin')}}>SIGN IN WITH EMAIL</span></button>
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

{/* <img src={images} alt="soccer" className="goal"/> */}


