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
// import { ContentPlaceholder } from "./";
// import {heading_1} from './login-header'
// import {heading_2} from './login-header'

// import FacebookIcon from '@material-ui/icons/Facebook';
// import AppleIcon from '@material-ui/icons/Apple';
import { useHistory } from 'react-router-dom';


// const variants = {
//     enter: (direction: number) => {
//         return {
//             x: direction > 0 ? 1000 : -1000,
//             opacity: 0
//         };
//     },
//     center: {
//         zIndex: 1,
//         x: 0,
//         opacity: 1,
//     },
//     exit: (direction: number) => {
//         return {
//             zIndex: 0,
//             x: direction < 0 ? 1000 : -1000,
//             opacity: 0
//         };
//     }     
// }

// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset: number, velocity: number) => {
//     return Math.abs(offset) * velocity;
// }

export const LoginPage = () => {

    const [openText, setOpenText] = useState(false);
    const [value, setValue] = useState(0)
    const [isToggle, setToggle] = useState(1)    
    const [[page, direction], setPage] = useState([0,0]);

    const textArray = [
        {
            header: "WHO WILL YOU BECOME?",
            description: "This app will keep you active and quipped so that you can train like the greats, with the greats, and become great",
            imageUrl: "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png"
        },
        {
            header: "HOW FAR WILL YOU GO TO BECOME THE BEST?",
            description: "Understanding how to utilize the skills that professional players train with, will make you better and over time, you'll be in your own league and play with the best soccer players around the world",
            imageUrl: "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
        },
        {
            header: "TRAIN LIKE YOU'VE NEVER TRAINED BEFORE",
            description: "Can I have Abby Wamback's autograph?",
            imageUrl: "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
        }
    ]

    const imageIndex = wrap(0, textArray.length, page);
    console.log("imageIndex", imageIndex)
    // const headingIndex = wrap(0, heading_1.length, page)

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

    const setExpanded = (openText) => {
        setOpenText(openText);
    }

    const swipeConfidenceThreshold = 10000;

    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    }

    const variants = {
        enter: (direction: number) => {
          return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
          };
        },
        center: {
          zIndex: 0,
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
    };

    const next = () => {
        setTimeout(() => {
            setExpanded(true)
        }, 100)
        setExpanded(false)
        paginate(-1)
    }

    const prev = () => {
        setTimeout(() => {
            setExpanded(true)
        }, 100)
        setExpanded(false)
        paginate(1)
    }

    return (
        <>
        <div className="login-page">
            <img src={Logo} alt="toca-logo" className="toca"/>
            <br />
{/* 
            <motion.header
                initial={false}
                onClick={setExpanded}
            > */}
            {/* <img src={textArray[0].imageUrl}/> */}
            <motion.section>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={textArray[imageIndex].imageUrl}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 150, damping: 30 },
                        opacity: { duration: 0.8 },
                        ease: [0.04, 0.62, 0.23, 0.98]
                      }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
        
                    if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                    }
                    }}
                />
            </AnimatePresence>
            </motion.section>
            <AnimatePresence initial={false}>
                {openText && (
                    <motion.section
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="open"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.8, ease: [0.34, 0.62, 0.23, 0.98] }}
                  >
                    <motion.div
                        variants={{ collapsed: { scale: 0.8 }, open: { scale: [0.8, 1.0] } }}
                        transition={{ duration: 0.8 }}
                        className="content-placeholder"
                    >
                        <h1 className="image-heading">{textArray[imageIndex].header}</h1>
                        <p className="image-description">{textArray[imageIndex].description}</p>
                    </motion.div>
                  </motion.section>
                )}
            </AnimatePresence>
           
            <div className="next" onClick={next}>
                <i className="arrow left"> </i>
            </div>
            <div className="prev" onClick={prev}>
                <i className="arrow left"> </i>
            </div>

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


