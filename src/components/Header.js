import React, { useEffect, useState } from "react";
import "./Tonggle.scss";
import { BsSun, BsMoon } from "react-icons/bs";

const Header = ({ scrollToHeader,scroll, scrollToAbout, scrollToResume, theme, setTheme }) => {
  const ToggleTheme = () => {
    if (theme === "dark-theme") {
      console.log("iam called dark");
      setTheme("light-theme");
    } else {
      console.log("iam called light");
      setTheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div ref={scrollToHeader} >
      <a
        className="close-navbar-toggler collapsed"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></a>
      <nav className="navbar navbar-expand-lg navbar-light HeaderFooterBg logoMainDiv py-0">
        <a className="navbar-brand h-3" >
          <span>J</span>
          <span className="text-primary">K</span>
          <span style={{ color: "#ff3636" }}>O</span>
          <span>D</span>
          <span style={{ color: "#FFD041" }}>E</span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
        <div
          className="collapse navbar-collapse justify-content-end px-lg-5 "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item px-lg-4">
              <a
                className="nav-link"
                onClick={() => scrollToAbout.current.scrollIntoView()}
              >
                About me
              </a>
            </li>
            <li className="nav-item px-lg-4">
              <a
                className="nav-link"
                onClick={() => scrollToResume.current.scrollIntoView()}
              >
                My Resume
              </a>
            </li>
            <li className="nav-item px-lg-4">
              <a
                className="nav-link fs-4"
                onClick={() => scroll.current.scrollIntoView()}
              >
                Contact
              </a>
            </li>
            <li>
              <div className="one-quarter" id="switch">
                <input type="checkbox" className="checkbox" id="chk" />
                <label
                  className="label"
                  htmlFor="chk"
                  onClick={() => ToggleTheme()}
                >
                  <i className="fa-moon">
                    <BsMoon style={{ fontSize: "12px" }} />
                  </i>
                  <i className="fas fa-sun">
                    <BsSun style={{ fontSize: "12px" }} />
                  </i>
                  <div className="ball"></div>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
