import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  //efeito navbar scroll

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <h1 className="nav__logo">MoviesHall</h1>

      <img
        className="nav__avatar"
        src="https://pbs.twing.com/profile_imagens/124011999041155"
        alt="MoviesHall"
      />
    </div>
  );
}

export default Nav;
