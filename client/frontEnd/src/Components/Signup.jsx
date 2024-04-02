import React, { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import logo from "../assets/ForgeSavant1.png";
import "../Styles/signup.css";

function Signup() {
  const [isLoginPage, setIsLoginPage] = useState(false);

  const rightSideAnimation = useSpring({
    transform: isLoginPage ? "translateX(-70%)" : "translateX(0%)",
    config: { duration: 500 }
  });

  const leftSideAnimation = useSpring({
    transform: isLoginPage ? "translateX(140%)" : "translateX(0%)",
    zIndex: 1,
    config: { duration: 500 }
  });

  const toggleLoginPage = () => {
    setIsLoginPage(!isLoginPage);
  };

  return (
    <div className="Signup">
      <animated.div className="left-side" style={{ ...leftSideAnimation, backgroundColor: 'white' }}>
        <img src={logo} alt="logo" className="logo" />
      </animated.div>
      <animated.div className="right-side" style={{ ...rightSideAnimation, backgroundColor: 'black' }}>
        <animated.div className="head">
          <h3>{isLoginPage ? "Welcome Back!" : "Hello!"}</h3>
          <p className="signup-text">
            {isLoginPage ? "Login to your account" : "Sign up to get started"}
          </p>
        </animated.div>
        {isLoginPage ? (
          <>
            <input type="text" placeholder="Email" aria-label="Email" />
            <input type="password" placeholder="Password" aria-label="Password" />
            <button className="register">Login</button>
            <button onClick={toggleLoginPage} style={{ cursor: "pointer", backgroundColor: "transparent", color: "white" }}>
              Don't have an account? Sign up here.
            </button>
          </>
        ) : (
          <>
            <input type="text" placeholder="Full Name" aria-label="Full Name" />
            <input type="text" placeholder="Email" aria-label="Email" />
            <input type="password" placeholder="Password" aria-label="Password" />
            <button className="register">Register</button>
            <button onClick={toggleLoginPage} style={{ cursor: "pointer", backgroundColor: "transparent", color: "white" }}>
              Already have an account? Login here.
            </button>
          </>
        )}
      </animated.div>
    </div>
  );
}

export default Signup;
