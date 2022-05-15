import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
    const [show, setShow] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return()=>{
        window.removeEventListener("scroll",null);
    }
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className='nav__logo'
        src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
        alt='Netflix Logo'
      />
      <img
        className='nav__avatar'
        src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png'
        alt='User Image'
      />
    </div>
  );
}

export default Nav;
